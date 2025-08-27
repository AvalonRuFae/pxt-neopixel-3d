// NeoPixel Extension Test & Demo
// This file demonstrates and tests the NeoPixel extension features

// NeoPixel 3D Cube Extension Test Suite
// Tests all functionality of the cube-focused NeoPixel extension

/**
 * Test 1: Basic cube creation and validation
 */
function testCubeCreation() {
  console.log("=== Testing Cube Creation ===");
  
  // Test valid cube creation
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  console.log("2x2x2 cube created");
  console.log("Total LEDs: " + cube.length()); // Should be 8
  console.log("X size: " + cube.lengthX()); // Should be 2
  console.log("Y size: " + cube.lengthY()); // Should be 2
  console.log("Z size: " + cube.lengthZ()); // Should be 2
  
  // Test larger cube
  let bigCube = neopixel_3d.create(DigitalPin.P1, 3, 3, 3, NeoPixelMode.RGB);
  console.log("3x3x3 cube created with " + bigCube.length() + " LEDs"); // Should be 27
}

/**
* Test 2: Invalid cube dimensions (error handling)
*/
function testInvalidDimensions() {
  console.log("=== Testing Invalid Dimensions ===");
  
  // Test zero dimensions
  let zeroCube = neopixel_3d.create(DigitalPin.P0, 0, 2, 2, NeoPixelMode.RGB);
  console.log("Zero dimension cube - X size: " + zeroCube.lengthX()); // Should be 0
  
  // Test negative dimensions
  let negCube = neopixel_3d.create(DigitalPin.P0, -1, 2, 2, NeoPixelMode.RGB);
  console.log("Negative dimension cube - X size: " + negCube.lengthX()); // Should be 0
}

/**
* Test 3: Setting individual cube colors
*/
function testCubeColors() {
  console.log("=== Testing Cube Colors ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Test setting colors at different positions
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);    // Corner 1
  cube.setCubeColor(1, 1, 1, NeoPixelColors.Blue);   // Corner 2
  cube.setCubeColor(0, 1, 0, NeoPixelColors.Green);  // Middle position
  
  console.log("Set colors at (0,0,0), (1,1,1), and (0,1,0)");
  
  // Test boundary conditions (should not crash)
  cube.setCubeColor(-1, 0, 0, NeoPixelColors.White); // Invalid: negative
  cube.setCubeColor(2, 0, 0, NeoPixelColors.White);  // Invalid: too large
  cube.setCubeColor(0, 2, 0, NeoPixelColors.White);  // Invalid: too large
  cube.setCubeColor(0, 0, 2, NeoPixelColors.White);  // Invalid: too large
  
  console.log("Tested boundary conditions (should handle gracefully)");
}

