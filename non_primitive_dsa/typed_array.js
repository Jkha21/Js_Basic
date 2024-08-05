// ArrayBuffer and Typed Arrays Example

// 1. Creating an ArrayBuffer
console.log('Creating an ArrayBuffer');
const buffer = new ArrayBuffer(16); // 16 bytes
console.log('ArrayBuffer length:', buffer.byteLength); // Output: 16

// 2. Creating and Using Typed Arrays

// Create a Uint8Array view on the ArrayBuffer
const uint8View = new Uint8Array(buffer);
console.log('\nUint8Array view:', uint8View);

// Fill the Uint8Array with values
for (let i = 0; i < uint8View.length; i++) {
    uint8View[i] = i * 2; // Fill with even numbers
}
console.log('Filled Uint8Array:', uint8View);

// Create an Int16Array view on the same ArrayBuffer
const int16View = new Int16Array(buffer);
console.log('\nInt16Array view:', int16View);

// Display the Int16Array values, which reflect changes in the ArrayBuffer
console.log('Int16Array after modification of Uint8Array:', int16View);

// Create a Float32Array view on the same ArrayBuffer
const float32View = new Float32Array(buffer);
console.log('\nFloat32Array view:', float32View);

// Show the Float32Array values, which reflect the changes in the ArrayBuffer
console.log('Float32Array after modification of Uint8Array:', float32View);

// 3. Typed Array Methods

// Create a new Uint8Array view
const uint8Array = new Uint8Array([10, 20, 30, 40, 50]);

// Copy values to a new Uint8Array
const newArray = new Uint8Array(5);
newArray.set(uint8Array);
console.log('\nNew Uint8Array after copying values:', newArray);

// Slice a portion of the Uint8Array
const slicedArray = uint8Array.slice(1, 4);
console.log('Sliced Uint8Array (1 to 4):', slicedArray);

// 4. Example: Binary Data from Network Requests (Simulated)

// Simulating binary data (as if fetched from a network request)
const simulatedBuffer = new ArrayBuffer(8);
const simulatedView = new Uint8Array(simulatedBuffer);
simulatedView[0] = 1;
simulatedView[1] = 2;
simulatedView[2] = 3;
simulatedView[3] = 4;

// Display simulated data
console.log('\nSimulated Uint8Array from network request:', simulatedView);

// 5. Example: WebAssembly Memory (Simulated)

// Simulating WebAssembly memory with an ArrayBuffer
const wasmMemory = new WebAssembly.Memory({ initial: 1 }); // 64KB
const wasmView = new Uint8Array(wasmMemory.buffer);

// Write some data to memory
wasmView[0] = 42;
console.log('\nValue written to WebAssembly memory:', wasmView[0]);

// Clean up for demonstration purposes
delete wasmMemory;
