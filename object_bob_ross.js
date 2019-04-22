var Person = function(firstAndLast) {  
  var fullName = firstAndLast
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.setFirstName = function(first){
    fullName = first + " " + fullName.split(" ")[1]
  };
  this.setLastName = function(last){
    fullName = fullName.split(" ")[0] + " "+ last
  }
  this.setFullName = function(firstAndLast){
       fullName = firstAndLast
  };
};


var bob = new Person('Bob Ross');
console.log("bob: "+bob)
console.log("getfullname(): "+bob.getFullName());
console.log(Object.keys(bob).length)
console.log(bob instanceof Person)
console.log(bob.firstName)
console.log(bob.lastName)
console.log(bob.getFirstName())
bob.setFirstName("Hooper")
console.log(bob.firstName)
console.log(bob.getFirstName())
console.log(bob.getFullName())
console.log("full: " + bob.fullName)
