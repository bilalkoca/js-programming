function square(x=0){
    return x*x;
}
function cube(x=0){
    return x*x*x;
}
function calculate(num1=0, num2=0, operator="+"){   
    if(operator==="-"){
        return num1-num2;
    }else if(operator==="+"){
        return num1+num2;
    } else if(operator==="*"){  
        return num1*num2;
    } else if(operator==="/"){  
        return num1/num2;
    } else {
        console.log("Invalid operator");
        return 0;
}}
module.exports={square, cube, calculate}