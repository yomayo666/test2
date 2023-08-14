/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _assets_trimg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/trimg.jpg */ \"./src/assets/trimg.jpg\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n/* harmony import */ var _assets_img_add_file_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img-add-file.svg */ \"./src/assets/img-add-file.svg\");\n/* harmony import */ var _assets_cil_mic_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cil_mic.svg */ \"./src/assets/cil_mic.svg\");\n/* harmony import */ var _assets_open_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/open.png */ \"./src/assets/open.png\");\n/* harmony import */ var _assets_circle_arrow_down_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/circle-arrow-down-solid.svg */ \"./src/assets/circle-arrow-down-solid.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"asdssssssssssssdd\")\n\n//# sourceURL=webpack://chatapp/./src/index.js?");

/***/ }),

/***/ "./src/js/dialog/addDialog.js":
/*!************************************!*\
  !*** ./src/js/dialog/addDialog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDialog)\n/* harmony export */ });\n/* harmony import */ var _main_addTextInMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/addTextInMain */ \"./src/js/main/addTextInMain.js\");\n/* harmony import */ var _main_addTextInMain__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_addTextInMain__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _thereIsScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thereIsScroll */ \"./src/js/dialog/thereIsScroll.js\");\n/* harmony import */ var _innerTextUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerTextUser */ \"./src/js/dialog/innerTextUser.js\");\n/* harmony import */ var _setPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setPosition */ \"./src/js/dialog/setPosition.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ \"./src/js/dialog/observer.js\");\n/* harmony import */ var _getThisPosition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getThisPosition */ \"./src/js/dialog/getThisPosition.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function addDialog(id){\r\n    const res = await fetch(`http://127.0.0.1:3000/dialog?userId=${id}`);\r\n    const rsolt = await res.json();\r\n    //console.log(rsolt.thisUser)\r\n    document.querySelector('.user-input-main').innerHTML = \"\"\r\n    for(let key in rsolt){\r\n        if(rsolt[key].thisUser == true){\r\n            (0,_innerTextUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(false, rsolt[key].time, rsolt[key].text)\r\n        }else if(rsolt[key].thisUser == false){\r\n            //console.log(id, rsolt[key].id)\r\n            (0,_innerTextUser__WEBPACK_IMPORTED_MODULE_2__.innerTextOtherUsers)(false, rsolt[key].time, rsolt[key].text, id,  rsolt[key].id, rsolt[key].viewed)\r\n        }\r\n    }\r\n    (0,_thereIsScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_getThisPosition__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(id)\r\n    //observerFunc()\r\n\r\n   // addTextInMain(rsolt.dialog.secondUser.time, rsolt.dialog.secondUser.text)\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/addDialog.js?");

/***/ }),

/***/ "./src/js/dialog/addDialogServ/addDialogServ.js":
/*!******************************************************!*\
  !*** ./src/js/dialog/addDialogServ/addDialogServ.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDialogServ)\n/* harmony export */ });\n/* harmony import */ var _addDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addDialog */ \"./src/js/dialog/addDialog.js\");\n/* harmony import */ var _getOneMesageFromServ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOneMesageFromServ */ \"./src/js/dialog/addDialogServ/getOneMesageFromServ.js\");\n\r\n\r\n\r\nasync function addDialogServ(time, text, userId, thisUser=true, wait){\r\n        let data = {\r\n            text: text,\r\n            thisUser: thisUser,\r\n            time: time,\r\n            userId: userId,\r\n            viewed: thisUser == true ? true: false\r\n          }\r\n        const response = await fetch('http://127.0.0.1:3000/dialog', {\r\n          method: 'POST',\r\n          headers: {\r\n            'Content-Type': 'application/json'\r\n          },\r\n          body: JSON.stringify(data)\r\n        });\r\n        //console.log(m); \r\n        let g = wait\r\n        //console.log(g)\r\n        if(g == \"useGet\"){\r\n          (0,_getOneMesageFromServ__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(userId)\r\n        }\r\n        //console.log('GOOD')\r\n}\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/addDialogServ/addDialogServ.js?");

/***/ }),

/***/ "./src/js/dialog/addDialogServ/getOneMesageFromServ.js":
/*!*************************************************************!*\
  !*** ./src/js/dialog/addDialogServ/getOneMesageFromServ.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOneMesageFromServ)\n/* harmony export */ });\n/* harmony import */ var _innerTextUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerTextUser */ \"./src/js/dialog/innerTextUser.js\");\n\r\nasync function getOneMesageFromServ(userId){\r\n    const res = await fetch(`http://127.0.0.1:3000/dialog?userId=${userId}&_sort=id&_order=desc&_limit=1`);\r\n    const rsolt = await res.json();\r\n\r\n    //console.log(rsolt[0].id,\"BABADUC\")\r\n    (0,_innerTextUser__WEBPACK_IMPORTED_MODULE_0__.innerTextOtherUsers)(true, rsolt[0].time, rsolt[0].text, userId,  rsolt[0].id, rsolt[0].viewed)   \r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/addDialogServ/getOneMesageFromServ.js?");

/***/ }),

