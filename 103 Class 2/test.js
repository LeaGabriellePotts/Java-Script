console.log("Hello World!");

// let age = prompt("Enter your age: ");
// let name=prompt("Enter your name: ");

// console.log(name);

//we need a prompt that's catching a value in a variale last name
//console.log last name

// let lastName = prompt("Enter your last name: ");

// console.log(lastName);

// document.write("This is JS inserted to HTML" + LastName)

function getAge(){
    let name= 'miles'
    let age = prompt("Enter your age");
    console.log(age);
    alert("I Need Variables to process your age.  Your age is: " + age)
};
// getAge();

function getName(){
    let firstName = prompt("Please enter your first name");
    alert(firstName + " is my firstName");
    console.log(firstName);
}

function getInfo(){
    getAge();
    getName();
}

//Define a function called multiplyTHree which acepts a number and returns that number multiplied by 3.

function multiplyThree(x){
    let result=x*3;
    console.log(result);
    return result;
}

multiplyThree(5);//15
multiplyThree(3)//9


