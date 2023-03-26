function PersonalInfo(name) {
  this.name = name;
}

PersonalInfo.prototype.sayHi = function () {
  console.log(this.name, ": Hi");
};

const ammar = new PersonalInfo("Ammar");
const modric = new PersonalInfo("Modric");

console.log(ammar);
console.log(modric);
ammar.sayHi();
modric.sayHi();
// const ArrowFunc = () => {
//   this.name = "Ammar";
//   console.log("--- this", this);
// };

// console.log(new PersonalInfo());
