const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("adminLogin");

button.addEventListener("click", () => {
  if (email.value === "" || pass.value === "") {
     alert("Fill the Inputs !")
    return;
  }
  fetch("http://localhost:7070/admin", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele) => ele.email === email.value);
      if(comparision === undefined)
      {
        alert("Wrong Email or Password")
        return
      }
      if (
        comparision.email === email.value &&
        comparision.password === pass.value
      ) {
        alert("Logged in Successfully!");
        window.location.href = "../admin/admin.html";
      } else {
         alert("Wrong Email or Password !!")
           }
    });
});