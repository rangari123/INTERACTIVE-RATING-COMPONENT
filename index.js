//for buttons
let btn_submit = document.getElementById("submit");//calss  =submit the btn

let ratings = document.getElementById("rate");//span class.

let onecontainer = document.querySelectorAll(".one");//class=one


let container = document.getElementById("main-con");//class=container

let thankscontainer = document.querySelector(".thankyou");


// ------------ declaring the variable
let rated = 0;


//------ getting the selected rate from the rating clasa

//num  = element.
onecontainer.forEach((num) => {
    num.addEventListener("click", numbersadd)
})

//-- displaying the thank-you container with the submit button on click event
btn_submit.onclick = thankyoucard_show;


//------updating the active rating selected(1,2,3,4,5)

function numbersadd() {
    //number_one = element.
    onecontainer.forEach((number_one) =>
        number_one.classList.remove("active"))

    this.classList.add("active");
    rated = this.id;
}

function thankyoucard_show() {
    // -- hidding the rating containner and displaying the thank you container
    container.style.display = "none"
    thankscontainer.style.display = "flex";


    ratings.innerText = rated;

}