/***/ "./src/js/dialog/addTextUser.js":
/*!**************************************!*\
  !*** ./src/js/dialog/addTextUser.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addText: () => (/* binding */ addText),\n/* harmony export */   \"default\": () => (/* binding */ addTextUser)\n/* harmony export */ });\n/* harmony import */ var _main_innerMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/innerMain */ \"./src/js/main/innerMain.js\");\n/* harmony import */ var _addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDialogServ/addDialogServ */ \"./src/js/dialog/addDialogServ/addDialogServ.js\");\n/* harmony import */ var _innerTextUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerTextUser */ \"./src/js/dialog/innerTextUser.js\");\n/* harmony import */ var _downButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downButton */ \"./src/js/dialog/downButton.js\");\n\r\n\r\n\r\n\r\nfunction addTextUser(){\r\n    document.querySelector(\".img-input-micro\").addEventListener('click', e =>{\r\n        addText(\"userАddedHimself\")\r\n    })  \r\n}\r\nfunction addText(kod, text){\r\n    let now = new Date();\r\n    let time = `${now.getHours()}:${now.getMinutes()}`\r\n    if(kod == \"userАddedHimself\"){\r\n        if(document.querySelector('#input-text').value.length > 0){\r\n        const text = document.querySelector('#input-text').value\r\n        ;(0,_addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time, text, _main_innerMain__WEBPACK_IMPORTED_MODULE_0__.funcIdAndAvailable.Id, true)\r\n        ;(0,_innerTextUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(true ,time, text, true)\r\n        document.querySelector('#input-text').value = \"\"\r\n        document.querySelector('#input-text').focus();\r\n        document.querySelector('.img-input-micro').src = \"./cil_mic.svg\";\r\n        (0,_downButton__WEBPACK_IMPORTED_MODULE_3__.clickDown)()\r\n        }\r\n    }else{\r\n        //console.log(time, text, kod)\r\n        (0,_innerTextUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(true, time, text, kod)\r\n        ;(0,_addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time, text, _main_innerMain__WEBPACK_IMPORTED_MODULE_0__.funcIdAndAvailable.Id, kod)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/addTextUser.js?");

/***/ }),

/***/ "./src/js/dialog/dialogAvailable.js":
/*!******************************************!*\
  !*** ./src/js/dialog/dialogAvailable.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   codInterval: () => (/* binding */ codInterval),\n/* harmony export */   \"default\": () => (/* binding */ dialogAvailable)\n/* harmony export */ });\n/* harmony import */ var _randomText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomText */ \"./src/js/dialog/randomText.js\");\n\r\nasync function dialogAvailable(id){\r\n    const res = await fetch(`http://127.0.0.1:3000/users/${id}`);\r\n    const rsolt = await res.json();\r\n    if(rsolt.dialogueAvailable == true){\r\n        document.querySelector('.change-check').checked = true;\r\n        let timer = setInterval(addRandomText.bind(null, id), 3000);\r\n        codInterval(timer)\r\n    }else{\r\n        document.querySelector('.change-check').checked = false;\r\n    }\r\n}\r\nfunction addRandomText(id){\r\n    let i = Math.floor(Math.random() * 10) + 1;\r\n    if(i <= 5){\r\n        (0,_randomText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, true)\r\n    }else{\r\n        (0,_randomText__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, false)\r\n    }\r\n}\r\nfunction codInterval(x = -1){\r\n    codInterval.Cod = x\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/dialogAvailable.js?");

/***/ }),

/***/ "./src/js/dialog/downButton.js":
/*!*************************************!*\
  !*** ./src/js/dialog/downButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickDown: () => (/* binding */ clickDown)\n/* harmony export */ });\nfunction downButton(){\r\n    document.querySelector('.down-button').addEventListener('click', e =>{\r\n        clickDown()\r\n    })\r\n}downButton()\r\nfunction clickDown(){\r\n    let mein = document.querySelector('.main-text')\r\n    let time = setInterval(() => {\r\n        if(mein.scrollHeight < (mein.scrollTop + mein.clientHeight + 10)){\r\n            document.querySelector('.down-button').style.display = \"none\"\r\n            clearInterval(time)\r\n            //console.log('A')\r\n        }else{\r\n            mein.scrollBy(0, 70)\r\n            //console.log('E')\r\n        }\r\n\r\n    }, 50);\r\n/*     document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\r\n    document.querySelector('.down-button').style.display = \"none\" */\r\n    //console.log('KKKK')\r\n}\r\n\r\n//document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/downButton.js?");

/***/ }),

/***/ "./src/js/dialog/getThisPosition.js":
/*!******************************************!*\
  !*** ./src/js/dialog/getThisPosition.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getThisPosition)\n/* harmony export */ });\n/* harmony import */ var _setPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPosition */ \"./src/js/dialog/setPosition.js\");\n\r\nasync function getThisPosition(userId){\r\n    const res = await fetch(`http://127.0.0.1:3000/users/${userId}`);\r\n    const rsolt = await res.json();\r\n\r\n    //console.log(rsolt[0].id,\"BABADUC\")\r\n    console.log(rsolt.savePosition)\r\n    ;(0,_setPosition__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rsolt.savePosition)   \r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/getThisPosition.js?");

/***/ }),

