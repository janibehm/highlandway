const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure output directory exists
const outputDir = path.join(__dirname, 'static', 'img');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Path to your original high-quality image
const sourceImage = path.join(__dirname, 'static/source-images', 'distillery-hero.webp'); // Update this path!

// Image variants we want to generate
const variants = [
    { name: 'distillery-hero-mobile.webp', width: 480 },
    { name: 'distillery-hero-tablet.webp', width: 768 },
    { name: 'distillery-hero.webp', width: 1440 }
];

// Generate each variant
async function generateImages() {
    console.log('Generating responsive hero images...');
    
    try {
        for (const variant of variants) {
            const outputPath = path.join(outputDir, variant.name);
            
            await sharp(sourceImage)
                .resize(variant.width)
                .webp({ quality: 80 }) // 80% is usually a good balance of quality and file size
                .toFile(outputPath);
                
            console.log(`✅ Generated ${variant.name} (${variant.width}px)`);
        }
        
        console.log('🎉 All images generated successfully!');
    } catch (error) {
        console.error('❌ Error generating images:', error);
    }
}

generateImages();