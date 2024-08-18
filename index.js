//& https://www.chaijs.com/api/bdd/#method_ownpropertydescriptor
//*problem 1
//* input: "hamada" ===> output: HAMADA. expect
//* input: 12 ===> output: "".   expect

export function capitalizeText(input) {
  if (arguments.length > 1) {
    throw new Error('Function accepts only one parameter');
  }

  if (typeof input !== 'string') {
    throw '';
  }

  return input.toUpperCase();
}

//? test that the function takes a string  it will return a string
//? test that the function takes a string and return it after capitalize it
//? test if the function takes number it will throw type error says parameter should be string
//? make sure that this function accept one param only
//& ////////////////////////////////////////////////////////

//* problem 2
//* input number 3 ==> output should be [0,1,2]

export const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

//? test that the return value of type array
//? test if we pass 3 it will return array of length 3 and test it's include 1
//? try to use different styles (expect , should , assert)

//^ createArray(3)>>>>>[0,1,2]
//^ createArray(5)>>>[0,1,2,3,4]
//& ////////////////////////////////////////////////////////

//* problem 3
export let obj = { id: 1 };
export let obj1 = { x: obj };
export let obj2 = { x: obj };
//? check whether obj1 is equal to obj2 using expect , should and assert

//& ////////////////////////////////////////////////////////

//* problem 4
export function CheckPositivity(x) {
  if (x > 0) {
    return true;
  } else {
    return false;
  }
}

//? check the expected value using expect , should and assert if x = 4 , x = -1 and x=0
//& ////////////////////////////////////////////////////////
//* problem 5
export function Mult(x) {
  if (x <= 0) {
    throw new Error('x should be above zero');
  }
  return x * 2;
}
//? using assert
//? 1- make sure that x > 0
//? 2- make sure that the returned number will be above zero

//& ////////////////////////////////////////////////////////////

//* problem 6
export let obj3 = { a: { b: [{ x: 1 }] } };
//? using assert check 'a.b[0]' will include {x: 1}