/**
* Test 4: Show color functionality
*/
function testShowColor() {
  console.log("=== Testing Show Color ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Test showing solid colors
  cube.showColor(NeoPixelColors.Red);
  console.log("Showed red color on entire cube");
  
  basic.pause(500);
  
  cube.showColor(NeoPixelColors.Blue);
  console.log("Showed blue color on entire cube");
}

/**
* Test 5: Brightness control
*/
function testBrightness() {
  console.log("=== Testing Brightness ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Test different brightness levels
  cube.setBrightness(255); // Max brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 255 (max)");
  
  basic.pause(500);
  
  cube.setBrightness(128); // Half brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 128 (half)");
  
  basic.pause(500);
  
  cube.setBrightness(32); // Low brightness
  cube.showColor(NeoPixelColors.White);
  console.log("Set brightness to 32 (low)");
}

/**
* Test 6: Clear and update functions
*/
function testClearAndUpdate() {
  console.log("=== Testing Clear and Update ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Set some colors
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);
  cube.setCubeColor(1, 1, 1, NeoPixelColors.Blue);
  cube.show();
  console.log("Set colors and showed");
  
  basic.pause(1000);
  
  // Test clear
  cube.clear();
  cube.show();
  console.log("Cleared cube");
  
  basic.pause(500);
  
  // Test update (clear + show in one)
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Green);
  cube.update(); // This should clear everything and show
  console.log("Used update function");
}

/**
* Test 7: RGB and HSL color functions
*/
function testColorFunctions() {
  console.log("=== Testing Color Functions ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Test RGB function
  let customRed = neopixel_3d.rgb(255, 0, 0);
  cube.setCubeColor(0, 0, 0, customRed);
  console.log("Set custom RGB color (255,0,0)");
  
  // Test HSL function
  let hslColor = neopixel_3d.hsl(120, 100, 50); // Pure green
  cube.setCubeColor(1, 0, 0, hslColor);
  console.log("Set HSL color (120°, 100%, 50%)");
  
  // Test predefined colors
  cube.setCubeColor(0, 1, 0, neopixel_3d.colors(NeoPixelColors.Purple));
  console.log("Set predefined purple color");
  
  cube.show();
}

/**
* Test 8: Different NeoPixel modes
*/
function testDifferentModes() {
  console.log("=== Testing Different Modes ===");
  
  // Test RGB mode
  let rgbCube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  console.log("Created RGB mode cube");
  
  // Test RGB_RGB mode
  let rgbRgbCube = neopixel_3d.create(DigitalPin.P1, 2, 2, 2, NeoPixelMode.RGB_RGB);
  console.log("Created RGB_RGB mode cube");
  
  // Test RGBW mode
  let rgbwCube = neopixel_3d.create(DigitalPin.P2, 2, 2, 2, NeoPixelMode.RGBW);
  console.log("Created RGBW mode cube");
}

/**
* Test 9: Power consumption estimation
*/
function testPowerConsumption() {
  console.log("=== Testing Power Consumption ===");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 2, 2, 2, NeoPixelMode.RGB);
  
  // Test power when all LEDs are off
  cube.clear();
  console.log("Power consumption (all off): " + cube.power() + " mA");
  
  // Test power when all LEDs are white (max consumption)
  cube.showColor(NeoPixelColors.White);
  console.log("Power consumption (all white): " + cube.power() + " mA");
}

/**
* Main test runner - runs all tests
*/
function runAllTests() {
  console.log("Starting NeoPixel 3D Cube Tests...");
  console.log("=====================================");
  
  testCubeCreation();
  basic.pause(1000);
  
  testInvalidDimensions();
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
  
  console.log("=====================================");
  console.log("All tests completed!");
}

/**
* Interactive demo showing cube capabilities
*/
function interactiveDemo() {
  console.log("Starting Interactive Demo...");
  
  let cube = neopixel_3d.create(DigitalPin.P0, 3, 3, 3, NeoPixelMode.RGB);
  
  // Demo 1: Light up corners
  console.log("Demo: Lighting up all 8 corners");
  cube.setCubeColor(0, 0, 0, NeoPixelColors.Red);
  cube.setCubeColor(2, 0, 0, NeoPixelColors.Green);
  cube.setCubeColor(0, 2, 0, NeoPixelColors.Blue);
  cube.setCubeColor(0, 0, 2, NeoPixelColors.Yellow);
  cube.setCubeColor(2, 2, 0, NeoPixelColors.Purple);
  cube.setCubeColor(2, 0, 2, NeoPixelColors.Orange);
  cube.setCubeColor(0, 2, 2, NeoPixelColors.Violet);
  cube.setCubeColor(2, 2, 2, NeoPixelColors.White);
  cube.show();
  
  basic.pause(3000);
  
  // Demo 2: Animate through layers
  console.log("Demo: Animating through Z layers");
  for (let z = 0; z < 3; z++) {
      cube.clear();
      for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
              cube.setCubeColor(x, y, z, NeoPixelColors.Blue);
          }
      }
      cube.show();
      basic.pause(1000);
  }
  
  cube.clear();
  cube.show();
  console.log("Demo completed!");
}

// Run the tests
runAllTests();
basic.pause(2000);

// Run the demo
interactiveDemo();
