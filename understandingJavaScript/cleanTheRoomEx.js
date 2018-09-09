// Clean the room function chalenge
// Array - [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortArray = array => array.sort((a, b) => a - b); // sorting array function

makeIntoIndividualArrays = array => {
	const sortedArr = sortArray(array);
	const dividedArr = [];			// empty array to insert sorted

	let left = 0;
	let right = 1;

	const equalArray = sortedArr.reduce((total, amount) => {
		if (sortedArr[left] === sortedArr[right]) {
			total.push(amount);
			left++;
			right++;
		}
		return total;
	}, [] /* starting with empty [] for total*/ );
	console.log(equalArray);

}

	

console.log(sortArray(array));
console.log(makeIntoIndividualArrays(array));
