//Encapsulation

const userOne = {
  name: "Ryu",
  email: "ryu@ninjas.com",
  login() {
    console.log(this.email, "has logged in");
  },
  logout() {
    console.log(this.email, "has logged out");
  },
};

//updating values
userOne.name = "Yoshi";
userOne.name = "Ryu";
console.log(userOne);

let prop = "name";
console.log(userOne[prop]);

prop = "email";
console.log(userOne[prop]);

/* Spagattie code, unorgainised */
// let userOneEmail = "ryu@ninjas.com";
// let userOneName = "Ryu";
// let userOneFriends = ["Yoshi"];

// //create user two
// let userTwoEmail = "yoshi@mariocorp.com";
// let userTwoName = "Yoshi";
// let userTwoFriends = ["Ryu", "Mario"];

// //create user three
// let userThreeEmail = "mario@mariocorp.com";
// let userThreeName = "Mario";
// let userThreeFriends = ["Yoshi"];

// function login(email) {
//   console.log(email, "is now online");
// }

// function logout(email) {
//   console.log(email, "has logged out");
// }

// function logFriends(friends) {
//   friends.forEach((friend) => {
//     console.log(friend);
//   });
// }

// login(userOneEmail);
