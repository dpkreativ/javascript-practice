/* switch (answer) {
  case "abuja":
    alert("Correct!");
    break;
    case "lagos":
      alert("Okay Grandpa.");
      break;
      case "calabar":
        alert("Ancestor you go collect kola?");
        break;
        default:
          alert("Eh for where? Mmm?");
}
*/

const answer = prompt("What is the capital of Nigeria").toLowerCase();

if (answer === "abuja") {
  alert("correct.");
} else if (answer === "lagos") {
  alert("ok grandpa.");
} else if (answer === "calabar") {
  alert("ancestor you go collect kola?.");
} else {
  alert("eh for where? mmm?");
}
