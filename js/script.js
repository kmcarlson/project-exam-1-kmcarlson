//contact form validation
function validate(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("emali").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const error_message = document.getElementById("error_message");
    
    let text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.classList.remove('hidden');
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.classList.remove('hidden');
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 8){
      text = "Please Enter valid Phone Number";
      error_message.classList.remove('hidden');
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 30){
      text = "Please Enter More Than 30 Characters";
      error_message.classList.remove('hidden');
      error_message.innerHTML = text;
      return false;
    }
    alert("Thanks for the message, we will contact you!");
    return true;
  }
