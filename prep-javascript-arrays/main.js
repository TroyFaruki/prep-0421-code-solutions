var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
// console log languagearray variables
console.log(languagesArray);

console.log('Array Length: ', languagesArray.length);
// get array length for languagesArray
languagesArray.push('C#');
languagesArray.push('php');
// Push two new elements to the array
console.log('Updated Array: ', languagesArray);
// show the updated arrray
languagesArray.pop();

console.log('Removed Last Element: ', languagesArray);

languagesArray.unshift('C++');
// Shifted C++ string to front
console.log('Element to front', languagesArray);

languagesArray.shift();

console.log('Removed first element: ', languagesArray);

var thirdElement = languagesArray[2];

console.log('Third element added: ', thirdElement);

var arrayLength = languagesArray.length;

console.log('The final length of the array is: ', arrayLength);

var lastElement = languagesArray[5];

console.log('The last element in the array is: ', lastElement);
