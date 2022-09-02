
// document.addEventListener("DOMContentLoaded", function() {
//     your_function(...);
//   });

document.addEventListener("DOMContentLoaded", function() {

    // console.log("test")
    const name = ["shubham","Prajapati","Mom"];
    document.getElementById("demo").innerHTML = name;

    const cars = ["toyta","tata","volvo","mahindra"];
    // change an element
    cars[length]="indica";
    // add an element
    cars.push("Audi")

    document.getElementById("demo1").innerHTML=cars
    document.getElementById("demo2").innerHTML=cars[0]

    // Redeclaring an array with const, in another scope, or in another block, is allowed:

//     const cars = ["Volvo", "BMW"];   // Allowed
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//   const cars = ["Volvo", "BMW"]; // Allowed
// }

    const arr1 = ["Cecilie", "Lone"]
    const arr2 = ["Emil", "Tobias", "Linus"]
    const arr3 = ["Robin"]

    const children = arr1.concat(arr2)
    const children2 = arr1.concat(arr1,arr2,arr3)

    document.getElementById("JavaScriptArrayconcat").innerHTML=children
    document.getElementById("JavaScriptArrayconcat2").innerHTML=children2

    {
        const Name = ["ayush","prajapati"]
    const Num = [23,434,23]

    const output = name.concat(Num)

    document.getElementById("concatinateStringNumber").innerHTML=output


    }

    // After identical the upper code
    // Just id will be differ other wise it overwrites the before result

    {
        const Name = ["ayush","prajapati"]
    const Num = [23,434,23]

    const output = name.concat(Num)

    document.getElementById("concatinateStringNumber1").innerHTML=output


    }

})

