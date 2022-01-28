// console.log("Test if they are linked");

// //Selectors for

// // Method 1 :Getelements

let titleId = document.getElementById("title");
//return the first tag with id:title
console.log(titleId);

let titleClass = document.getElementsByClassName("title");

//return HTMLCollection where class:title
console.log(titleClass);

let buttonName = document.getElementsByName("btnplus");
//return NodeList where name:btnplus
console.log(buttonName);

//Method 2 : querySelector

let titleQuery = document.querySelector(".title");
console.log(titleQuery);
let title = document.querySelectorAll(".title");
console.log(title);
titleId.addEventListener("click", function () {
    if (titleId.innerHTML == "Hello") {
        titleId.innerHTML = "Hi !";
        titleId.style.color = "red";
    } else {
        titleId.innerHTML = "Hello";
        titleId.style.color = "black";
    }
});

// // let button = document.getElementById("button");
// // let qte = document.getElementById("qte");
// // //return HtmlCollection where tagName:button
// // console.log(button);
// // button.addEventListener("click", function () {
// //     qte.innerHTML++;
// // });

// let btn = document.getElementsByTagName("button");
// let qte = document.getElementsByClassName("qte");
// // let qtes = document.getElementsByClassName("qte");
// // let btn = document.querySelectorAll(".plus");

// //return HtmlCollection where tagName:button

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//         qte[i].innerHTML++;
//     });
// }
// // let qtes = document.getElementsByClassName("qte");
// // let btnsPlus = document.querySelectorAll(".plus");

// // for (let i = 0; i < btnsPlus.length; i++) {
// //     btnsPlus[i].addEventListener("click", function () {
// //         qtes[i].innerHTML++;
// //     });
// // }

//Increment
//select plus-btn

let plusbtns = document.querySelectorAll(".plus-btn");
let qtes = document.getElementsByClassName("Quant");
// let plusbtns = [btn1,btn2,btn3]
console.log(plusbtns);

//parcours tableau
//btn[0] => btn1
//btn[1] => btn2
//btn[2] => btn3

for (let i = 0; i < plusbtns.length; i++) {
    plusbtns[i].addEventListener("click", function () {
        qtes[i].value++;
    });
    totalPrice();
}

//Decrement

let minusbtns = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minusbtns.length; i++) {
    minusbtns[i].addEventListener("click", function () {
        if (qtes[i].value > 1) {
            qtes[i].value--;
        }
        totalPrice();
    });
}

let likes = document.getElementsByClassName("fa");
// ena parcourit el tableau mta likes bch najem namel acces el kol element (maneha kaleb wehed)
for (let i = 0; i < likes.length; i++) {
    // houni nasmaa f l'event eli bch yamlou ell utilisateur (maneha nzel al kaleeeb )
    //ki yeenzel al kaleeeb bch tsir hajaa (function)
    likes[i].addEventListener("click", function () {
        //houni bch nbadlou el loun selon condition
        //kenou akheel iwaali ahmer
        if (likes[i].style.color == "black") {
            likes[i].style.color = "red";
        } // o ken howwaa ahmer o l'utilisateur zed nzel rodouu akhel
        else {
            likes[i].style.color = "black";
        }
    });
}

let deletebtn = document.querySelectorAll(".delete");
for (let i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function () {
        deletebtn[i].parentNode.remove();
        totalPrice();
    });
}

function totalPrice() {
    let sum = 0;
    let quant = document.querySelectorAll(".Quant");
    let prices = document.querySelectorAll(".price");
    for (let i = 0; i < prices.length; i++) {
        sum = +prices[i].innerHTML * quant[i].value;
        console.log(sum);
    }
    let pricetotal = document.getElementById("finalPrice");
    pricetotal.innerHTML = sum;
}
