class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }
  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "now has a score", this.score);
    return this;
  }
}

const userOne = new User("ryu@ninja.com", "Ryu");
const userTwo = new User("yoshi@mariocorp.com", "Yoshi");

console.log(userTwo.login().updateScore().updateScore().logout());

/*
yoshi@mariocorp.com just logged in
yoshi@mariocorp.com now has a score 1
yoshi@mariocorp.com now has a score 2
yoshi@mariocorp.com just logged out
User { email: 'yoshi@mariocorp.com', name: 'Yoshi', score: 2 } 
*/
