import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = 'd:/project/sevora_lab/public';

async function optimizeFolder(folderPath, maxWidth, outputQuality = 80) {
  const fullPath = path.join(publicDir, folderPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`Directory ${fullPath} does not exist.`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputFilePath = path.join(fullPath, file);
      const baseName = path.basename(file, ext);
      const outputFilePath = path.join(fullPath, `${baseName}.webp`);

      console.log(`Optimizing ${file}...`);
      try {
        const metadata = await sharp(inputFilePath).metadata();
        const resizeOptions = { withoutEnlargement: true };
        if (metadata.width > maxWidth) {
          resizeOptions.width = maxWidth;
        }

        await sharp(inputFilePath)
          .resize(resizeOptions)
          .webp({ quality: outputQuality })
          .toFile(outputFilePath);

        const originalSize = fs.statSync(inputFilePath).size;
        const newSize = fs.statSync(outputFilePath).size;
        console.log(`  Success! ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(1)}KB`);

        // Delete the original file
        fs.unlinkSync(inputFilePath);
        console.log(`  Deleted original ${file}`);
      } catch (err) {
        console.error(`  Error optimizing ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  
  // Optimize logos: max width 800px (since they are rendered as small grid items)
  await optimizeFolder('logos', 800, 80);
  
  // Optimize project screenshots: max width 1200px
  await optimizeFolder('images', 1200, 80);

  // Optimize individual background images in public root (max width 1920px)
  const bgFiles = [
    'cta-bg.png', 
    'hero-bg.png', 
    'hero-1.png', 
    'hero-2.png', 
    'hero-3.png', 
    'before-site.png', 
    'after-site.png', 
    'logo.png', 
    'project-1.png', 
    'project-2.png'
  ];
  
  for (const bg of bgFiles) {
    const inputPath = path.join(publicDir, bg);
    if (fs.existsSync(inputPath)) {
      const ext = path.extname(bg);
      const baseName = path.basename(bg, ext);
      const outputPath = path.join(publicDir, `${baseName}.webp`);
      console.log(`Optimizing root background/image ${bg}...`);
      try {
        const metadata = await sharp(inputPath).metadata();
        const resizeWidth = Math.min(metadata.width || 1920, 1920);
        
        await sharp(inputPath)
          .resize({ width: resizeWidth, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        console.log(`  Success! ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(1)}KB`);
        
        fs.unlinkSync(inputPath);
        console.log(`  Deleted original ${bg}`);
      } catch (err) {
        console.error(`  Error optimizing ${bg}:`, err.message);
      }
    }
  }

  console.log('Image optimization complete!');
}

main().catch(console.error);
