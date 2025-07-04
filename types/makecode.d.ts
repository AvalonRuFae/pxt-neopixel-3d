/**
 * Global type definitions for MakeCode micro:bit environment
 * This file provides missing type definitions to resolve TypeScript errors
 * while maintaining compatibility with the MakeCode build system.
 */

// Extend the global scope with MakeCode-specific types
declare global {
    // MakeCode Buffer class
    interface Buffer {
        [index: number]: number;
        length: number;
        fill(value: number, start?: number, end?: number): void;
        shift(offset: number, start?: number, end?: number): void;
        rotate(offset: number, start?: number, end?: number): void;
    }

    // Digital pin constants - using const enum to avoid conflicts
    const enum DigitalPin {
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

    // Extend Math with MakeCode-specific functions
    interface Math {
        /**
         * Integer division function from MakeCode
         */
        idiv(dividend: number, divisor: number): number;
        
        /**
         * Clamp function from MakeCode
         */
        clamp(min: number, max: number, value: number): number;
    }

    // MakeCode pins namespace
    namespace pins {
        /**
         * Create a new buffer with specified size
         */
        function createBuffer(size: number): Buffer;
        
        /**
         * Write a digital value to the specified pin
         */
        function digitalWritePin(pin: DigitalPin, value: number): void;
    }

    // WS2812B driver namespace
    namespace ws2812b {
        /**
         * Send buffer data to the WS2812B LED strip
         */
        function sendBuffer(buffer: Buffer, pin: DigitalPin): void;
        
        /**
         * Set the buffer mode for the LED strip (optional feature)
         */
        function setBufferMode(pin: DigitalPin, mode: number): void;
    }

    // Basic utilities namespace
    namespace basic {
        /**
         * Pause execution for the specified number of milliseconds
         */
        function pause(ms: number): void;
    }
}

// This export statement is required for the global declarations to work
export {};
