export default function cleanSet(set, startString) {
  const filteredValues = [];

  set.forEach(value => {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  });

  return filteredValues.join('-');
}
