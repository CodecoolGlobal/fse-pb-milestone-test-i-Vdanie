/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/

function averageAgeOfAdults(users) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      sum += users[i].age;
      count++;
    }
  }
  if (count === 0) {
    return NaN;
   } else {
    return sum / count;
   }
}

module.exports = averageAgeOfAdults;