/***/ "./src/js/dialog/innerTextUser.js":
/*!****************************************!*\
  !*** ./src/js/dialog/innerTextUser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ innerTextUsers),\n/* harmony export */   innerTextOtherUsers: () => (/* binding */ innerTextOtherUsers)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./src/js/dialog/observer.js\");\n/* harmony import */ var _setPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPosition */ \"./src/js/dialog/setPosition.js\");\n\r\n\r\nfunction innerTextUsers(scrolDown, time, text){\r\n    let scrolDownOrNo\r\n    scrolDown != false? scrolDownOrNo = slideDown(): ''\r\n    let classContainer = \"user-text\"\r\n    let classTime = \"user-time\"\r\n    //console.log(text)\r\n    let add = `<div class=${classContainer}>${text}<div class=${classTime}>${time}</div></div>`\r\n    document.querySelector('.user-input-main').insertAdjacentHTML('beforeend', add)\r\n    if(scrolDownOrNo == true){\r\n        let mein = document.querySelector('.main-text')\r\n        document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\r\n    }\r\n\r\n\r\n\r\n}\r\nfunction innerTextOtherUsers(scrolDown, time, text, userId, id, viewed){\r\n    //console.log(id)\r\n    let scrolDownOrNo\r\n    scrolDown != false? scrolDownOrNo = slideDown(): ''\r\n    let  classTime = \"other-user-time\";\r\n    let classContainer = \"other-user-text\"\r\n    let add = `<div class=${classContainer} id=${`userId${userId}id${id}`}>${text}<div class=${classTime}>${time}</div></div>`\r\n    document.querySelector('.user-input-main').insertAdjacentHTML('beforeend', add)\r\n    let check = document.querySelector(`#userId${userId}id${id}`)\r\n    if(scrolDownOrNo == true){\r\n        let mein = document.querySelector('.main-text')\r\n        document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\r\n        document.querySelector('.count-button').style.display = \"none\"\r\n    }else if(Number.parseInt(document.querySelector('.count-button').innerText) > 0){\r\n        document.querySelector('.count-button').style.display = \"block\"\r\n    }\r\n    if(viewed == false){\r\n        document.querySelector('.count-button').innerText = Number.parseInt(document.querySelector('.count-button').innerText) + 1;\r\n        (0,_observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, id)\r\n        //stopScroll(check)\r\n    }\r\n}\r\n function slideDown(){\r\n    let mein = document.querySelector('.main-text')\r\n    return mein.scrollHeight < (mein.scrollTop + mein.clientHeight + 10)\r\n}  \n\n//# sourceURL=webpack://chatapp/./src/js/dialog/innerTextUser.js?");

/***/ }),

/***/ "./src/js/dialog/observer.js":
/*!***********************************!*\
  !*** ./src/js/dialog/observer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ observerFunc)\n/* harmony export */ });\n/* harmony import */ var _puTviewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puTviewed */ \"./src/js/dialog/puTviewed.js\");\n\r\nfunction observerFunc(check, id){\r\n    \r\n     const options = {}\r\n\r\n    const observer = new IntersectionObserver(function(entries, observer){\r\n        entries.forEach(entry => {\r\n            //console.log(entry.isIntersecting)\r\n            if(entry.isIntersecting == true){\r\n               console.log(\"(((\")\r\n                ;(0,_puTviewed__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id)\r\n                document.querySelector('.count-button').innerText = Number.parseInt(document.querySelector('.count-button').innerText) - 1;\r\n                if(document.querySelector('.count-button').innerText == 0){\r\n                    document.querySelector('.count-button').style.display = \"none\"\r\n\r\n                }\r\n                //console.log(check, userId, id, \"KAKA\")\r\n                //console.log(observer.length)\r\n                observer.unobserve(check)   \r\n                //check = \"\"\r\n            }\r\n        })\r\n    }, options)\r\n    observer.observe(check) \r\n/*     result.forEach(e => {\r\n         console.log(e)\r\n        observer.observe(e) \r\n    }) */\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/observer.js?");

/***/ }),

/***/ "./src/js/dialog/puTviewed.js":
/*!************************************!*\
  !*** ./src/js/dialog/puTviewed.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ putViewed)\n/* harmony export */ });\n\r\nasync function putViewed(id){\r\n        let data = {    \r\n            viewed: true\r\n        }\r\n        const response = await fetch(`http://127.0.0.1:3000/dialog/${id}`, {\r\n          method: 'PATCH',\r\n          headers: {\r\n            'Content-Type': 'application/json'\r\n          },\r\n          body: JSON.stringify(data)\r\n        });\r\n        console.log(\"BATAFACK\")\r\n}\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/puTviewed.js?");

/***/ }),

/***/ "./src/js/dialog/randomText.js":
/*!*************************************!*\
  !*** ./src/js/dialog/randomText.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomText)\n/* harmony export */ });\n/* harmony import */ var _addTextUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTextUser */ \"./src/js/dialog/addTextUser.js\");\n/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words */ \"./src/js/dialog/words.js\");\n/* harmony import */ var _addDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDialog */ \"./src/js/dialog/addDialog.js\");\n/* harmony import */ var _addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addDialogServ/addDialogServ */ \"./src/js/dialog/addDialogServ/addDialogServ.js\");\n\r\n\r\n\r\n\r\nfunction randomText(id, thisUser){\r\n    //let randomize = word[Math.floor( Math.random() * word.length )];\r\n    let randomLen = Math.floor(Math.random() * 15) + 1;\r\n    let text = [...Array(randomLen)].map(() => getRandomWord()).join(' ')\r\n    let user = thisUser\r\n    let now = new Date();\r\n    let time = `${now.getHours()}:${now.getMinutes()}`\r\n    if(user == true){\r\n        (0,_addTextUser__WEBPACK_IMPORTED_MODULE_0__.addText)(user, text)\r\n    }else{\r\n        (0,_addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(time, text, id, user, \"useGet\")\r\n        \r\n    }\r\n}\r\nfunction getRandomWord() {\r\n    return _words__WEBPACK_IMPORTED_MODULE_1__.word[Math.floor( Math.random() * _words__WEBPACK_IMPORTED_MODULE_1__.word.length )];\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/randomText.js?");

