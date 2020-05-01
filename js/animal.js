// animal.js
var Animal = function () {
  this.name = "";
  this.legCount = 0;
  this.feed  = function (food) {
    console.log(this.name + " fed " + food);
  };
};