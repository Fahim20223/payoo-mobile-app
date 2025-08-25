document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("login done");

  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    // console.log("Right Number");
    window.location.href = "./home.html";
  } else {
    alert("Ei bhaia chok khuli likhteso naki");
  }
});
