// Hide Navigation on Scroll
const nav = document.querySelector("nav");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove("hidden");
  } else {
    nav.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
});

// Form Validation

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your phone number.");
    return false;
  }

  if (message == "") {
    alert("Please enter your address.");
    return false;
  }

  return true;
}

document.getElementById("submit").onclick = function () {
  if (validateForm()) {
    alert("Thank You For Submit");
  }
};