/***/ }),

/***/ "./src/js/dialog/setPosition.js":
/*!**************************************!*\
  !*** ./src/js/dialog/setPosition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setPosition)\n/* harmony export */ });\nfunction setPosition(position){\r\n    if(setPosition.stop){\r\n        return\r\n    }else{\r\n        console.log(\"GGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAA\")\r\n        //el.scrollIntoView(true)\r\n        document.querySelector('.main-text').scrollTop = position\r\n        setPosition.stop = true\r\n    }\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/setPosition.js?");

/***/ }),

/***/ "./src/js/dialog/showSendIcon.js":
/*!***************************************!*\
  !*** ./src/js/dialog/showSendIcon.js ***!
  \***************************************/
/***/ (() => {

eval("function showSendIcon(){\r\n    document.querySelector('#input-text').addEventListener('input', e=> {\r\n        if(document.querySelector('#input-text').value.length != 0){\r\n            //console.log(\"))\")\r\n            document.querySelector('.img-input-micro').src = \"./open.png\";\r\n            document.querySelector('#input-text').src = \"./open.png\";\r\n        }else{\r\n            document.querySelector('.img-input-micro').src = \"./cil_mic.svg\";\r\n        }\r\n    })\r\n}showSendIcon()\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/showSendIcon.js?");

/***/ }),

/***/ "./src/js/dialog/stopDialog.js":
/*!*************************************!*\
  !*** ./src/js/dialog/stopDialog.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ stopDialog)\n/* harmony export */ });\n/* harmony import */ var _main_innerMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/innerMain */ \"./src/js/main/innerMain.js\");\n/* harmony import */ var _dialogAvailable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogAvailable */ \"./src/js/dialog/dialogAvailable.js\");\n\r\n\r\n\r\nfunction stopDialog(){\r\n    document.querySelector('.change-check').addEventListener('click', e=>{\r\n        let id = _main_innerMain__WEBPACK_IMPORTED_MODULE_0__.funcIdAndAvailable.Id\r\n        console.log('1')\r\n        if(document.querySelector('.change-check').checked == false){\r\n            clearInterval(_dialogAvailable__WEBPACK_IMPORTED_MODULE_1__.codInterval.Cod)\r\n            patchAvailable(id, false)\r\n        }else{\r\n            patchAvailable(id, true)\r\n            ;(0,_dialogAvailable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id)\r\n        } \r\n    })\r\n}stopDialog()\r\nasync function patchAvailable(id, argTruOrFalse){\r\n    let data = {    \r\n        dialogueAvailable: argTruOrFalse == true? true: false\r\n    }\r\n    const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {\r\n      method: 'PATCH',\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      },\r\n      body: JSON.stringify(data)\r\n    });\r\n    if(argTruOrFalse == true){\r\n        console.log(id)\r\n        ;(0,_dialogAvailable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id)\r\n    }\r\n    \r\n    \r\n    \r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/stopDialog.js?");

/***/ }),

/***/ "./src/js/dialog/thereIsScroll.js":
/*!****************************************!*\
  !*** ./src/js/dialog/thereIsScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thereIsScroll)\n/* harmony export */ });\nfunction thereIsScroll(){\r\n    let mein = document.querySelector('.main-text')\r\n    if(mein.scrollHeight > (mein.scrollTop + mein.clientHeight)){\r\n        //console.log(\"999\")\r\n        document.querySelector('.down-button').style.display = \"block\"\r\n    }else{\r\n        document.querySelector('.down-button').style.display = \"none\"\r\n    }\r\n    document.querySelector('.main-text').addEventListener(\"scroll\", function() {\r\n        console.log(document.querySelector('.main-text').scrollTop)\r\n/*           console.clear()\r\n          console.log(\r\n            \r\n            this.scrollHeight < (this.scrollTop + this.clientHeight + 10),\r\n            this.scrollHeight,this.scrollTop, this.clientHeight\r\n        )   */\r\n         if(this.scrollHeight < (this.scrollTop + this.clientHeight + 10)){\r\n            console.log(\"fafaf\")\r\n            document.querySelector('.down-button').style.display = \"none\"\r\n        }else{\r\n            document.querySelector('.down-button').style.display = \"block\"\r\n        }//document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\r\n    })\r\n}//circle-arrow-down-solid.svg\r\n/* if(scrolDownOrNo == true){\r\n    let mein = document.querySelector('.main-text')\r\n    document.querySelector('.main-text').scrollTo(scrollY, mein.scrollHeight - mein.clientHeight);\r\n} */\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/thereIsScroll.js?");

/***/ }),

/***/ "./src/js/dialog/thisPosition.js":
/*!***************************************!*\
  !*** ./src/js/dialog/thisPosition.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ thisPosition)\n/* harmony export */ });\n/* harmony import */ var _main_innerMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/innerMain */ \"./src/js/main/innerMain.js\");\n\r\nasync function thisPosition(id, position=0){\r\n    let data = {    \r\n        savePosition: position\r\n    }\r\n    const response = await fetch(`http://127.0.0.1:3000/users/${id}`, {\r\n      method: 'PATCH',\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      },\r\n      body: JSON.stringify(data)\r\n    });\r\n    console.log(id)\r\n    \r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/thisPosition.js?");

