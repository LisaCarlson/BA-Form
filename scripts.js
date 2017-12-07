$( document ).ready(function() {
    
    function validateFirstName() {
      let $firstName = $('#firstName').val();
      let $firstLabel = $('label[for=firstName]');
      if (!$firstName) {
        $firstLabel.text('First name is required').parent().addClass('error');
        return false;
      }
      else {
        $firstLabel.text('First Name').parent().removeClass('error')
        return true;
      }
    }

    function validateLastName() {
      let $lastName = $('#lastName').val();
      let $lastLabel = $('label[for=lastName]');
      if (!$lastName) {
        $lastLabel.text('Last name is required').parent().addClass('error');
        return false;
      }
      else {
        $lastLabel.text('Last Name').parent().removeClass('error');
        return true;
      }
    }

    function validateEmail() {
      let $email = $('#email').val();
      let $emailLabel = $('label[for=email]');
      let re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if ($email) {
        let result = re.test($email);
        if (!result) {
          $emailLabel.text('Please enter a valid email').parent().addClass('error');
          return false;
        }
        else {
          $emailLabel.text('Email').parent().removeClass('error');
          return true;
        }
      }
      else{
        return true;
      }
    }

    function validatePhone() {
      let $phone = $('#phone').val();
      let $phoneLabel = $('label[for=phone]');
      let re = new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
      if ($phone) {
        let result = re.test($phone);
        if (!result) {
          $phoneLabel.text('Please enter a valid phone number').parent().addClass('error');
          return false;
        }
        else {
          $phoneLabel.text('Phone Number').parent().removeClass('error');
          return true;
        }
      }
      else{
        return true;
      }
    }

    function validateUsername() {
      let $username = $('#username').val();
      let $usernameLabel = $('label[for=username]');
      if (!$username) {
        $usernameLabel.text('Username name is required').parent().addClass('error');
        return false;
      }
      else {
        $usernameLabel.text('Username').parent().removeClass('error');
        return true;
      }
    }

    function validatePassword() {
      let $password = $('#password').val();
      let $passwordLabel = $('label[for=password]');
      if (!$password) {
        $passwordLabel.text('Password is required').parent().addClass('error');
        return false;
      }
      else {
        $passwordLabel.text('Password').parent().removeClass('error');
        return true;
      }
    }

    function validatePasswordConfirm() {
      let $password = $('#password').val();
      let $passwordConfirm = $('#password-confirm').val();
      let $passwordConfirmLabel = $('label[for=password-confirm]');
      if (!$passwordConfirm) {
        $passwordConfirmLabel.text('Please enter your password again').parent().addClass('error');
        return false;
      }
      else if ($password !== $passwordConfirm) {
        $passwordConfirmLabel.text('Password does not match the confirm password.').parent().addClass('error');
        return false;
      }
      else {
        $passwordConfirmLabel.text('Confirm Password').parent().removeClass('error');
        return true;
      }
    }

    function validateContactForm() {
      let $form = $("#contactform");
      let valid = true;
      valid = validateFirstName() && valid;
      valid = validateLastName() && valid;
      valid = validateEmail() && valid;
      valid = validatePhone() && valid;
      valid = validateUsername() && valid;
      valid = validatePassword() && valid;
      valid = validatePhone() && valid;
      valid = validatePasswordConfirm() && valid;

      $form.data("valid", valid);
    }

    $('#firstName').on('blur', function() {
      validateFirstName();
    });

    $('#lastName').on('blur', function() {
      validateLastName();
    });

    $('#email').on('blur', function() {
      validateEmail();
    });

    $('#phone').on('blur', function() {
      validatePhone();
    });

    $('#username').on('blur', function() {
      validateUsername();
    });

    $('#password').on('blur', function() {
      validatePassword();
    });

    $('#password-confirm').on('blur', function() {
      validatePasswordConfirm();
    });

    $('#submit_btn').on('click', function(e) {
      e.preventDefault();

      validateContactForm();

      let $form = $("#contactform");
      if ($form.data("valid")) {
        document.getElementById('contactform').submit();
      }
    });
});


