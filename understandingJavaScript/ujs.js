

const one = () => {
	const two = () =>{
		console.log('4');
	}
	two();
}


//console.log(4);	1
//two()				2
//one()				3
//call stack


// single threaded - only 1 call stack
// asynchronised behaviour - we can ude setTimeOut()
// in which the first parameter is the function and the
// second is the time we wait

// setTimeout is part of the web api 	

console.log('1')
setTimeOut(() => {
	console.log('2');
},2000);
console.log('3');



// call stack

// web api

// callback queue

// event loop

