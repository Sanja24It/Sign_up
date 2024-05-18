const btn_submit = document.querySelector("#btn");
const form_submit = document.querySelector(".form");

const mess_err = document.querySelectorAll(".mess");
const in_first_name = document.querySelector("#first_name");
const in_last_name = document.querySelector("#last_name");
const in_email = document.querySelector("#email");
const in_pass = document.querySelector("#password");

let err_messages = [
  "First name cannot be empty",
  "Last name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
];

for (let me = 0; me < mess_err.length; me++)
  form_submit.addEventListener("submit", function (e) {
    e.preventDefault();

    if (in_first_name.value === "") {
      in_first_name.classList.add("icon");
      in_first_name.placeholder = "";
      in_first_name.style.borderColor = "#ff7a7a";

      mess_err[0].classList.add("mess_err");
      mess_err[0].innerHTML = err_messages[0];
    } else {
      in_first_name.classList.remove("icon");
      in_first_name.style.borderColor = "#b9b6d3";
      mess_err[0].classList.remove("mess_err");
      mess_err[0].innerHTML = "";
    }
    if (in_last_name.value === "") {
      in_last_name.classList.add("icon");
      in_last_name.placeholder = "";
      in_last_name.style.borderColor = "#ff7a7a";

      mess_err[1].classList.add("mess_err");
      mess_err[1].innerHTML = err_messages[1];
    } else {
      in_last_name.classList.remove("icon");
      in_last_name.style.borderColor = "#b9b6d3";
      mess_err[1].classList.remove("mess_err");
      mess_err[1].innerHTML = "";
    }
    if (in_email.value === "") {
      in_email.classList.add("icon");
      in_email.classList.add("place");
      in_email.placeholder = "email@example.com";
      in_email.style.borderColor = "#ff7a7a";

      mess_err[2].classList.add("mess_err");
      mess_err[2].innerHTML = err_messages[2];
    } else {
      in_email.classList.remove("icon");
      in_email.classList.remove("place");
      in_email.style.borderColor = "#b9b6d3";
      mess_err[2].classList.remove("mess_err");
      mess_err[2].innerHTML = "";
    }
    if (in_pass.value === "") {
      in_pass.classList.add("icon");

      in_pass.placeholder = "";
      in_pass.style.borderColor = "#ff7a7a";

      mess_err[3].classList.add("mess_err");
      mess_err[3].innerHTML = err_messages[3];
    } else {
      in_pass.classList.remove("icon");

      in_pass.style.borderColor = "#b9b6d3";
      mess_err[3].classList.remove("mess_err");
      mess_err[3].innerHTML = "";
    }
  });
