const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processHeroImage() {
  const inputPath = path.join(__dirname, '../static/img/whisky-hero.webp');
  const outputDirPath = path.join(__dirname, '../static/img');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }

  try {
    // Create mobile version (640px wide)
    await sharp(inputPath)
      .resize(640) // Width of 640px, height auto-calculated to maintain aspect ratio
      .webp({ quality: 80 })
      .toFile(path.join(outputDirPath, 'whisky-hero-mobile.webp'));
      
    // Create tablet version (1024px wide)  
    await sharp(inputPath)
      .resize(1024)
      .webp({ quality: 85 })
      .toFile(path.join(outputDirPath, 'whisky-hero-tablet.webp'));
      
    console.log('Hero images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processHeroImage();