/***/ }),

/***/ "./src/js/dialog/unreadCounter.js":
/*!****************************************!*\
  !*** ./src/js/dialog/unreadCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unreadCounter)\n/* harmony export */ });\nfunction unreadCounter(){\r\n    console.log(unreadCounter.stop)\r\n    if(unreadCounter.count){\r\n        return\r\n\r\n    }else{\r\n        unreadCounter.count = Number(1)\r\n    }\r\n}\r\n    \n\n//# sourceURL=webpack://chatapp/./src/js/dialog/unreadCounter.js?");

/***/ }),

/***/ "./src/js/dialog/words.js":
/*!********************************!*\
  !*** ./src/js/dialog/words.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   word: () => (/* binding */ word)\n/* harmony export */ });\nconst word = [\r\n    \"Got\",\r\n    \"ability\",\r\n    \"shop\",\r\n    \"recall\",\r\n    \"fruit\",\r\n    \"easy\",\r\n    \"dirty\",\r\n    \"giant\",\r\n    \"shaking\",\r\n    \"ground\",\r\n    \"weather\",\r\n    \"lesson\",\r\n    \"almost\",\r\n    \"square\",\r\n    \"forward\",\r\n    \"bend\",\r\n    \"cold\",\r\n    \"broken\",\r\n    \"distant\",\r\n    \"adjective.\"\r\n]\n\n//# sourceURL=webpack://chatapp/./src/js/dialog/words.js?");

/***/ }),

/***/ "./src/js/head/innerHeader.js":
/*!************************************!*\
  !*** ./src/js/head/innerHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ innerHeader)\n/* harmony export */ });\nfunction innerHeader(id, name, img){\r\n         let add = `<div data-id='${id}' id=\"men-container-top${id}\" class=\"men-container-top\"></div>`\r\n        document.querySelector('.head-user-conainer').insertAdjacentHTML('beforeend', add)\r\n         add = `<div id=\"div-img-top${id}\" class=\"div-img-top\"></div>`\r\n        add += `<div class=\"name-status-div-top\" id=\"name-status-div-top${id}\"></div>`\r\n        document.querySelector(`#men-container-top${id}`).insertAdjacentHTML('beforeend', add)\r\n        add = `<p class=\"name-men-top\" id=\"name-men-top${id}\">${name}</p>`\r\n        document.querySelector(`#name-status-div-top${id}`).insertAdjacentHTML('beforeend', add)\r\n        document.querySelector(`#div-img-top${id}`).style.background = `url(${img}) no-repeat`\r\n        document.querySelector(`#div-img-top${id}`).style.backgroundSize = \"cover\" \r\n        //console.log(\"tot\", id)\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/head/innerHeader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_startApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/startApp */ \"./src/js/main/startApp.js\");\n/* harmony import */ var _nav_addNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/addNavigation */ \"./src/js/nav/addNavigation.js\");\n/* harmony import */ var _nav_innerNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/innerNavigation */ \"./src/js/nav/innerNavigation.js\");\n/* harmony import */ var _nav_clickNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/clickNav */ \"./src/js/nav/clickNav.js\");\n/* harmony import */ var _main_innerMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/innerMain */ \"./src/js/main/innerMain.js\");\n/* harmony import */ var _head_innerHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./head/innerHeader */ \"./src/js/head/innerHeader.js\");\n/* harmony import */ var _dialog_addDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/addDialog */ \"./src/js/dialog/addDialog.js\");\n/* harmony import */ var _main_addTextInMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/addTextInMain */ \"./src/js/main/addTextInMain.js\");\n/* harmony import */ var _main_addTextInMain__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_main_addTextInMain__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dialog_showSendIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/showSendIcon */ \"./src/js/dialog/showSendIcon.js\");\n/* harmony import */ var _dialog_showSendIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dialog_showSendIcon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _dialog_addTextUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/addTextUser */ \"./src/js/dialog/addTextUser.js\");\n/* harmony import */ var _dialog_addDialogServ_addDialogServ__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/addDialogServ/addDialogServ */ \"./src/js/dialog/addDialogServ/addDialogServ.js\");\n/* harmony import */ var _dialog_innerTextUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/innerTextUser */ \"./src/js/dialog/innerTextUser.js\");\n/* harmony import */ var _dialog_thereIsScroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/thereIsScroll */ \"./src/js/dialog/thereIsScroll.js\");\n/* harmony import */ var _dialog_downButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialog/downButton */ \"./src/js/dialog/downButton.js\");\n/* harmony import */ var _dialog_observer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/observer */ \"./src/js/dialog/observer.js\");\n/* harmony import */ var _dialog_unreadCounter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/unreadCounter */ \"./src/js/dialog/unreadCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/main/addTextInMain.js":
/*!**************************************!*\
  !*** ./src/js/main/addTextInMain.js ***!
  \**************************************/
/***/ (() => {

eval("/* document.querySelector('.main-text').addEventListener('click', e =>{\r\n    let add = \"<div>add</div>\"\r\n    document.querySelector('.main-text').insertAdjacentHTML('beforeend', add)\r\n})\r\n */\n\n//# sourceURL=webpack://chatapp/./src/js/main/addTextInMain.js?");

/***/ }),

/***/ "./src/js/main/innerMain.js":
/*!**********************************!*\
  !*** ./src/js/main/innerMain.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ innerMain),\n/* harmony export */   funcIdAndAvailable: () => (/* binding */ funcIdAndAvailable)\n/* harmony export */ });\n/* harmony import */ var _head_innerHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head/innerHeader */ \"./src/js/head/innerHeader.js\");\n/* harmony import */ var _dialog_addDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/addDialog */ \"./src/js/dialog/addDialog.js\");\n/* harmony import */ var _dialog_addTextUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/addTextUser */ \"./src/js/dialog/addTextUser.js\");\n/* harmony import */ var _dialog_stopDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/stopDialog */ \"./src/js/dialog/stopDialog.js\");\n/* harmony import */ var _dialog_setPosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/setPosition */ \"./src/js/dialog/setPosition.js\");\n\r\n\r\n\r\n\r\n\r\nasync function innerMain(id){\r\n    const res = await fetch(`http://127.0.0.1:3000/users/${id}`);\r\n    const rsolt = await res.json();\r\n    document.querySelector('.head-user-conainer').innerHTML = \"\"\r\n    ;(0,_head_innerHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rsolt.id, rsolt.name, rsolt.img)\r\n    ;(0,_dialog_addDialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rsolt.id)\r\n    \r\n    ;(0,_dialog_addTextUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    funcIdAndAvailable(rsolt.id, rsolt.dialogueAvailable)\r\n}\r\nfunction funcIdAndAvailable(x, y){\r\n    funcIdAndAvailable.Id = x\r\n    funcIdAndAvailable.Available = y\r\n}\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/main/innerMain.js?");

