// Logo converter script
// Run with: node convert-logo.js

const fs = require('fs');
const path = require('path');

// Check if Sharp is available (npm install sharp)
let sharp;
try {
    sharp = require('sharp');
    console.log('Using Sharp for image processing...');
} catch (err) {
    console.log('Sharp not found. Install with: npm install sharp');
    console.log('Falling back to manual instructions...');
}

async function convertLogo() {
    const inputPath = path.join(__dirname, 'public', 'images', 'logo.png');
    const outputPath = path.join(__dirname, 'public', 'images', 'logo-black.png');
    
    if (!fs.existsSync(inputPath)) {
        console.error('Logo file not found at:', inputPath);
        return;
    }
    
    if (sharp) {
        try {
            await sharp(inputPath)
                .negate() // Invert colors
                .grayscale() // Convert to grayscale
                .png()
                .toFile(outputPath);
            
            console.log('✅ Black logo created successfully at:', outputPath);
            console.log('You can now use logo-black.png in your application');
        } catch (error) {
            console.error('Error converting logo:', error);
        }
    } else {
        console.log('\n📋 Manual conversion options:');
        console.log('1. Open logo-converter.html in your browser');
        console.log('2. Use online tools like photopea.com or canva.com');
        console.log('3. Install Sharp: npm install sharp, then run this script again');
        console.log('4. Use image editing software like GIMP or Photoshop');
    }
}

convertLogo();