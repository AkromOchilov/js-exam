var arr = ['I', 'study', 'JavaScript', 'right', 'now'];
arr.splice(2, 1);
console.log(arr);
// --------------------------------
// --------------------------------
// --------------------------------
let str = 'salom dunyo';
function reversedString(data) {
	let str = data.split('').reverse();
	var newString = '';
	for (let i = 0; i < str.length; i++) {
		newString += str[i];
	}
	return newString;
}
console.log(reversedString(str));
// ------------------------------
// ------------------------------
// ------------------------------
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
console.log(isEven(23));
