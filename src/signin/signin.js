const email = document.getElementById("email");
const password = document.getElementById("password");

document.querySelector("#form").addEventListener("submit", signIn);
function signIn(event) {
  event.preventDefault();

  fetch("http://localhost:7070/user", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const comparision = data.find((ele) => ele.email === email.value);
      console.log(comparision);

      if (comparision !== undefined) {
        if (
          comparision.email === email.value &&
          comparision.password === password.value
        ) {
          swal({
            title: "Sign in SuccessFull!!!",
            text: "Congrats",
            icon: "Success",
          });
          alert("Signin Successful !!");
          localStorage.setItem("token", JSON.stringify(Date.now()));
          window.location.href = "../../index.html";
        } else {
          swal({
            title: "Something went Wrong!!!",
            text: "You are not a valid user ?",
            icon: "error",
          });
        }
      } else {
        swal({
          title: "Something went Wrong!!!",
          text: "You are not a valid user ?",
          icon: "error",
        });
      }
    });
}
