function salutation() {
	let name = 'Akash';

	function greet() {
		console.log(`Hello ${name}!`);
	}
	return greet;
}

let wish = salutation();
wish();
