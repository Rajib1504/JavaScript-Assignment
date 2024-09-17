function sendNotification(email) {
  const checking = email.indexOf("@");
  if (checking == -1) {
    return "Invalid Email";
  }
  const myMail = email.split("@");
  const user = myMail[0];
  const domain = myMail[1];
  const str = user + " sent you an email from " + domain;
  return str;
}

const emailDetails = sendNotification("rajibsardar1542@gmail.com");
console.log(emailDetails);
