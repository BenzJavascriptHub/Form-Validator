// get element
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "email格式錯誤")
    }
}

// checkRequired input
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getKeyWords(input)}為必填項目`);
        } else {
            showSuccess(input)
        }
    })

}

// get KeyWords
function getKeyWords(input) {
    return input.placeholder.slice(3)
}

// checkLength
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getKeyWords(input)}至少${min}個字元`);
    } else if (input.value.length > max) {
        showError(input, `${getKeyWords(input)}少於${max}個字元`);
    } else {
        showSuccess(input);
    }
}

// check Passwords Match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "密碼不匹配")
    }
}

// event listener
form.addEventListener('submit', function (e) {

    e.preventDefault();
    // console.log(username.value);

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15)
    checkEmail(email)
    checkLength(password, 6, 12)
    checkLength(password2, 6, 12)
    checkPasswordsMatch(password, password2)
})
