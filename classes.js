//A constructor function is a function that actually
//constructs/creates the object

class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}
//creating two seperate versions of same type of object
const userOne = new User("ryu@ninjas.com", "Ryu");
const userTwo = new User("yoshi@mariocorps.com", "Yoshi");

console.log(userOne); // User { email: 'ryu@ninjas.com', name: 'Ryu' }
console.log(userTwo); // User { email: 'yoshi@mariocorps.com', name: 'Yoshi' }

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
