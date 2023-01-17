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

//class Admin extends from User
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email !== user.email;
    });
  }
}

const userOne = new User("ryu@ninja.com", "Ryu");
const userTwo = new User("yoshi@mariocorp.com", "Yoshi");
const admin = new Admin("shaun@ninjas.com", "Shaun");
let users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);
console.log(users);
