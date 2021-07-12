const firstObj = {
  name: "Akshay Rana",
  age: 25,
  height: "5 feet 11 inches"
};

const testObj = {
  ...firstObj,
  gender: "male",
  idiot: true,
};


console.log(firstObj);
console.log(testObj);