const token = JSON.parse(localStorage.getItem("token"));

if (token) {
  const uname = document.getElementById("name");
  const adhaar = document.getElementById("adhaar");
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const noOfRooms = document.getElementById("roomNo");
  const noOfAdults = document.getElementById("adult");
  const noOfChilds = document.getElementById("child");
  const roomType = document.getElementById("mode");
  const promoCode = document.getElementById("code");
  const email = document.getElementById("email");
  const phone = document.getElementById("mob");

  const bookedStatus = "Pending";

  let cDate = new Date().toJSON().slice(0, 10);

  document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      checkin.value <= checkout.value &&
      cDate <= checkin.value &&
      cDate <= checkout.value
    ) {
      console.log(checkin <= checkout);
      const dataobj = {
        uname: uname.value,
        adhaar: adhaar.value,
        checkin: checkin.value,
        checkout: checkout.value,
        noOfRooms: noOfRooms.value,
        noOfAdults: noOfAdults.value,
        noOfChilds: noOfChilds.value,
        roomType: roomType.value,
        promoCode: promoCode.value,
        email: email.value,
        phone: phone.value,
        bookingStatus: bookedStatus,
        id: JSON.stringify(Date.now()),
      };
      console.log(dataobj);
      fetch("http://localhost:7070/bookedUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataobj),
      })
        .then((res) => {
          if (res.ok) {
            localStorage.setItem("obj", JSON.stringify(dataobj));
            setTimeout(() => {
              // window.location.href = "../../index.html";
            }, 4000);
            swal({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success",
            });

            window.location.replace("../../index.html");
          }
        })
        .then((data) => {});
    } else {
      swal({
        title: "Something Went Wrong!",
        text: "Check Check in and Check Out Date!",
        icon: "error",
      });
    }
  });
} else {
  alert("Login Required!!");
  window.location.href = "../signin/signin.html";
}

function validateDates() {
  var checkinDate = new Date(document.getElementById("checkin").value);
  var checkoutDate = new Date(document.getElementById("checkout").value);

  // Add one day to the check-in date
  var minCheckoutDate = new Date(checkinDate);
  minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);

  if (checkoutDate <= minCheckoutDate) {
    swal({
      title: "Something Went Wrong!",
      text: "Check-out date must be at least one day after the check-in date.",
      icon: "error",
    });
  } else {
    swal({
      title: "Something Went Wrong!",
      text: "Dates are valid!",
      icon: "error",
    });
    // Proceed with further actions or form submission
  }
}

function onlynum() {
  var fm = document.getElementById("text");
  var ip = document.getElementById("adhaar");
  var tag = document.getElementById("value");
  var res = ip.value;

  if (res != "") {
    if (isNaN(res)) {
      // Set input value empty
      ip.value = "";

      // Reset the form
      fm.reset();
      return false;
    } else {
      return true;
    }
  }
}

function onlynum() {
  var fm = document.getElementById("text");
  var ip = document.getElementById("mob");
  var tag = document.getElementById("value");
  var res = ip.value;

  if (res != "") {
    if (isNaN(res)) {
      // Set input value empty
      ip.value = "";

      // Reset the form
      fm.reset();
      return false;
    } else {
      return true;
    }
  }
}
