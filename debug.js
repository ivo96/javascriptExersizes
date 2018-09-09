const flatened  = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array);
}, []);


// it's used for flattening the array


const flatened  = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger;	// used instead of console.log
		return accumulator.concat(array);
}, []);
			