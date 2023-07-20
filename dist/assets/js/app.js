/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// Header fixed\r\n\r\nconst header = document.querySelector('#header');\r\n      intro = document.querySelector('#intro');\r\n\r\nif (header && intro) {\r\n    window.addEventListener('scroll', (event) => {\r\n        window.pageYOffset >= intro.offsetHeight ? header.classList.add('header--fixed') : header.classList.remove('header--fixed');\r\n    });\r\n}\r\n\r\n\r\n\r\n// Form validation \r\nlet form = document.querySelector('#form'),\r\n    userName = document.querySelector('#username'),\r\n    email = document.querySelector('#email'),\r\n    subject = document.querySelector('#subject');\r\n    massage = document.querySelector('#textarea');\r\n\r\n\r\nconst setError = (element, massage) => {\r\n    const inputControl = element && element.parentElement;\r\n    const errorDisplay = inputControl && inputControl.querySelector('.form__error');\r\n\r\n    if(element) {\r\n        errorDisplay.innerText = massage;\r\n        inputControl.classList.add('error'),\r\n        inputControl.classList.remove('success');\r\n    }\r\n};\r\n\r\n\r\nconst setSuccess = element => {\r\n    const inputControl = element && element.parentElement;\r\n    const errorDisplay = inputControl && inputControl.querySelector('.form__error');\r\n\r\n    if (element) {\r\n        errorDisplay.innerText = '';\r\n        inputControl.classList.add('success');\r\n        inputControl.classList.remove('error');\r\n    }\r\n};\r\n\r\n\r\nconst isValidEmail = email => {\r\n    const re = /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\\.){1,2}[-A-Za-z]{2,})$/u;\r\n    return re.test(String(email));\r\n};\r\n\r\n\r\nconst isValidSubject = subject => {\r\n    const re = /^[a-zа-яё\\s]+$/iu;\r\n    return re.test(String(subject));\r\n};\r\n\r\n\r\nconst isValidUserName = username => {\r\n    const re = /^([а-яё\\s]+|[a-z\\s]+)$/iu;\r\n    return re.test(String(username));\r\n};\r\n\r\n\r\nconst validateInputs = () => {\r\n    const usernameValue = userName && userName.value.trim(),\r\n          emailValue = email && email.value.trim(),\r\n          subjectValue = subject && subject.value.trim(),\r\n          massageValue = massage && massage.value.trim();\r\n\r\n    if (usernameValue === '') {\r\n        setError(userName, 'Please enter a name');\r\n    } else if (!isValidUserName(usernameValue)) {\r\n        setError(userName, 'The name cannot consist of numbers and contain letters from different languages');\r\n    } else if (usernameValue && usernameValue.length < 2) {\r\n        setError(userName, 'Name must have at least two characters');\r\n    } else {\r\n        setSuccess(userName);\r\n    }\r\n\r\n    if (emailValue === '') {\r\n        setError(email, 'Please enter your email address');\r\n    } else if (!isValidEmail(emailValue)) {\r\n        setError(email, 'Please enter your email address in the correct format');\r\n    } else {\r\n        setSuccess(email);\r\n    }\r\n\r\n    if (subjectValue === '') {\r\n        setError(subject, 'Please enter subject');\r\n    } else if (!isValidSubject(subjectValue)) {\r\n        setError(subject, 'the object must consist only of a letter');\r\n    } else if (subjectValue && subjectValue.length < 3) {\r\n        setError(subject, 'subject must be at least three characters long');\r\n    } else {\r\n        setSuccess(subject);\r\n    }\r\n\r\n    if (massageValue === '') {\r\n        setError(massage, 'The message field must not be empty. Please tell me what interests you.');\r\n    } else if (massageValue && massageValue.length < 20 ) {\r\n        setError(massage, 'The message field must contain at least twenty characters.');\r\n    } else {\r\n        setSuccess(massage);\r\n    }\r\n};\r\n\r\n\r\nif (form) {\r\n    form.addEventListener('submit', event => {\r\n        event.preventDefault();\r\n\r\n        validateInputs();\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;