import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async function(){
    console.log("load")

    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100 ) / 100;
});

document.querySelector("form").addEventListener("submit", async function(event){
    event.preventDefault();
   // console.log("submitted")

   const button = event.target.querySelector("#submit-btn");
const inputAmount = parseFloat(document.getElementById("input-amount").value);
const outputAmount =  parseFloat(document.getElementById("withdrawal-amount").value);

button.setAttribute("disables", true);


if (document.getElementById("input-amount") != 0){
    await dbank_backend.topUp(inputAmount);

}


const createAmount = await dbank_backend.checkBalance();
document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;

document.getElementById("input-amount").value = "";

button.removeAttribute("disabled");

});
