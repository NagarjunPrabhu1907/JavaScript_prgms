function User(name){
    var displayName = function(greeting){
     console.log(greeting+' '+name);
    }
  return displayName;
  }
  var myFunc = User('Raju');
  myFunc('Welcome '); 
  myFunc('Hello '); 