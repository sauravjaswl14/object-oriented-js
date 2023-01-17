function User(email, name) {
  this.email = email;
  this.name = name;
  this.status = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

const userOne = new User("ryu@ninjas.com", "Ryu");
const userTwo = new User("Yoshi@mariocorp.com", "Yoshi");

console.log(userOne);
console.log(userTwo.email);
