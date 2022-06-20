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
function isValidEmail(email) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(String(email));
}

// event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(username.value);

    if (username.value === "") {
        showError(username, "用戶名為必填項目")
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "email為必填項目")
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email格式錯誤');
    } else {
        showSuccess(email);
    }

    if (password.value === "") {
        showError(password, "密碼為必填項目")
    } else {
        showSuccess(password);
    }

    if (password2.value === "") {
        showError(password2, "確認密碼為必填項目")
    } else {
        showSuccess(password2);
    }
})
