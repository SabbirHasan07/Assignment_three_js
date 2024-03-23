
function counter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  function makePassword(password) {
    return function(guess) {
      return guess === password;
    };
  }
  function counterWithStep(step = 1) {
    let count = 0;
    return function() {
      count += step;
      return count;
    };
  }
  const increment = counter();
  console.log(increment()); 
  console.log(increment());
  const checkPassword = makePassword("mySecretPassword");
  console.log(checkPassword("password123"));
  console.log(checkPassword("mySecretPassword"));
  const incrementByTwo = counterWithStep(2);
  console.log(incrementByTwo());
  console.log(incrementByTwo());
  