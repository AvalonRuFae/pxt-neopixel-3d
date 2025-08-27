// NeoPixel Extension Test & Demo
// This file demonstrates and tests the NeoPixel extension features

// NeoPixel 3D Cube Extension Test Suite
// Tests designed for 5x5x5 cube hardware (125 LEDs total)
// Focus on valid functionality only

/**
 * Test 1: Basic cube creation for 5x5x5 hardware
 */
function testCubeCreation() {
  console.log("=== Testing 5x5x5 Cube Creation ===");
  
  // Test our actual hardware cube
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  console.log("5x5x5 cube created");
  console.log("Total LEDs: " + cube.length()); // Should be 125
  console.log("X size: " + cube.lengthX()); // Should be 5
  console.log("Y size: " + cube.lengthY()); // Should be 5
  console.log("Z size: " + cube.lengthZ()); // Should be 5
  
  // Test smaller cube for comparison
  let smallCube = neopixel_3d.create(DigitalPin.P1, 2, 2, 2, NeoPixelMode.RGB);
  console.log("2x2x2 cube created with " + smallCube.length() + " LEDs"); // Should be 8
}

/**
* Test 2: Setting individual cube colors on 5x5x5 hardware
*/
function testCubeColors() {
  console.log("=== Testing 5x5x5 Cube Colors ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Test setting colors at 8 corners of the 5x5x5 cube
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);    // Corner 1
  cube.setCubeColor(4, 0, 0, NeoPixelColors.Green);  // Corner 2
  cube.setCubeColor(0, 4, 0, NeoPixelColors.Blue);   // Corner 3
  cube.setCubeColor(0, 0, 4, NeoPixelColors.Yellow); // Corner 4
  cube.setCubeColor(4, 4, 0, NeoPixelColors.Purple); // Corner 5
  cube.setCubeColor(4, 0, 4, NeoPixelColors.Orange); // Corner 6
  cube.setCubeColor(0, 4, 4, NeoPixelColors.Violet); // Corner 7
  cube.setCubeColor(4, 4, 4, NeoPixelColors.White);  // Corner 8
  
  // Test center position
  cube.setCubeColor(2, 2, 2, NeoPixelColors.Indigo); // Center of cube
  
  console.log("Set colors at all 8 corners and center of 5x5x5 cube");
  cube.show();
}

