function salutation() {
	let name = 'Aayush';

	function greet() {
		console.log(`Hello ${name}!`);
	}
	return greet;
}

let wish = salutation();
wish();
