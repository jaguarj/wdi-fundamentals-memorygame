var fizzbuzz = function(num) {
	for ( var i = 1; i <= num; i += 1 ) {
		if (i%3 === 0 && i%5 === 0) {
			result = "fizzbuzz";
		} else if (i%3 === 0) {
			result = "fizz";
		} else if (i%5 === 0) {
			result = "buzz";
		} else {
			result = i
		}
		console.log(result);
	}
};

fizzbuzz(15);

console.log('Hello');

alert('hello');

