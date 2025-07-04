/**
 * MakeCode/micro:bit type definitions
 * This file provides TypeScript definitions for MakeCode-specific APIs
 * to resolve editor errors while maintaining compatibility with the MakeCode compiler
 */

// Buffer type for MakeCode
declare class Buffer {
    [index: number]: number;
    length: number;
    fill(value: number, start?: number, end?: number): void;
    shift(offset: number, start?: number, end?: number): void;
    rotate(offset: number, start?: number, end?: number): void;
}

// Digital pin enumeration
declare enum DigitalPin {
    P0 = 0,
    P1 = 1,
    P2 = 2,
    P3 = 3,
    P4 = 4,
    P5 = 5,
    P6 = 6,
    P7 = 7,
    P8 = 8,
    P9 = 9,
    P10 = 10,
    P11 = 11,
    P12 = 12,
    P13 = 13,
    P14 = 14,
    P15 = 15,
    P16 = 16,
    P19 = 19,
    P20 = 20
}

// Math extensions for MakeCode
declare namespace Math {
    /**
     * Integer division
     */
    function idiv(dividend: number, divisor: number): number;
    
    /**
     * Clamp a value between min and max
     */
    function clamp(min: number, max: number, value: number): number;
}

// Pins API
declare namespace pins {
    /**
     * Create a new buffer
     */
    function createBuffer(size: number): Buffer;
    
    /**
     * Write a digital value to a pin
     */
    function digitalWritePin(pin: DigitalPin, value: number): void;
}

// WS2812B driver API
declare namespace ws2812b {
    /**
     * Send buffer data to WS2812B LEDs
     */
    function sendBuffer(buffer: Buffer, pin: DigitalPin): void;
    
    /**
     * Set buffer mode (if supported)
     */
    function setBufferMode(pin: DigitalPin, mode: number): void;
}

// Basic API for pauses
declare namespace basic {
    /**
     * Pause execution for a specified time
     */
    function pause(ms: number): void;
}