/**
* Test 3: Show color functionality on full 5x5x5 cube
*/
function testShowColor() {
  console.log("=== Testing Show Color on 5x5x5 Cube ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Test showing solid colors on all 125 LEDs
  cube.showColor(NeoPixelColors.Red);
  console.log("Showed red color on entire 5x5x5 cube (125 LEDs)");
  
  basic.pause(1000);
  
  cube.showColor(NeoPixelColors.Blue);
  console.log("Showed blue color on entire 5x5x5 cube");
  
  basic.pause(1000);
  
  cube.showColor(NeoPixelColors.Green);
  console.log("Showed green color on entire 5x5x5 cube");
}

/**
* Test 4: Brightness control on 5x5x5 cube
*/
function testBrightness() {
  console.log("=== Testing Brightness on 5x5x5 Cube ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Test different brightness levels on 125 LEDs
  cube.setBrightness(255); // Max brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 255 (max) - 125 LEDs at full power");
  
  basic.pause(1000);
  
  cube.setBrightness(128); // Half brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 128 (half) - power saving mode");
  
  basic.pause(1000);
  
  cube.setBrightness(64); // Quarter brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 64 (quarter) - low power mode");
}

/**
* Test 5: Clear and update functions on 5x5x5 cube
*/
function testClearAndUpdate() {
  console.log("=== Testing Clear and Update on 5x5x5 Cube ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Set colors on multiple positions
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);
  cube.setCubeColor(4, 4, 4, NeoPixelColors.Blue);
  cube.setCubeColor(2, 2, 2, NeoPixelColors.Green);
  cube.show();
  console.log("Set colors at corners and center, then showed");
  
  basic.pause(1500);
  
  // Test clear on 125 LEDs
  cube.clear();
  cube.show();
  console.log("Cleared all 125 LEDs");
  
  basic.pause(1000);
  
  // Test update (clear + show in one)
  cube.setCubeColor(1, 1, 1, NeoPixelColors.Purple);
  cube.update(); // This should clear everything and show
  console.log("Used update function on 5x5x5 cube");
}

/**
* Test 6: RGB and HSL color functions on 5x5x5 cube
*/
function testColorFunctions() {
  console.log("=== Testing Color Functions on 5x5x5 Cube ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Test RGB function on different positions
  let customRed = neopixel_3d.rgb(255, 0, 0);
  cube.setCubeColor(0, 0, 0, customRed);
  
  let customGreen = neopixel_3d.rgb(0, 255, 0);
  cube.setCubeColor(4, 0, 0, customGreen);
  
  let customBlue = neopixel_3d.rgb(0, 0, 255);
  cube.setCubeColor(0, 4, 0, customBlue);
  
  console.log("Set custom RGB colors at different corners");
  
  // Test HSL function
  let hslRed = neopixel_3d.hsl(0, 100, 50);     // Pure red
  let hslGreen = neopixel_3d.hsl(120, 100, 50); // Pure green
  let hslBlue = neopixel_3d.hsl(240, 100, 50);  // Pure blue
  
  cube.setCubeColor(0, 0, 4, hslRed);
  cube.setCubeColor(4, 4, 0, hslGreen);
  cube.setCubeColor(4, 0, 4, hslBlue);
  
  console.log("Set HSL colors at remaining corners");
  
  // Test predefined colors
  cube.setCubeColor(0, 4, 4, neopixel_3d.colors(NeoPixelColors.Purple));
  cube.setCubeColor(2, 2, 2, neopixel_3d.colors(NeoPixelColors.White));
  
  console.log("Set predefined colors at center and corner");
  
  cube.show();
}

/**
* Test 7: Different NeoPixel modes
*/
function testDifferentModes() {
  console.log("=== Testing Different Modes ===");
  
  // Test RGB mode
  let rgbCube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  rgbCube.setCubeColor(0, 0, 0, NeoPixelColors.Red);
  rgbCube.show();
  console.log("Created and tested RGB mode cube");
  
  basic.pause(500);
  
  // Test RGB_RGB mode
  let rgbRgbCube = neopixel_3d.create(DigitalPin.P1, 5, 5, 5, NeoPixelMode.RGB_RGB);
  rgbRgbCube.setCubeColor(0, 0, 0, NeoPixelColors.Green);
  rgbRgbCube.show();
  console.log("Created and tested RGB_RGB mode cube");
  
  basic.pause(500);
  
  // Test RGBW mode
  let rgbwCube = neopixel_3d.create(DigitalPin.P2, 5, 5, 5, NeoPixelMode.RGBW);
  rgbwCube.setCubeColor(0, 0, 0, NeoPixelColors.Blue);
  rgbwCube.show();
  console.log("Created and tested RGBW mode cube");
}

/**
* Test 8: Power consumption estimation for 5x5x5 cube
*/
function testPowerConsumption() {
  console.log("=== Testing Power Consumption on 5x5x5 Cube ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Test power when all 125 LEDs are off
  cube.clear();
  console.log("Power consumption (all 125 LEDs off): " + cube.power() + " mA");
  
  // Test power when all 125 LEDs are white (max consumption)
  cube.showColor(NeoPixelColors.White);
  console.log("Power consumption (all 125 LEDs white): " + cube.power() + " mA");
  
  // Test power with partial lighting
  cube.clear();
  for (let i = 0; i < 5; i++) {
      cube.setCubeColor(i, i, i, NeoPixelColors.Red); // Diagonal line
  }
  cube.show();
  console.log("Power consumption (5 LEDs diagonal): " + cube.power() + " mA");
}

/**
* Main test runner - runs all tests for 5x5x5 cube
*/
function runAllTests() {
  console.log("Starting NeoPixel 5x5x5 Cube Tests...");
  console.log("====================================");
  
  testCubeCreation();
  basic.pause(1000);
  
  testCubeColors();
  basic.pause(1000);
  
  testShowColor();
  basic.pause(1000);
  
  testBrightness();
  basic.pause(1000);
  
  testClearAndUpdate();
  basic.pause(1000);
  
  testColorFunctions();
  basic.pause(1000);
  
  testDifferentModes();
  basic.pause(1000);
  
  testPowerConsumption();
  
  console.log("====================================");
  console.log("All 5x5x5 cube tests completed!");
}

/**
* Interactive demo showing 5x5x5 cube capabilities
*/
function interactiveDemo() {
  console.log("Starting 5x5x5 Cube Interactive Demo...");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 5, 5, 5, NeoPixelMode.RGB);
  
  // Demo 1: Light up all 8 corners of 5x5x5 cube
  console.log("Demo 1: Lighting up all 8 corners");
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);
  cube.setCubeColor(4, 0, 0, NeoPixelColors.Green);
  cube.setCubeColor(0, 4, 0, NeoPixelColors.Blue);
  cube.setCubeColor(0, 0, 4, NeoPixelColors.Yellow);
  cube.setCubeColor(4, 4, 0, NeoPixelColors.Purple);
  cube.setCubeColor(4, 0, 4, NeoPixelColors.Orange);
  cube.setCubeColor(0, 4, 4, NeoPixelColors.Violet);
  cube.setCubeColor(4, 4, 4, NeoPixelColors.White);
  cube.show();
  
  basic.pause(3000);
  
  // Demo 2: Animate through Z layers (5 layers)
  console.log("Demo 2: Animating through 5 Z layers");
  for (let z = 0; z < 5; z++) {
      cube.clear();
      // Light up entire layer
      for (let x = 0; x < 5; x++) {
          for (let y = 0; y < 5; y++) {
              cube.setCubeColor(x, y, z, NeoPixelColors.Blue);
          }
      }
      cube.show();
      console.log("Layer " + z + " lit (25 LEDs)");
      basic.pause(1000);
  }
  
  // Demo 3: Create a 3D cross pattern
  console.log("Demo 3: Creating 3D cross pattern");
  cube.clear();
  
  // Vertical line through center
  for (let z = 0; z < 5; z++) {
      cube.setCubeColor(2, 2, z, NeoPixelColors.Red);
  }
  
  // Horizontal line X-axis through center
  for (let x = 0; x < 5; x++) {
      cube.setCubeColor(x, 2, 2, NeoPixelColors.Green);
  }
  
  // Horizontal line Y-axis through center
  for (let y = 0; y < 5; y++) {
      cube.setCubeColor(2, y, 2, NeoPixelColors.Blue);
  }
  
  cube.show();
  console.log("3D cross pattern created");
  basic.pause(3000);
  
  // Demo 4: Diagonal animation
  console.log("Demo 4: Diagonal animation");
  cube.clear();
  
  for (let i = 0; i < 5; i++) {
      cube.setCubeColor(i, i, i, NeoPixelColors.White);
      cube.show();
      basic.pause(500);
  }
  
  basic.pause(2000);
  
  // Demo 5: Edge lighting
  console.log("Demo 5: Edge lighting (frame of cube)");
  cube.clear();
  
  // Light up all edges of the cube
  for (let i = 0; i < 5; i++) {
      // Bottom face edges
      cube.setCubeColor(i, 0, 0, NeoPixelColors.Red);
      cube.setCubeColor(i, 4, 0, NeoPixelColors.Red);
      cube.setCubeColor(0, i, 0, NeoPixelColors.Red);
      cube.setCubeColor(4, i, 0, NeoPixelColors.Red);
      
      // Top face edges
      cube.setCubeColor(i, 0, 4, NeoPixelColors.Blue);
      cube.setCubeColor(i, 4, 4, NeoPixelColors.Blue);
      cube.setCubeColor(0, i, 4, NeoPixelColors.Blue);
      cube.setCubeColor(4, i, 4, NeoPixelColors.Blue);
      
      // Vertical edges
      cube.setCubeColor(0, 0, i, NeoPixelColors.Green);
      cube.setCubeColor(4, 0, i, NeoPixelColors.Green);
      cube.setCubeColor(0, 4, i, NeoPixelColors.Green);
      cube.setCubeColor(4, 4, i, NeoPixelColors.Green);
  }
  
  cube.show();
  console.log("Cube frame lit up");
  basic.pause(3000);
  
  cube.clear();
  cube.show();
  console.log("5x5x5 Cube demo completed!");
}

// Run the tests
runAllTests();
basic.pause(2000);

// Run the demo
interactiveDemo();
