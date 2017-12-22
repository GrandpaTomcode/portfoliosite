$(document).ready(function () {
    // mobile nav toggle

    $('.mobNavBtn').click(function () {
        $('.mobNav').slideToggle('fast');
    });

    // mobile Nav close

    $('.mobNav').click(function () {
        $('.mobNav').slideUp('fast');
    });

    $('.aboutBtn').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('.aboutContainer').offset().top
            },
            500
        );
    });
    $('.myWorkBtn').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('.previousWorkContainer').offset().top
            },
            500
        );
    });
    $('.letsWorkBtn').click(function () {
        $('html, body').animate(
            {
                scrollTop: $('.contactFormContainer').offset().top
            },
            500
        );
    });

});


const submitBtn = document.getElementById('submitButton')

submitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const inputValidation = input => {
        return input.length > 0
    }

    const name = document.getElementById('name').value
    const subject = document.getElementById('subject').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    // Validation
    const emailValid = emailValidation.test(email)
    const nameValid = inputValidation(name)
    const subjectValid = inputValidation(subject)
    const messageValid = inputValidation(message)

    if (emailValid !== true) {
        const invalidEmail = document.getElementById("invalidEmail")
        $('.invalidEmail').addClass('showInvalid')
    }

    const inputValid = []
    if (nameValid) {
        inputValid.push(nameValid)
    }
    if (emailValid) {
        inputValid.push(emailValid)
    }
    if (subjectValid) {
        inputValid.push(subjectValid)
    }
    if (messageValid) {
        inputValid.push(messageValid)
    }

    console.log(name, subject, email, message)
    if (inputValid.length >= 3) {
        let data = { name, subject, email, message }
        try {
            data = JSON.stringify(data)
        } catch (err) {
            console.log(err)
        }
        event.preventDefault()
        axios.post('/submit', {
                params: {
                    data
                }
            })
            .then(function (response) {
                console.log(response);
                if (response) {
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(
                    'An error occured while attempting to send the contact information to the server: ' +
                    error
                );
            });
    } else {
        console.log(inputValid);
        console.log('one or more parameters in the form are invalid');
    }
})