/***/ }),

/***/ "./src/js/main/startApp.js":
/*!*********************************!*\
  !*** ./src/js/main/startApp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_addNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/addNavigation */ \"./src/js/nav/addNavigation.js\");\n\r\nfunction starApp(){\r\n    (0,_nav_addNavigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}starApp()\n\n//# sourceURL=webpack://chatapp/./src/js/main/startApp.js?");

/***/ }),

/***/ "./src/js/nav/addNavigation.js":
/*!*************************************!*\
  !*** ./src/js/nav/addNavigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNavigation)\n/* harmony export */ });\n/* harmony import */ var _clickNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickNav */ \"./src/js/nav/clickNav.js\");\n/* harmony import */ var _innerNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerNavigation */ \"./src/js/nav/innerNavigation.js\");\n\r\n\r\nasync function addNavigation(){\r\n    const res = await fetch(`http://127.0.0.1:3000/users`);\r\n    const rsolt = await res.json();\r\n\r\n    for(let key in rsolt){\r\n        //console.log(rsolt[key].name)\r\n        (0,_innerNavigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rsolt[key].id, rsolt[key].name, rsolt[key].img, rsolt[key].textStatus, rsolt[key].status)\r\n/*         if(rsolt[key].dialogueAvailable == true){\r\n            randomDialog()\r\n        } */\r\n \r\n    }\r\n    (0,_clickNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\n\n//# sourceURL=webpack://chatapp/./src/js/nav/addNavigation.js?");

/***/ }),

/***/ "./src/js/nav/clickNav.js":
/*!********************************!*\
  !*** ./src/js/nav/clickNav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickNav)\n/* harmony export */ });\n/* harmony import */ var _main_innerMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/innerMain */ \"./src/js/main/innerMain.js\");\n/* harmony import */ var _dialog_setPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/setPosition */ \"./src/js/dialog/setPosition.js\");\n/* harmony import */ var _dialog_dialogAvailable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/dialogAvailable */ \"./src/js/dialog/dialogAvailable.js\");\n/* harmony import */ var _dialog_thisPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/thisPosition */ \"./src/js/dialog/thisPosition.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction clickNav(){\r\n    const nodeList = document.querySelectorAll(\".men-container\")\r\n    for (let i = 0; i < nodeList.length; i++) {\r\n        nodeList[i].addEventListener('click', e => {\r\n            let sendID = _main_innerMain__WEBPACK_IMPORTED_MODULE_0__.funcIdAndAvailable.Id\r\n            ;(0,_dialog_thisPosition__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sendID, Number.parseInt(document.querySelector('.main-text').scrollTop))\r\n            \r\n                \r\n            \r\n            _dialog_setPosition__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stop = false\r\n            document.querySelector('.head-conainer-right').style.display = \"flex\"\r\n            document.querySelector('.inpu-file-div').style.display = \"block\"\r\n            document.querySelector('.input-text-div').style.display = \"block\"\r\n            document.querySelector('.inpu-micro-div').style.display = \"block\"\r\n            document.querySelector('.user-input-main').innerHTML = \"\"\r\n            document.querySelector('.count-button').innerText = 0\r\n            document.querySelector('.count-button').style.display = \"none\"\r\n            clearInterval(_dialog_dialogAvailable__WEBPACK_IMPORTED_MODULE_2__.codInterval.Cod)\r\n            ;(0,_dialog_dialogAvailable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nodeList[i].dataset.id)\r\n            ;(0,_main_innerMain__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nodeList[i].dataset.id)\r\n            clinNav(nodeList)\r\n            nodeList[i].style.backgroundColor = '#E8ECF3'\r\n            \r\n        })\r\n\r\n    }\r\n    \r\n}\r\nfunction clinNav(nodeList){\r\n    for (let i = 0; i < nodeList.length; i++) {\r\n        nodeList[i].style.backgroundColor = 'white'\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://chatapp/./src/js/nav/clickNav.js?");

