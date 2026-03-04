function bmiCalc(w,h){
    bmi=w/(h*h);
    return bmi;
}

let weight = prompt('enter your weight in kg');
let height = prompt('enter your height in meters');

weight = Number(weight);
height = Number(height);

let result = bmiCalc(weight, height);

console.log('your BMI is : ' + result);

if (result < 18.5) {
    console.log('you are underweight.');
}
else if (result >= 18.5 && result < 25){
    console.log('your weight is normal.');
}
else {
    console.log('you are over overweight.')
}