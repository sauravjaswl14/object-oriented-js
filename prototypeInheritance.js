function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

//using rest parameter
function Admin(...args) {
  User.apply(this, args);
  this.role = "Super Admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

const userOne = new User("ryu@ninjas.com", "Ryu");
const userTwo = new User("Yoshi@mariocorp.com", "Yoshi");
const admin = new Admin("shaun@ninjas.com", "Shaun");
let users = [userOne, userTwo, admin];
console.log(admin);