/***/ }),

/***/ "./src/js/nav/innerNavigation.js":
/*!***************************************!*\
  !*** ./src/js/nav/innerNavigation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ innerNavigation)\n/* harmony export */ });\nfunction innerNavigation(id, name, img, textStatus, statusIMG){\r\n    //let newStr = textStatus.slice(1,5)\r\n    let add = `<div data-id='${id}' id=\"men-container${id}\" class=\"men-container\"></div>`\r\n    document.querySelector('nav').insertAdjacentHTML('beforeend', add)\r\n    add = `<div id=\"div-img${id}\" class=\"div-img\"></div>`\r\n    //add = `<img class=\"icon-men\" src=\"${img}\" alt=\"${name}\">`\r\n    add += `<div class=\"name-status-div\" id=\"name-status-div${id}\"></div>`\r\n    document.querySelector(`#men-container${id}`).insertAdjacentHTML('beforeend', add)\r\n    add = `<p class=\"name-men\" id=\"name-men${id}\">${name}</p>`\r\n    add += `<p class=\"text-status\" id=\"text-status${id}\">${textStatus}</p>`\r\n    document.querySelector(`#name-status-div${id}`).insertAdjacentHTML('beforeend', add)\r\n    //add =  `<img src=\"${img}\" calss=\"img-men\" id=\"img-men${id}\"></img>`\r\n    document.querySelector(`#div-img${id}`).style.background = `url(${img}) no-repeat`\r\n    document.querySelector(`#div-img${id}`).style.backgroundSize = \"cover\"\r\n    document.querySelector(`#div-img${id}`).insertAdjacentHTML('beforeend', statusIMG)\r\n    \r\n}       \n\n//# sourceURL=webpack://chatapp/./src/js/nav/innerNavigation.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/background.svg */ \"./src/assets/background.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\nbody {\n  font-size: 24px;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  gap: 0.5px;\n  background-color: gray;\n  color: rgba(255, 255, 255, 0.549);\n  grid-template-areas: \"nav     head    head\" \"nav     main    main\" \"nav     foot    foot\";\n  grid-template-rows: 7.6vh 84.25vh 8vh;\n  grid-template-columns: 34% 1fr;\n}\n\n.head-user {\n  grid-area: head;\n  background: #FFF;\n}\n\n.text-input-div {\n  grid-area: foot;\n  background: #FFF;\n}\n\n.text-input-div > * {\n  display: none;\n}\n\n.main-text {\n  grid-area: main;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) lightgray 50%;\n  overflow-y: scroll; /* прокрутка по вертикали */\n  color: black;\n  position: relative;\n}\n\n.main-text::-webkit-scrollbar {\n  width: 0;\n}\n\nnav {\n  grid-area: nav;\n  background: #FFF;\n}\n\n.name-men {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.men-container {\n  display: flex;\n  align-items: center;\n  height: 8.24%;\n  cursor: pointer;\n}\n\n.div-img {\n  margin-left: 1.8%;\n  border-radius: 8px;\n  min-width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.div-img * {\n  position: absolute;\n  max-width: 15px;\n  max-height: 15px;\n  top: 30px;\n  left: 30px;\n}\n\n.text-status {\n  margin: 0px;\n  padding: 0px;\n  color: #000;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.name-status-div {\n  margin-left: 1.28%;\n}\n\n.text-input-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#input-file {\n  display: none;\n}\n\n.img-input-file {\n  width: 25px;\n  height: 25px;\n}\n\n.input-text-div {\n  margin-top: 10px;\n  width: 80%;\n}\n\n#input-text {\n  padding-left: 10px;\n  width: 95%;\n  height: 30px;\n  font-size: 15px;\n  flex-shrink: 0;\n  border-radius: 35px;\n  border: 1px solid rgba(0, 0, 0, 0.11);\n  background: #FFF;\n  resize: none;\n  vertical-align: center;\n  line-height: 1;\n  padding-top: 6px;\n}\n\n#input-text::-webkit-scrollbar {\n  width: 0;\n}\n\n.input-text-div::-webkit-scrollbar {\n  width: 0;\n}\n\n#input-micro {\n  margin-right: 5%;\n  display: none;\n}\n\n.img-input-micro {\n  width: 25px;\n}\n\n.head-user {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.head-user-conainer {\n  margin-left: 1%;\n  color: black;\n  min-width: 35%;\n  border-radius: 12px;\n  background: #E8ECF3;\n}\n\n.men-container-top {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-left: 1%;\n}\n\n.div-img-top {\n  margin-left: 5%;\n  border-radius: 8px;\n  min-width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.name-status-div-top {\n  margin-left: 5%;\n  color: #000;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.checkbox-ios {\n  display: inline-block;\n  line-height: 28px;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n}\n\n.checkbox-ios .checkbox-ios-switch {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 28px;\n  top: 6px;\n  height: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 25%/50%;\n  vertical-align: top;\n  background: #eee;\n  transition: 0.2s;\n}\n\n.checkbox-ios .checkbox-ios-switch:before {\n  content: \"\";\n  position: absolute;\n  top: 0.5px;\n  left: 1px;\n  display: inline-block;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n  transition: 0.15s;\n}\n\n.checkbox-ios input[type=checkbox] {\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.checkbox-ios input[type=checkbox]:not(:disabled):active + .checkbox-ios-switch:before {\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n}\n\n.checkbox-ios input[type=checkbox]:checked + .checkbox-ios-switch {\n  background: limegreen;\n}\n\n.checkbox-ios input[type=checkbox]:checked + .checkbox-ios-switch:before {\n  transform: translateX(14px);\n}\n\n/* Hover */\n.checkbox-ios input[type=checkbox]:not(:disabled) + .checkbox-ios-switch {\n  cursor: pointer;\n  border-color: rgba(0, 0, 0, 0.3);\n}\n\n/* Disabled */\n.checkbox-ios input[type=checkbox]:disabled + .checkbox-ios-switch {\n  filter: grayscale(70%);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.checkbox-ios input[type=checkbox]:disabled + .checkbox-ios-switch:before {\n  background: #eee;\n}\n\n/* Focus */\n.checkbox-ios.focused .checkbox-ios-switch:before {\n  box-shadow: inset 0px 0px 4px #ff5623;\n}\n\n.head-conainer-right {\n  display: none;\n  align-items: center;\n  margin-right: 5%;\n}\n\n.status-text-div {\n  margin-left: 5px;\n  color: #1CB355;\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.img-right {\n  margin-left: 5px;\n  max-width: 30px;\n}\n\n/* .textarea-main{\n    display: inline-block;\n    border: 1px solid #000;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    padding: 20px;\n    border: none;\n    background: url(../../src/assets/background.svg) lightgray 50% ;\n} \n.textarea-main:focus, input:focus\n{\n  outline: none;\n} */\n.user-text {\n  display: flex;\n  justify-content: space-between;\n  margin-left: auto;\n  word-break: break-word;\n  max-width: 50%;\n  margin-right: 1%;\n  min-height: 53px;\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border-radius: 30px 30px 0px 30px;\n  background: rgba(180, 228, 255, 0.7);\n  backdrop-filter: blur(38px);\n  line-height: 1;\n  font-size: 14px;\n  padding-left: 14px;\n  padding-top: 15px;\n  padding-bottom: 13px;\n}\n\n.user-time {\n  margin-top: auto;\n  min-width: 30px;\n  margin-right: 5px;\n  color: rgba(0, 0, 0, 0.51);\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.other-user-text {\n  display: flex;\n  justify-content: space-between;\n  word-break: break-word;\n  max-width: 50%;\n  margin-left: 1%;\n  min-height: 53px;\n  margin-top: 19px;\n  margin-bottom: 19px;\n  border-radius: 30px 30px 0px 30px;\n  background: rgba(180, 228, 255, 0.7);\n  backdrop-filter: blur(38px);\n  line-height: 1;\n  font-size: 14px;\n  padding-left: 14px;\n  padding-top: 15px;\n  padding-bottom: 13px;\n}\n\n.other-user-time {\n  margin-top: auto;\n  min-width: 30px;\n  margin-right: 5px;\n  color: rgba(0, 0, 0, 0.51);\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.down-button {\n  position: fixed;\n  bottom: 60px; /* Положение от нижнего края */\n  right: 15px; /* Положение от правого края */\n  z-index: 999;\n  cursor: pointer;\n  display: none;\n}\n\n.count-button {\n  display: none;\n  position: fixed;\n  margin-left: 15px;\n  bottom: 60px;\n  min-width: 35px;\n  z-index: 99;\n  background-color: black;\n  border-radius: 50%;\n  text-align: center;\n  color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://chatapp/./src/scss/main.scss?../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://chatapp/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://chatapp/../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://chatapp/../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://chatapp/./src/scss/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://chatapp/../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/background.svg":
/*!***********************************!*\
  !*** ./src/assets/background.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"background.svg\";\n\n//# sourceURL=webpack://chatapp/./src/assets/background.svg?");

/***/ }),

