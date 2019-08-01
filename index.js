function validation() {
    var name = document.getElementById('nomprenom').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var adress = document.getElementById('address').value;
    var comment = document.getElementById('comment').value;


    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var passwordcheck = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    if (name === '') {
        document.getElementById('nomprenomerror').innerHTML = "**This field is required";
    } else {
        document.getElementById('nomprenomerror').innerHTML = '';
    }
    if (adress === '') {
        document.getElementById('addresserror').innerHTML = "**This field is required";
    } else {
        document.getElementById('addresserror').innerHTML = '';
    }
    if (comment === '') {
        document.getElementById('commenterror').innerHTML = "**This field is required";
    } else {
        document.getElementById('commenterror').innerHTML = '';
    }

    if (email === '') {
        document.getElementById('emailerror').innerHTML = "**This field is required";
    } else if (emailcheck.test(email)) {
        document.getElementById('emailerror').innerHTML = "";
    } else {
        document.getElementById('emailerror').innerHTML = "**e-mail is invalid";
    }
    if (password === '') {
        document.getElementById('passworderror').innerHTML = "**This field is required";
    } else if (passwordcheck.test(password)) {
        document.getElementById('passworderror').innerHTML = "";
    } else {
        document.getElementById('passworderror').innerHTML = "**password is invalid";
    }

}