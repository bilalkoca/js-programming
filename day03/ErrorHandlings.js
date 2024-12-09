console.log("Test Started");
let number=0;
try {
    console.log(number);
} catch (e) {
    console.log("An error occured while printing the number");
    }finally {
        console.log("This code will always execute");
    }
    console.log("Test completed");

    console.log("-------------------------------------------------------------");

    let browser = "internet explorer";

    if(browser ==='chrome'||browser ==='firefox'||browser ==='safari') {
        console.log("This browser is supported");
        } else {
            console.log(`Unsupported browser type: ${browser}`);
            throw new Error();
        }
        console.log(`Execute the tests cases on:${browser} browser`);