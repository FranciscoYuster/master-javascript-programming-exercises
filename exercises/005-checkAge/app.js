function checkAge(name, age) {
  // your code here
  if( age >= 21){
    return `Welcome, ${name}!`
  } else if (age <= 21){
    return `Go home, ${name}!`

  }
  } 

  let output = checkAge('Adrian', 21);
console.log(output); // --> 'Welcome, Adrian!'