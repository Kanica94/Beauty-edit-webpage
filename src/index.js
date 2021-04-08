function Subscribe() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");
  name = name.toLowerCase();

  if (email.includes("@" && ".")) {
    let greeting = document.querySelector(".section7");
    greeting.innerHTML = "<h3>Thank you<h3> " + name + " for subscribing!";
  } else {
    alert("Please enter valid email address!");
  }
}

let newsletterButton = document.querySelector(".signup");
newsletterButton.addEventListener("click", Subscribe);
