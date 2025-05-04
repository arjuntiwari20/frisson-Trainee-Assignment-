// custom Array map method withou using built in 

function customMap(array, callback) {
   const result = [];
   for (let i = 0; i < array.length; i++) {
     result.push(callback(array[i], i, array));
   }
   return result;
 }
  let number = [1, 2, 3, 4];
  let doubled = customMap(number, (num) => num * 2);
  console.log(doubled)



 // Array map method 

 let result = [10,20,30,40];


 finalresult = result.map((number) => {
   return number*number;

});
console.log(finalresult);

//end



// push and pop method withou built in  

function customPush(array, ...elements) {
   for (let i = 0; i < elements.length; i++) {
     array[array.length] = elements[i];
   }
   return array.length;
 }

 let arr = [1, 2, 3];
console.log(customPush(arr, 4, 5)); // Output: 5
console.log(arr); // Output: [1, 2, 3, 4, 5]

      // Array pop without built in 
function customPop(array) {
   if (array.length === 0) return undefined;
   const lastElement = array[array.length - 1];
   array.length = array.length - 1; // Shrink the array
   return lastElement;
 }

 let array = [1, 2, 3];
console.log(customPop(arr)); // Output: 3
console.log(arr); // Output: [1, 2]
console.log(customPop([])); // Output: undefined



// push and pop with built in 
let Array = [1, 2, 3, 4, 5];

 Array.push(6);
console.log(Array);

Array.pop();
console.log(Array);


//end


//  Array splice method 
let Array2 = [1,2,3,4,5,6,7,8,9];

 Array2.splice(2, 2, 101);

console.log(Array2);




     // unshift and concat method 

    let fresher = ["Arjun", "Akash", "Amit", "Ajay", "Aman"];

    fresher.unshift("aman");
    console.log(fresher);

    let experienced_employee = ["ayush", "suman", "prachi", "sarthak"];


    let all_employee = fresher.concat(experienced_employee);
    console.log(all_employee);
    


     // filter method without using built in 
    function customFilter(array, callback) {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
          result.push(array[i]);
        }
      }
      return result;
    }

    //  Filter even numbers
      let numbers = [1, 2, 3, 4, 5, 6];
      let  evens = customFilter(numbers, (num) => num % 2 === 0);
      console.log(evens);


     




      // toUpperCase using ASCII  string

      function myToUpperCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          let charCode = str.charCodeAt(i); 
          if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
          } else {
            result += str[i]; // Keep non-lowercase characters as is
          }
        }
        return result;
      }

      console.log(myToUpperCase('hello arjun tiwari '));



        // custom tolowercase in String 

      function myToLowerCase(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
          let charCode = str.charCodeAt(i); // Get ASCII code of character
          // If it's an uppercase letter (A-Z), convert to lowercase
          if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32); // Add 32 to get lowercase
          } else {
            result += str[i]; // Keep non-uppercase characters as is
          }
        }
        return result;
      }


      console.log(myToLowerCase('HELLO FRISSON DEV HUB'));
