

function checkLuhn(value) {
    // remove all non digit characters
    var value = value.replace(/\D/g, '');


    var sum = 0;
    
    //var shouldDouble = false;
    var shouldDouble = true;

    // loop through values starting at the rightmost side
    //for (var i = value.length - 1; i >= 0; i--) {
    for (var i = 0; i <= value.length - 1;  i++) {
            //var digit = parseInt(value.charAt(i));
            var digit = parseInt(value[i]);
     
      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    console.log(sum)
    console.log(sum%10)
    return (sum % 10) == 0;
  }

  checkLuhn('6062-8230-4421-0257')

  let text = "Give100%!"; 
let pattern = /\D/g;
console.log(text.match(pattern))
console.log(text.replace(pattern,""))



