//Johnathan Nguyen

function signupClicked(){
    window.location.href="signup.html";
}

function loginClicked(){
    window.location.href="login.html";
}

var userInfo = JSON.parse(localStorage.getItem('userInfo')) || [];

function printError(errID, displayMessage) {
    document.getElementById(errID).innerHTML = displayMessage;
}

function register(){
    var signupUser = document.getElementById("signupUser").value;
    var signupPass = document.getElementById("signupPass").value;

    var newUser = {
        'username': signupUser,
        'password': signupPass
    }

    userInfo.push(newUser);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.location.href = "login.html"
}

function checkFields() {
    var form = document.getElementById("signupForm");
    var error = 0;

    var signupUser = document.getElementById("signupUser").value;
    var signupPass = document.getElementById("signupPass").value;

    //Username isn't empty
    if (form.signupUser.value.length == 0) {
        error++;
        printError("signupUserErr", "Please Enter a Username");
    }else {
        printError("signupUserErr", "");
    }

    //password isn't empty
    if (form.signupPass.value.length == 0) {
        error++;
        printError("signupPassErr", "Please Enter a Password");
    }else {
        printError("signupPassErr", "");
    }

    for(var i = 0; i < userInfo.length; i++) {
		// check if new username exists in array
		if(signupUser == userInfo[i].username) {
			// alert user that the username is taken
            printError("signupUserErr", "Username already taken");
            error++;
        }
		// check if new password is less than 8 characters
        if (signupPass.length < 8) {
			// alert user that the password is to short
            printError("signupPassErr", "Password is too short");
            error++;
		}
	}
    //Error exist: alert user
    if (error != 0) {
        alert("Please fix the issues in red");
    } else {
        //upon registering successfully launch login screen
        register();

    }
}


//used https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage/55968743
//to help with adding array of objects to local storage
function authenticate(){
    var loginErr = document.getElementById('loginErr');
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));

    var username = document.getElementById("loginUser").value;
    var password = document.getElementById("loginPass").value;

    //checking all values for correct pair of user
    for(var i = 0 ; i < userInfo.length;  i++){
        if(username == userInfo[i].username && password == userInfo[i].password){
            window.location.href="conway.html";
        }else{
            loginErr.innerHTML = "Username and Password mismatch";
        }
    }
}