/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const en = ['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '+=', 'backspace', 'br', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[{', ']}', '\\|', 'del', 'br', 'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', '"\'', 'enter', 'br', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',<', '.>', '/?', 'Up^', 'shift', 'br', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', 'Left', 'Down', 'Right'];
const ru = ['ё', '1!', '2"', '3№', '4;', '5%', '6:', '7?', '8*', '9(', '0)', '-_', '+=', 'backspace', 'br', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\|', 'del', 'br', 'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'br', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.,', 'Up^', 'shift', 'br', 'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', 'Left', 'Down', 'Right'];
const createTextarea = () => {
  let textarea = document.createElement("textarea");
  textarea.classList.add('input-field');
  return textarea;
};
const createKeys = key => {
  const newKey = document.createElement("button");
  if (key == 'br') {
    let br = document.createElement("br");
    return br;
  } else if (key.length < 2) {
    newKey.classList.add('keyboard__button');
    newKey.id = key;
    newKey.innerHTML = `<p class="alt-data"></p><p class="main-data">${key[0]}</p>`;
  } else if (key.length == 2) {
    newKey.classList.add('keyboard__button');
    newKey.id = key;
    newKey.innerHTML = `<p class="alt-data">${key[1]}</p><p class="main-data">${key[0]}</p>`;
  } else {
    newKey.classList.add(`keyboard__${key}`);
    newKey.id = key;
    newKey.innerHTML = `<p class="alt-data"></p><p class="main-data">${key}</p>`;
  }
  return newKey;
};
const createKeyboard = () => {
  const keyboard__buttons = document.createElement("div");
  keyboard__buttons.classList.add("keyboard__buttons");
  keyboard__buttons.addEventListener("click", e => {
    clickButton(e);
  });
  const keyboard__buttons_ru = document.createElement("div");
  keyboard__buttons_ru.classList.add("keyboard__buttons");
  keyboard__buttons_ru.addEventListener("click", e => {
    clickButton(e);
  });
  en.forEach(element => {
    keyboard__buttons.appendChild(createKeys(element));
  });
  ru.forEach(element => {
    keyboard__buttons_ru.appendChild(createKeys(element));
  });
  const keyboard = document.createElement("div");
  const keyboard_ru = document.createElement("div");

  // let lang = localStorage.getItem('lang');

  if (lang == 'ru') {
    keyboard.classList.add("keyboard", 'hidden');
    keyboard_ru.classList.add("keyboard", "ru");
  } else {
    keyboard.classList.add("keyboard");
    keyboard_ru.classList.add("keyboard", "ru", 'hidden');
  }
  keyboard.appendChild(keyboard__buttons);
  keyboard_ru.appendChild(keyboard__buttons_ru);
  let textarea = createTextarea();
  console.log(textarea);
  const body = document.querySelector('body');
  body.appendChild(textarea);
  body.appendChild(keyboard);
  body.appendChild(keyboard_ru);
};
const clickButton = e => {
  let textarea = document.querySelector('textarea');
  if (e.target.classList == 'keyboard__button') {
    if (isCaps) {
      if (e.target.id.length < 2) {
        console.log(e.target.id);
        textarea.value += e.target.id[0].toUpperCase();
        chars = textarea.value.split('');
      } else {
        console.log(e.target.id);
        textarea.value += e.target.id[1];
        chars = textarea.value.split('');
      }
    } else {
      console.log(e.target.id);
      textarea.value += e.target.id[0];
      chars = textarea.value.split('');
    }
  } else if (e.target.closest('BUTTON').classList == 'keyboard__button') {
    if (isCaps) {
      if (e.target.closest('BUTTON').id.length < 2) {
        console.log(e.target.closest('BUTTON').id);
        textarea.value += e.target.closest('BUTTON').id[0].toUpperCase();
        chars = textarea.value.split('');
      } else {
        console.log(e.target.closest('BUTTON').id);
        textarea.value += e.target.closest('BUTTON').id[1];
        chars = textarea.value.split('');
      }
    } else {
      console.log(e.target.closest('BUTTON').id);
      textarea.value += e.target.closest('BUTTON').id[0];
      chars = textarea.value.split('');
    }
    // console.log(e.target.id)
    // textarea.value += e.target.closest('BUTTON').id[0];
    // chars = textarea.value.split('');
  } else if (e.target.closest('BUTTON').classList == 'keyboard__space') {
    console.log(e.target.id);
    chars.push(' ');
    textarea.value = chars.join('');
  } else if (e.target.closest('BUTTON').classList == 'keyboard__backspace') {
    chars.pop();
    textarea.value = chars.join('');
  } else if (e.target.closest('BUTTON').classList == 'keyboard__caps') {
    isCaps = !isCaps;
    console.log(isCaps);
  }
};
let countLang = 0;
window.addEventListener('keydown', e => {
  console.log(e.key);
  chars.push(' ');
  if (e.key == 'Shift') countLang++;
  if (e.key == 'Alt') countLang++;
  console.log(countLang);
  if (countLang == 2) {
    if (lang == 'ru') {
      let keyboard = document.querySelectorAll("div");
      console.log(lang);
      keyboard[0].classList.remove('hidden');
      // let keyboard_ru = document.querySelector("keyboard-ru");
      keyboard[2].classList.add('hidden');
      localStorage.removeItem('lang');
      localStorage.setItem('lang', 'en');
      lang = "en";
    } else {
      let keyboard = document.querySelectorAll("div");
      console.log(lang);
      keyboard[0].classList.add('hidden');
      // let keyboard_ru = document.querySelector("keyboard-ru");
      keyboard[2].classList.remove('hidden');
      localStorage.removeItem('lang');
      localStorage.setItem('lang', 'ru');
      lang = 'ru';
    }
  }
});
window.addEventListener('keyup', e => {
  console.log(e);
  if (e.key == 'Shift') countLang--;
  if (e.key == 'Alt') countLang--;
});

// localStorage.setItem('length', 'en');
let lang = localStorage.getItem('lang');
let isCaps = false;
let chars = [];
console.log(lang);
createKeyboard();
const anime = document.createElement("p");
anime.className = "inf";
document.body.append(anime);
anime.innerHTML = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: shift + alt";
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map