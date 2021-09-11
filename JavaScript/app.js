const SignUp = () => {
    // Get Element Id
    const Username = document.getElementById('username')
    const Email = document.getElementById('email')
    const Password = document.getElementById('password')




    // Take A Data In Object
    const SignUpObject = {
        UserName: Username.value,
        Email: Email.value,
        Password: Password.value,
    }


    const signupdata = JSON.parse(localStorage.getItem("userdata")) || [];
    signupdata.push(SignUpObject);


    // Assign Id In Local Storage
    localStorage.setItem('userdata', JSON.stringify(signupdata));
    window.location.assign = "login.html"
    console.log(SignUpObject)


    // Input  Styleing
    let sign1 = document.getElementById('sign1')
    sign1.setAttribute("style", "top: 50%;")

    let sign2 = document.getElementById('sign2')
    sign2.setAttribute("style", "top: 50%;")

    let sign3 = document.getElementById('sign3')
    sign3.setAttribute("style", "top: 50%;")

    // Validation Condition For Sign Up Page
    if (Username.value == "") {
        alert("Username Is Required")
    }
    else if (Email.value == "") {
        alert("Email Is Required")
    }
    else if (Password.value == "") {
        alert("Password Is Required")
    }
    else if (Password.length <=  8) {
        alert("Password Must Be 8 Character")
    }
    else {
        alert(`${Username.value} Your Are Sign Up SuccessFully`)
    }

    // Remove Value From Input SignUp
    Username.value = ""
    Email.value = ""
    Password.value = ""

}

// Start Login Function

const login = () => {
    const Email = document.getElementById('email')
    const Password = document.getElementById('password')


    const loginObj = {
        Email: Email.value,
        Password: Password.value,
    }

    var loginUserData = JSON.parse(localStorage.getItem("userdata"))

// Validation Conditions For Sign In Page
    for (var i = 0; i < loginUserData.length; i++) {
        if (loginUserData[i].Email === loginObj.Email && loginUserData[i].Password === loginObj.Password) {
            window.location.href="home.html"
        }
        else if (Email.value == "") {
            alert("Email Is Required")
        }
        else if (Password.value == "") {
            alert("Password Is Required")
        }
        else {
            alert("Your Email Or Password Is InCorrect")
        }
    }

    // Remove Value From Input SignUp
    Email.value = ""
    Password.value = ""

    // Remove Styleing
    let label1 = document.getElementById('label1')
    label1.setAttribute("style", "top: 50%;")

    let label2 = document.getElementById('label2')
    label2.setAttribute("style", "top: 50%;")

    
}

// Login Function
// Function Css Styleing
const labelEmail = () => {
    let label1 = document.getElementById('label1')
    label1.setAttribute("style", "top: -10%;")
}
// Label2 Function Css Styleing
const labelPass = () => {
    let label2 = document.getElementById('label2')
    label2.setAttribute("style", "top: -10%;")
}

// SignUp Function
// SignUp Label1 Function Css Styleing
const UserStyle = () => {
    let sign1 = document.getElementById('sign1')
    sign1.setAttribute("style", "top: -10%;")
}
//  SignUp Label2 Function Css Styleing
const EmailStyle = () => {
    let sign2 = document.getElementById('sign2')
    sign2.setAttribute("style", "top: -10%;")
}

//  SignUp Label3 Function Css Styleing
const PassStyle = () => {
    let sign3 = document.getElementById('sign3')
    sign3.setAttribute("style", "top: -10%;")
}


