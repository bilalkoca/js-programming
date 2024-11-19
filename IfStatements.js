let score=50;

if(score>=60){
    console.log("You passed the exam !");
}else {
    console.log("You failed the exam !");
}

//multi branch if
let num=0;

if(num>0){
console.log("positive");
}else if(num<0){
console.log("negative");
} else{
    console.log("zero");
}

//nested if
score=500; // reassigned score

if(score>=0&&score<=100){

    if(score>=60){
    console.log("You passed the exam !");
    }else {
        console.log("You failed the exam !");
    }
    }else{
    console.log("Invalid score!");
}