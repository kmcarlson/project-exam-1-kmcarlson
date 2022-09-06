//contact form validation
function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("emali").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");

  let text;
  if (name.length < 5) {
    text = "* Name should contain atleast 5 characters";
    error_message.classList.remove("hidden");
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1) {
    text = "* Please Enter valid Email";
    error_message.classList.remove("hidden");
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 15) {
    text = "* Subject should be more than 15 characters";
    error_message.classList.remove("hidden");
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 30) {
    text = "* Message should contain more than 30 characters";
    error_message.classList.remove("hidden");
    error_message.innerHTML = text;
    return false;
  }
  alert("Thanks for the message, we will contact you!");
  return true;
}
