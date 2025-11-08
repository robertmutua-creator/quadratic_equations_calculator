// function to solve quadratic equation
function solveQuadratic(){
    // Get values from input fields and convert them to numbers
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // get the div where the result will be displayed
    const resultDiv=document.getElementById('result');

    // check if any input is missing or not a number
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        // if yes, notify the user
        resultDiv.innerHTML="Please enter all coefficients.";
        return;
    }

    // check if 'a' is a zero which would make it not a quadratic equation
    if (a===0) {
        // notify the user
        resultDiv.innerHTML="Coefficient 'a' cannot be 0 in a quadratic equation.";
        return; //this stops execution
    }

    // calculating the discriminant (b squared - four *a*c)
    const discriminant=b*b-4*a*c;

    // case 1: two distinct real solutions
    if (discriminant>0) {
        const x1=(-b+Math.sqrt(discriminant))/(2*a);
        const x2=(-b-Math.sqrt(discriminant))/(2*a);
        // display the result
        resultDiv.innerHTML="The two real solutions:"+ x1 + " and "+ x2;
    }

    // case 2: one real solution, when discriminant =0
    else if(discriminant===0){
        const x=-b/(2*a);
        resultDiv.innerHTML="One real solution: x = "+x+".";
    }

    // case 3: no solution, descriminant <0
    else{
        resultDiv.innerHTML="No real solution.";
    }

    // test cases
    // case 1: x^2-5x+6=0...3 and 2
    // case 2:x^2-4x+4=0 ... 2 only
    // case 3: x^2+2x+5=0 ... no solution
    
}