//= components/file3.js

// Header fixed

const header = document.querySelector('#header'),
      intro = document.querySelector('#intro');

if (header && intro) {
    window.addEventListener('scroll', (event) => {
        window.pageYOffset >= intro.offsetHeight ? header.classList.add('header--fixed') : header.classList.remove('header--fixed');
    });
}


// Burger menu

const burgerBtn = document.querySelector('#navToggle'),
      nav = document.querySelector('#nav'),
      body = document.querySelector('body');


burgerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    burgerBtn.classList.toggle('active');
    nav.classList.toggle('show');
    body.classList.toggle('show-nav');

});

window.addEventListener('resize',(e) => {
    burgerBtn.classList.remove('active');
    nav.classList.remove('show');
    body.classList.remove('show-nav');
});



// Form validation 
let form = document.querySelector('#form'),
    userName = document.querySelector('#username'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    massage = document.querySelector('#textarea');


const setError = (element, massage) => {
    const inputControl = element && element.parentElement;
    const errorDisplay = inputControl && inputControl.querySelector('.form__error');

    if(element) {
        errorDisplay.innerText = massage;
        inputControl.classList.add('error'),
        inputControl.classList.remove('success');
    }
};


const setSuccess = element => {
    const inputControl = element && element.parentElement;
    const errorDisplay = inputControl && inputControl.querySelector('.form__error');

    if (element) {
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }
};


const isValidEmail = email => {
    const re = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    return re.test(String(email));
};


const isValidSubject = subject => {
    const re = /^[a-zа-яё\s]+$/iu;
    return re.test(String(subject));
};


const isValidUserName = username => {
    const re = /^([а-яё\s]+|[a-z\s]+)$/iu;
    return re.test(String(username));
};


const validateInputs = () => {
    const usernameValue = userName && userName.value.trim(),
          emailValue = email && email.value.trim(),
          subjectValue = subject && subject.value.trim(),
          massageValue = massage && massage.value.trim();

    if (usernameValue === '') {
        setError(userName, 'Please enter a name');
    } else if (!isValidUserName(usernameValue)) {
        setError(userName, 'The name cannot consist of numbers and contain letters from different languages');
    } else if (usernameValue && usernameValue.length < 2) {
        setError(userName, 'Name must have at least two characters');
    } else {
        setSuccess(userName);
    }

    if (emailValue === '') {
        setError(email, 'Please enter your email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter your email address in the correct format');
    } else {
        setSuccess(email);
    }

    if (subjectValue === '') {
        setError(subject, 'Please enter subject');
    } else if (!isValidSubject(subjectValue)) {
        setError(subject, 'the object must consist only of a letter');
    } else if (subjectValue && subjectValue.length < 3) {
        setError(subject, 'subject must be at least three characters long');
    } else {
        setSuccess(subject);
    }

    if (massageValue === '') {
        setError(massage, 'The message field must not be empty. Please tell me what interests you.');
    } else if (massageValue && massageValue.length < 20 ) {
        setError(massage, 'The message field must contain at least twenty characters.');
    } else {
        setSuccess(massage);
    }
};


if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        validateInputs();
    });
}




