console.log(`
${(() => {
  const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
  names.forEach(name => {
    console.log(name);
  });
})()}

${(() => {
  const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
  });
})()}

3. Using map to convert province names to uppercase:
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const uppercaseProvinces = provinces.map(province => province.toUpperCase());
  return uppercaseProvinces;
})()}

4. Creating a new array with the amount of characters in each name:
${(() => {
  const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
  const nameLengths = names.map(name => name.length);
  return nameLengths;
})()}

5. Sorting all provinces alphabetically using sort:
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const sortedProvinces = provinces.sort();
  return sortedProvinces;
})()}

6. Using filter to remove provinces with the word 'Cape' and returning the remaining count:
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
  return filteredProvinces.length;
})()}
7. Creating a boolean array indicating whether a name contains an 'S' character:
${(() => {
    const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
    const hasSCharacter = names.map(name => name.toLowerCase().includes('s'));
    return hasSCharacter;
  })()}

8. Using reduce to create an object indicating the province of each individual:
${(() => {
  const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const provinceObject = names.reduce((obj, name, index) => {
    obj[name] = provinces[index];
    return obj;
  }, {});
  return provinceObject;
})()}

Additional exercises:

9. Checking if all provinces start with the letter 'G':
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const allStartWithG = provinces.every(province => province.startsWith('G'));
  return allStartWithG;
})()}

10. Checking if any province contains the word 'State':
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const containsState = provinces.some(province => province.includes('State'));
  return containsState;
})()}

11. Joining all names into a single string separated by commas:
${(() => {
  const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
  const joinedNames = names.join(', ');
  return joinedNames;
})()}

12. Reversing the order of provinces:
${(() => {
  const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const reversedProvinces = provinces.reverse();
  return reversedProvinces;
})()}
`);
