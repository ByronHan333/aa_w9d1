function sum(...args) {
  let s = 0;
  args.forEach(el => {
    s += el;
  })
  return s
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function(context, ...bindsargs) {
  let that = this;
  return function(...callargs) {
    return that.apply(context, bindsargs.concat(callargs));
  }
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// Function.prototype.curry = function (numArgs) {
//   let newArr = [];
//   let that = this;
//   return function _curry(el) {
//     newArr.push(el);
//     if (newArr.length < numArgs) {
//       return _curry;
//     } else {
//       return that(...newArr);
//     }
//   }
// }

Function.prototype.curry = function (numArgs) {
  let newArr = [];
  let that = this;
  return function _curry(el) {
    newArr.push(el);
    if (newArr.length < numArgs) {
      return _curry;
    } else {
      return that.apply(that, newArr);
    }
  }
}


// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// console.log(sumThree.curry(3)(4)(20)(6)); // == 30

Function.prototype.inherits = function(ParentClass) {
  // function Sur(){};
  // Sur.prototype = ParentClass.prototype;
  // this.prototype = new Sur();
  // this.prototype.constructor = this;
}

Function.prototype.inherits = function(ParentClass) {
  this.prototype = Object.create(ParentClass.prototype);
  this.prototype.constructor = this;
}



function MovingObject () {}

MovingObject.prototype.fly = function(){
  console.log('Moving Object');
}

function Ship () {}
Ship.inherits(MovingObject);
// Ship.prototype = Object.create(MovingObject.prototype);
// Ship.prototype.constructor = Ship;
let s = new Ship();
s.fly();


function Asteroid () {}
Asteroid.inherits(MovingObject);
// Asteroid.prototype = Object.create(MovingObject.prototype);
// Asteroid.prototype.constructor = Asteroid;
s = new Asteroid();
s.fly();