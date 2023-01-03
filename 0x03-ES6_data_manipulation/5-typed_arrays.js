export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  for (let i = 0; i < int8view.length; i += 1) {
    if (int8view[position] != null) {
      int8view[position] = value;
    } else {
      throw new Error('Position outside range');
    }
  }
  return new DataView(buffer);
}
