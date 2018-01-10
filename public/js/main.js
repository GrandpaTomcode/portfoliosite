$(document).ready(function () {

  // mobile nav toggle
  $(".mobNavBtn").click(function () {
    $(".mobNav").slideToggle("fast");
  });

  // mobile Nav close
  $(".mobNav").click(function () {
    $(".mobNav").slideUp("fast");
  });

  $(".aboutBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".aboutContainer").offset().top
      },
      500
    );
  });
  
  $(".myWorkBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".previousWorkContainer").offset().top
      },
      500
    );
  });
  $(".letsWorkBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".contactFormContainer").offset().top
      },
      500
    );
  });
  $(".sentEmailModalBtn").click(() => {
      location.reload()
  })
});

const submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const inputValidation = input => {
    return input.length > 0;
  };

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validation
  const emailValid = emailValidation.test(email);
  const nameValid = inputValidation(name);
  const subjectValid = inputValidation(subject);
  const messageValid = inputValidation(message);

  if (emailValid !== true) {
    const invalidEmail = document.getElementById("invalidEmail");
    $(".invalidEmail").addClass("showInvalid");
  }
  if (nameValid !== true) {
    const invalidEmail = document.getElementById("invalidEmail");
    $(".invalidEmail").addClass("showInvalid");
  }

  const inputValid = [];
  if (nameValid) {
    inputValid.push(nameValid);
  }
  if (emailValid) {
    inputValid.push(emailValid);
  }
  if (subjectValid) {
    inputValid.push(subjectValid);
  }
  if (messageValid) {
    inputValid.push(messageValid);
  }


  if (inputValid.length >= 3) {
    event.preventDefault();
    let data = { Name: name, Subject: subject, Email: email, Message: message };
    event.preventDefault();
    axios
      .get("/submit", {
        params: {
          data
        }
      })
      .then(function (response) {
        if (response) {
          console.log("the email has been sent")
          console.log(response)
          $(".sentEmailModalContainer").fadeIn(200)
        }
      })
      .catch(function (error) {
        console.log(
          "An error occured while attempting to send the contact information to the server: " +
          error
        );
      });
  }
});
