export default function hasValuesFromArray(set, arr) {
  for (let value of arr) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
