/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here

  var users = [];

  users.push(new User("tyler", "tylermcginnis33@gmail.com", "iLoveJS"));
  users.push(new User("cahlan", "cahlan@devmounta.in", "iLoveHashtags"));
  users.push(new User("lenny", "lenny@theLenster.com", "iLoveLentilSoup"));

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
  console.log(users[0].name + " " + users[0].email+ " " + users[0].pw);


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log(users[1].name + " " + users[1].email+ " " + users[1].pw);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
  users.push(new User("cleber", "cleber.lop@gmail.com", "myPass"));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
 for (var i = 0; i < users.length; i++) {
   console.log(users[i].name);
 }
  //code here
