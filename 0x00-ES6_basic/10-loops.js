export default function appendToEachArrayValue(array, appendString) {
  // empty string
  const resv = [];
  for (const value of array) {
    resv.push(appendString + array[array.indexOf(value)]);
  }

  return resv;
}
