// page 1

let registration_email = document.querySelector('.registration_email')
let registration_name = document.querySelector('.registration_name')
let registration_surname = document.querySelector('.registration_surname')
let registration_password = document.querySelector('.registration_password')

registration_email.value = localStorage.getItem('user_email')

registration_email.onkeyup = () => {
    localStorage.setItem('user_email', registration_email.value)
    console.log(registration_email.value);
}

registration_name.value = localStorage.getItem('user_name')

registration_name.onkeyup = () => {
    localStorage.setItem('user_name', registration_name.value)
    console.log(registration_name.value);
}

registration_surname.value = localStorage.getItem('user_surname ')

registration_surname.onkeyup = () => {
    localStorage.setItem('user_surname', registration_surname.value)
    console.log(registration_surname.value);
}

registration_password.value = localStorage.getItem('user_password ')

registration_password.onkeyup = () => {
    localStorage.setItem('user_password', registration_password.value)
    console.log(registration_password.value);
}

// page 1



// 
// let pattern = {
//     name: /^[a-z ,.'-]+$/i,
//     surname:/^[a-z ,.'-]+$/i,
//     email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
//     password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
// }


// function validate(field, regex) {
    
// }

// inps.forEach(inp => {
//     inp.onkeyup = () => {
//         validate(inp, pattern[inp.name])
//     }
// });