import { phraseIsValid } from "./js/validators/phraseIsValid";
import "./css/styles.scss";

document.getElementById("slogan").addEventListener("keyup", (event) => {
  if (phraseIsValid("AELRSTY", event.target.value)) {
    document.getElementById("output").innerHTML = event.target.value;

    event.target.classList.add("is-danger");
    event.target.classList.remove("is-success");
  } else {
    document.getElementById("output").innerHTML = "";

    event.target.classList.remove("is-danger");
    event.target.classList.add("is-success");
  }
});
