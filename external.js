var Name = prompt("Enter your Name");
var weight = prompt("Enter your Weight");
var height = prompt("Enter your Height");

const a=height;
const b=weight;
const c=b/a*a;

if(c < 18.5)
  {
  alert( "hello, "+ Name + "Your BMI index shows that, You are Underweight. ")
}
else if ( c <= 18.5 && c > 25) 
  {
  alert( "hello, "+ Name + "Your BMI index shows that, You are in Normal Weight class. ")
} else
 {
  alert( "hello, "+ Name + "Your BMI index shows that, you are obese. ")
  
}




