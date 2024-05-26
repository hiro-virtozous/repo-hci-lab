var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_2_progressbar = document.querySelector(".form_2_progressbar");
var form_3_progressbar = document.querySelector(".form_3_progressbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");


document.addEventListener('DOMContentLoaded', function() {
    var barButton = document.querySelector('.bar');
    var navbarClick = document.querySelector('.navbar-click');
    var pageDownButton = document.querySelector('.page-down button');

    barButton.addEventListener('click', function() {
        navbarClick.classList.toggle('active');
        var links = document.querySelectorAll('.navbar a');
        links.forEach(function(link) {
            link.style.display = link.style.display === 'none' ? 'block' : 'none';
        });
    });
});

function handleform_1_next_btn(){
    form_1.style.display = "none";
    form_2.style.display = "block";
    
    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progressbar.classList.add("active");
}


form_2_back_btn.addEventListener("click", function(){
    form_1.style.display = "block";
    form_2.style.display = "none";
    
    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progressbar.classList.remove("active");
});


function handleform_2_next_btn(){
    form_2.style.display = "none";
    form_3.style.display = "block";
    
    form_2_btns.style.display = "none";
    form_3_btns.style.display = "flex";
    
    form_3_progressbar.classList.add("active");
}
    


form_3_back_btn.addEventListener("click", function(){
    form_2.style.display = "block";
    form_3.style.display = "none";
    
    form_2_btns.style.display = "flex";
    form_3_btns.style.display = "none";

    form_3_progressbar.classList.remove("active");
});


btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");
});

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
})


// validasi mail
validMail = -1;
const form_mail = document.getElementById('form-mail')
const errorElement_mail = document.getElementById('error-mail')
const emailElement = document.getElementById('email address')

const handleFormMail = (event) => {
    event.preventDefault();
    validMail = -1
    const keongIndex = emailElement.value.indexOf('@')
    const dotIndex = emailElement.value.indexOf('.')
    if(keongIndex == -1){
        emailElement.style.borderColor = "#ff5252";
        errorElement_mail.innerHTML = "Email must contain @"
        return
    }
    if(dotIndex == -1){
        emailElement.style.borderColor = "#ff5252";
        errorElement_mail.innerHTML = "Email must contain ."
        return
    }

    if(dotIndex < keongIndex){
        emailElement.style.borderColor = "#ff5252";
        errorElement_mail.innerHTML = ". must be after @"
        return
    }

    errorElement_mail.innerHTML = ''
    emailElement.style.borderColor = '';
    validMail = 1;
}

form_mail.addEventListener('mousemove', handleFormMail)


// validasi password
function isContainCapital(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= 'A' && c <= 'Z'){
        contain = true
    }
    })

    return contain
}

function isContainNumeric(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= '0' && c <= '9'){
        contain = true
    }
    })

    return contain
}

function isContainLowerCase(s){
    let contain = false
    s.split('').forEach((c) => {
    // console.log(c);  
    if(c >= 'a' && c <= 'z'){
        contain = true
    }
    })

    return contain
}
const form_password = document.getElementById('form-password')
const form_confirm_password = document.getElementById('form-confirm-password')
const errorElement_password = document.getElementById('error-password')
const errorElement_Confpassword = document.getElementById('error-conf-password')

const passwordElement = document.getElementById('password')
const confirmPasswordElement = document.getElementById('confirm_password')


validPwd = -1
const handleFormPassword = (event) => {
    validPwd = -1
    event.preventDefault();
    if(!isContainCapital(passwordElement.value) || !isContainLowerCase(passwordElement.value) || !isContainNumeric(passwordElement.value)){
        passwordElement.style.borderColor = "#ff5252";
        errorElement_password.innerHTML = "Password must contain atleast one lowercase uppercase and number"
        return
    }
    errorElement_password.innerHTML = ''
    passwordElement.style.borderColor = '';
    validPwd = 1
}

form_password.addEventListener('mousemove', handleFormPassword)

validConfPwd = -1
const handleFormConfirmPassword = (event) => {
    event.preventDefault();
    validConfPwd = -1
    // Kalo Password Ga sama
    if(confirmPasswordElement.value != passwordElement.value){
        confirmPasswordElement.style.borderColor = "#ff5252";
        errorElement_Confpassword.innerHTML = "Passwords does not match"
        return
    }
    errorElement_Confpassword.innerHTML = ''
    confirmPasswordElement.style.borderColor = '';
    validConfPwd = 1
}
form_confirm_password.addEventListener('mousemove', handleFormConfirmPassword)


valid = -1;
const validateRequired = (event) => {
    event.preventDefault();
    
    if(emailElement.value == "" || passwordElement.value == "" || confirmPasswordElement.value == ""){
        if(emailElement.value == ""){
            errorElement_mail.innerHTML = "Required";
        }
        if(passwordElement.value == "") errorElement_password.innerHTML = "Required";
        if(confirmPasswordElement.value == "") errorElement_Confpassword.innerHTML = "Required";
        return
    }
    
    valid = 1;
    if(valid == 1 && validMail == 1 && validConfPwd == 1 && validPwd == 1){
        handleform_1_next_btn();
    } 
}

form_1_next_btn.addEventListener("click", validateRequired);

// validasi username
const form_user_name = document.getElementById('form-user-name')
const errorElement_user_name = document.getElementById('error-user-name')

const user_nameElement = document.getElementById('user_name')
validUsrNm = -1
const handleFormUserName = (event) => {
    event.preventDefault();
    validUsrNm = -1
    const splittedFullName = user_nameElement.value.split(' ')
    if(splittedFullName.length < 2){
        user_nameElement.style.borderColor = "#ff5252";
        errorElement_user_name.innerHTML = 'Name must atleast contain 2 words'
        return
    }
    errorElement_user_name.innerHTML = ''
    user_nameElement.style.borderColor = '';
    validUsrNm = 1
}

form_user_name.addEventListener("mousemove", handleFormUserName);

const first_nameElement = document.getElementById('first_name')
const last_nameElement = document.getElementById('last_name')

const errorElement_first_name = document.getElementById('error-first-name')
const errorElement_last_name = document.getElementById('error-last-name')

validForm2 = -1;
const validateRequiredForm2 = (event) => {
    event.preventDefault();
    validForm2 = -1;
    if(first_nameElement.value == "" || last_nameElement.value == "" || user_nameElement.value == ""){
        if(first_nameElement.value == "") errorElement_first_name.innerHTML = "Required";
        if(last_nameElement.value == "") errorElement_last_name.innerHTML = "Required";
        if(user_nameElement.value == "") errorElement_user_name.innerHTML = "Required"; 
        return
    }
    errorElement_last_name.innerHTML = "";
    errorElement_first_name.innerHTML = ""
    validForm2 = 1;
    if(validForm2 == 1 && validUsrNm == 1){
        handleform_2_next_btn();
    } 
}

form_2_next_btn.addEventListener("click", validateRequiredForm2);

function isNumeric(s){
    let contain = false
    for(i = 0; i < s.length; i++){
        if(s[i] > 1 || s[i] < 9 && s[i] != 0){
            continue;
        } else {
            return contain
        }
    }
    contain = true
    return contain
}


// validasi umur
const ageElement = document.getElementById('age')
const form_age = document.getElementById('form-age')
const errorElement_age = document.getElementById('error-age')

const handleAgeForm = (event) => {
    event.preventDefault();
    if(!isNumeric(ageElement.value)){
        errorElement_age.innerHTML = "the value must be number & positive number"
        return
    }
    errorElement_age.innerHTML = ""
}

form_age.addEventListener("mousemove", handleAgeForm);