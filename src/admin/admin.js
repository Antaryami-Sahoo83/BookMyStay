const parent = document.getElementById("gpDiv");

const app = "Booking Confirmed";
const canc = "Booking Cancelled";

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:7070/bookedUsers", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((el) => {
        const pDiv = document.createElement("div");
        pDiv.id = "pDiv";
        const details = document.createElement("h1");
        const uname = document.createElement("h3");
        uname.style.color = "black";
        uname.style.fontWeight = "800";
        const adhaar = document.createElement("h4");
        const checkin = document.createElement("h4");
        const checkout = document.createElement("h4");
        const noOfRooms = document.createElement("h4");
        const noOfAdults = document.createElement("h4");
        const noOfChilds = document.createElement("h4");
        const roomType = document.createElement("h4");
        const email = document.createElement("h4");
        const phone = document.createElement("h4");
        const promoCode = document.createElement("h4");
        const bookingId = document.createElement("h4");
        const bookingStatus = document.createElement("span");

        const span = document.querySelector("span");
        span.innerText = el.bookingStatus;
        span.id = "status";

        uname.innerText = "Name: " + el.uname;
        adhaar.innerText = "Adhaar Number: " + el.adhaar;
        checkin.innerText = "Check In Date: " + el.checkin;
        checkout.innerText = "Check Out Date: " + el.checkout;
        noOfRooms.innerText = "Number of Room(s) Booked: " + el.noOfRooms;
        noOfAdults.innerText = "Adults: " + el.noOfAdults;
        noOfChilds.innerText = "Minors: " + el.noOfChilds;
        roomType.innerText = "Room Type: " + el.roomType;
        email.innerText = "Email: " + el.email;
        phone.innerText = "Contact No.: " + el.phone;
        promoCode.innerText = "Promo Code Applied: " + el.promoCode;
        bookingStatus.innerText = "Booking Status: " + el.bookingStatus;
        bookingId.innerText = "Booking Id : " + el.id;

        bookingStatus.style.color = "yellow";
        bookingStatus.style.fontSize = "20px";

        const removeUser = document.createElement("button");
        removeUser.id = "removeUser";
        removeUser.innerText = "Remove User";
        removeUser.addEventListener("click", () => {
          fetch(`http://localhost:7070/bookedUsers/${el.id}`, {
            method: "DELETE",
          }).then((res) => {
            alert("User Removed Successfully !");
          });
        });

        const approve = document.createElement("button");
        approve.id = "approve";
        approve.innerText = "Approve";
        approve.addEventListener("click", () => {
          fetch(`http://localhost:7070/bookedUsers/${el.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookingStatus: app }),
          }).then((res) => {
            alert("Booking Approved Successfully !");
          });
        });

        const cancel = document.createElement("button");
        cancel.id = "cancel";
        cancel.innerText = "Cancel";
        cancel.addEventListener("click", () => {
          bookingStatus.style.color = "red";
          fetch(`http://localhost:7070/bookedUsers/${el.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookingStatus: canc }),
          }).then((res) => {
            alert("Booking Cancelled Successfully !");
          });
        });

        if (el.bookingStatus === "Booking Confirmed") {
          bookingStatus.style.color = "green";
        } else if (el.bookingStatus === "Booking Cancelled") {
          bookingStatus.style.color = "red";
        } else {
          bookingStatus.style.color = "yellow";
        }

        pDiv.append(
          details,
          uname,
          adhaar,
          phone,
          email,
          noOfAdults,
          noOfChilds,
          noOfRooms,
          checkin,
          checkout,
          roomType,
          bookingStatus,
          bookingId,
          promoCode,
          removeUser,
          approve,
          cancel
        );
        parent.append(pDiv);
      });
    });
});
