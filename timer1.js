// process.stdout.write('\x07');

const args = process.argv;
const timer = args.slice(2); 

//As you can see, process.argv is an ARRAY containing all the command line arguments used to execute our code,including the interpreter node and the file we executed. However we want to use the right arguments to sum.js, so the third and fourth items in process.argv.So adjust the code to read only important arguments.

//Hint: The array slice method can be used on an array to remove some of initial elements that we do not need.The slice function arguments indicated which index you'd start the array and which you would end). Change the code so that the first two elements from the array (which we do not need) are not printed out.*/

//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

/*pseudocode
• command line input is an array eg. node timer1.js 10 3 5 15 9 //timer = [10, 3, 5, 15, 9]
• 
*/

// timer.sort(function(a, b){   //no need because all the setTimeouts will pretty much start at the same time but print at their specified time.  
//   return a - b
// });
//console.log('timer after sorting:',timer)
const setTimeoutTimer = timer.map(x => x * 1000);
 
//would this only finish a loop once the setTimeoutTimer
for (let i = 0; i < timer.length; i++) {
  if (setTimeoutTimer > 0){      //handles edge cases, value must now be a number, positive number
  setTimeout(() => {
    process.stdout.write('.');
  }, setTimeoutTimer[i]);
  }
};