/***/ "./src/assets/cil_mic.svg":
/*!********************************!*\
  !*** ./src/assets/cil_mic.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cil_mic.svg\";\n\n//# sourceURL=webpack://chatapp/./src/assets/cil_mic.svg?");

/***/ }),

/***/ "./src/assets/circle-arrow-down-solid.svg":
/*!************************************************!*\
  !*** ./src/assets/circle-arrow-down-solid.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"circle-arrow-down-solid.svg\";\n\n//# sourceURL=webpack://chatapp/./src/assets/circle-arrow-down-solid.svg?");

/***/ }),

/***/ "./src/assets/img-add-file.svg":
/*!*************************************!*\
  !*** ./src/assets/img-add-file.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img-add-file.svg\";\n\n//# sourceURL=webpack://chatapp/./src/assets/img-add-file.svg?");

/***/ }),

/***/ "./src/assets/open.png":
/*!*****************************!*\
  !*** ./src/assets/open.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"open.png\";\n\n//# sourceURL=webpack://chatapp/./src/assets/open.png?");

/***/ }),

/***/ "./src/assets/trimg.jpg":
/*!******************************!*\
  !*** ./src/assets/trimg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"trimg.jpg\";\n\n//# sourceURL=webpack://chatapp/./src/assets/trimg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;