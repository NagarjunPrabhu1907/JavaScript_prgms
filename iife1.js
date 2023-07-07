
	function myFunc()
	{
		console.log("Hi Welcome to");
		// This will be executed after executing the previous log.
		(function() { console.log("GeeksForGeeks!"); })();
		console.log("Hi There!");
	}
	
	// Calling the Function.
	myFunc();

