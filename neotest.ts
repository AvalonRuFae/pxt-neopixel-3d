// NeoPixel Extension Test & Demo
// This file demonstrates and tests the NeoPixel extension features

// Test basic 2D matrix functionality
function test2DMatrix() {
    let strip = neopixel_3d.create(DigitalPin.P0, 24, NeoPixelMode.RGB);
    
    // Test individual pixel colors
    strip.setPixelColor(0, 0xff0000); // Red
    strip.setPixelColor(1, 0x00ff00); // Green
    strip.setPixelColor(2, 0x0000ff); // Blue
    strip.show();
    basic.pause(2000);
    
    // Test rainbow effect
    strip.showRainbow();
    basic.pause(1000);
    
    // Test rotation - fixed off-by-one error
    for (let i = 0; i < strip.length(); i++) { 
        strip.rotate();
        strip.show();
        basic.pause(100);
    }
    
    // Test solid colors
    strip.showColor(NeoPixelColors.Red);
    basic.pause(1000);
    strip.showColor(NeoPixelColors.Green);
    basic.pause(1000);
    
    // Test setting all pixels individually - fixed off-by-one error
    for (let i = 0; i < strip.length(); i++) {
        strip.setPixelColor(i, neopixel_3d.colors(NeoPixelColors.Blue));
        strip.show();
        basic.pause(50);
    }
    
    // Test with different color
    for (let i = 0; i < strip.length(); i++) {
        strip.setPixelColor(i, neopixel_3d.colors(NeoPixelColors.Green));
        strip.show();
        basic.pause(50);
    }
    
    // Test range functionality
    let sub = strip.range(5, 10); // Safe range within 24 LEDs
    sub.showColor(NeoPixelColors.Yellow);
    basic.pause(1000);
    
    // Test bar graph
    sub.showBarGraph(5, 10);
    basic.pause(1000);
    
    // Test 2D matrix setup (4x6 = 24 LEDs)
    strip.setMatrixWidth(4);
    strip.setMatrixColor(1, 1, NeoPixelColors.Purple);
    strip.setMatrixColor(2, 2, NeoPixelColors.Orange);
    strip.show();
    basic.pause(2000);
}

// Test 3D cube functionality
function test3DCube() {
    let strip = neopixel_3d.create(DigitalPin.P0, 27, NeoPixelMode.RGB); // 27 LEDs for 3x3x3 cube
    
    // Test cube setup
    strip.setCubeWidth(3); // 3x3x3 = 27 LEDs
    
    // Test setting individual cube positions
    strip.setCubeColor(0, 0, 0, NeoPixelColors.Red);    // Corner
    strip.setCubeColor(2, 2, 2, NeoPixelColors.Blue);   // Opposite corner
    strip.setCubeColor(1, 1, 1, NeoPixelColors.Green);  // Center
    strip.show();
    basic.pause(2000);
    
    // Test filling cube layer by layer
    for (let z = 0; z < 3; z++) {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                strip.setCubeColor(x, y, z, neopixel_3d.rgb(x * 85, y * 85, z * 85));
                strip.show();
                basic.pause(100);
            }
        }
    }
    basic.pause(1000);
    
    // Test cube with too many LEDs (should set width to 0)
    let bigStrip = neopixel_3d.create(DigitalPin.P1, 20, NeoPixelMode.RGB);
    bigStrip.setCubeWidth(3); // 3^3 = 27 > 20, so width should become 0
    // This should safely do nothing
    bigStrip.setCubeColor(0, 0, 0, NeoPixelColors.Red);
    bigStrip.show();
}

// Main test runner
function runAllTests() {
    // Test 2D matrix features
    test2DMatrix();
    
    basic.pause(2000);
    
    // Test 3D cube features  
    test3DCube();
}

// Simple interactive demo
function simpleDemo() {
    let strip = neopixel_3d.create(DigitalPin.P0, 24, NeoPixelMode.RGB);
    strip.setBrightness(100);
    
    // Simple animation loop
    while (true) {
        // Rainbow effect
        strip.showRainbow();
        basic.pause(1000);
        
        // Solid colors
        strip.showColor(NeoPixelColors.Red);
        basic.pause(500);
        strip.showColor(NeoPixelColors.Green);
        basic.pause(500);
        strip.showColor(NeoPixelColors.Blue);
        basic.pause(500);
        
        // Clear and pause
        strip.clear();
        strip.show();
        basic.pause(500);
    }
}

// Run all tests
runAllTests();
basic.pause(2000);

// Start simple demo
simpleDemo();
