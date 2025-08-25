// console.log("home js connected");
const pin = 1234;

const transactionData = [];
//function using to get input values--->>>

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  // console.log(inputFieldValueNumber);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

//function to get innerText--->

function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

//function to set innerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    // console.log(form);
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//function to toggle buttons
function handleBtnToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();
  // const selectBank = document.getElementById("bank").value;
  const selectBank = getInputValue("bank");

  const accountNumber = document.getElementById("account-number").value;

  // const amount = parseInt(document.getElementById("add-amount").value);

  //i can use 21th line incase of 18th line for that i already declare function in top & just use it were i need to use.--->
  const amount = getInputValueNumber("add-amount");

  // const pinNumber = parseInt(document.getElementById("pin-number").value);

  const pinNumber = getInputValueNumber("pin-number");

  // const availableBalance = parseInt(
  //   document.getElementById("available-balance").innerText
  // );
  const availableBalance = getInnerText("available-balance");

  if (accountNumber.length < 11) {
    alert("Please provide valid Account Number");
    return;
  }
  if (pinNumber !== pin) {
    alert("please provide correct pin number");
    return;
  }
  const totalAvailableBalance = amount + availableBalance;
  // document.getElementById("available-balance").innerText =
  //   totalAvailableBalance;
  setInnerText(totalAvailableBalance);

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

//add money-->>>
document.getElementById("money-add").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("add-form").style.display = "block";

  //toggling feature

  handleToggle("add-form");

  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("money-add").classList.remove("border-gray-300");

  // document
  //   .getElementById("money-add")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  handleBtnToggle("money-add");
});

//cash out--->>>
document.getElementById("cash").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("cash-out").style.display = "block";

  handleToggle("cash-out");

  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("cash").classList.remove("border-gray-300");

  // document
  //   .getElementById("cash")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  handleBtnToggle("cash");
});

//transfer money--->>>

document.getElementById("transfer-btn").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("transfer-cash").style.display = "block";

  handleToggle("transfer-cash");

  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("transfer-btn").classList.remove("border-gray-300");

  // document
  //   .getElementById("transfer-btn")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  handleBtnToggle("transfer-btn");
});

//bonus money--->>

document.getElementById("bonus-btn").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("bonus-parent").style.display = "block";

  handleToggle("bonus-parent");

  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("bonus-btn").classList.remove("border-gray-300");

  // document
  //   .getElementById("bonus-btn")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  handleBtnToggle("bonus-btn");
});

//bill pay--->>>
document.getElementById("bill-btn").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   // console.log(form);
  //   form.style.display = "none";
  // }
  // document.getElementById("bill-parent").style.display = "block";

  handleToggle("bill-parent");

  // const formBtns = document.getElementsByClassName("form-btn");
  // for (const btn of formBtns) {
  //   btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
  //   btn.classList.add("border-gray-300");
  // }
  // document.getElementById("bill-btn").classList.remove("border-gray-300");

  // document
  //   .getElementById("bill-btn")
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

  handleBtnToggle("bill-btn");
});

//Transaction money section---->>>

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    handleToggle("transaction-money");

    handleBtnToggle("transaction-btn");
  });
//Cash out section---->>>>

const pinNum = 2345;

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("done");
  // const agentNumber = document.getElementById("agent-number").value;
  const agentNumber = getInputValue("agent-number");

  // const amount = parseInt(document.getElementById("input-amount").value);
  const amount = getInputValueNumber("input-amount");
  const pinNumber = parseInt(document.getElementById("input-pin").value);
  // const availableBalance = parseInt(
  //   document.getElementById("available-balance").innerText
  // );
  const availableBalance = getInnerText("available-balance");

  // console.log(availableBalance);

  if (agentNumber.length < 11) {
    alert("Please provide correct Account Number");
    return;
  }
  if (pinNumber !== pinNum) {
    alert("bro pin bhule gesso tumi  ");
    return;
  }

  const totalAvailableBalance = availableBalance - amount;
  // document.getElementById("available-balance").innerText =
  //   totalAvailableBalance;
  setInnerText(totalAvailableBalance);

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleDateString(),
  };
  transactionData.push(data);
  // console.log(transactionData);
});

document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    // console.log(transactionData);
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between bg-white p-2 items-center rounded-xl mt-4">
          <div class="flex items-center gap-3">
            <div class="rounded-full bg-[#f4f5f7] p-3">
              <img src="./assets/wallet1.png" alt="" class="" />
            </div>

            <div>
              <h1>${data.name}</h1>
              <p class="text-gray-500">${data.date}</p>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      `;

      transactionContainer.appendChild(div);
    }
  });
