import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

console.log(checkForName);

alert("I EXIST");
console.log("CHANGE!!");

// Add event listener to the form
document.getElementById("myForm").addEventListener("submit", handleSubmit);

export { checkForName, handleSubmit };
