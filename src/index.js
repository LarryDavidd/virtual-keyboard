let en = [
  '`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '+=', 'backspace', 'br',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[{', ']}', '\|', 'del', 'br',
  'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', '"', 'enter', 'br',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',<', '.>', '/?', 'Up^', 'shift', 'br',
  'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', 'Left', 'Down', 'Right'
]



const createTextarea = () => {
  let textarea = document.createElement("textarea");
  textarea.classList.add('input-field');
  return textarea;
}

const createKeys = (key) => {
  const newKey = document.createElement("button");

  if (key == 'br') {
    let br = document.createElement("br");
    return(br);
  } else if (key.length < 2) {
    newKey.classList.add(`keyboard__button`);
    newKey.id = (key);
    newKey.innerHTML = `<p class="alt-data"></p><p class="main-data">${key[0]}</p>`;
  } else if (key.length == 2) {
    newKey.classList.add(`keyboard__button`);
    newKey.id = (key);
    newKey.innerHTML = `<p class="alt-data">${key[1]}</p><p class="main-data">${key[0]}</p>`;
  } else {
    newKey.classList.add(`keyboard__${key}`);
    newKey.id = (key);
    newKey.innerHTML = `<p class="alt-data"></p><p class="main-data">${key}</p>`;
  }

  return(newKey);
}



const createKeyboard = () => {

  const keyboard__buttons = document.createElement("div"); 
  keyboard__buttons.classList.add("keyboard__buttons");
  keyboard__buttons.addEventListener("click", (e) => {
    clickButton(e);
  });


  en.forEach(element => {
    keyboard__buttons.appendChild(createKeys(element));
  });

  const keyboard = document.createElement("div"); 
  keyboard.classList.add("keyboard");

  keyboard.appendChild(keyboard__buttons);
  
  let textarea = createTextarea();
  console.log(textarea);

  const body = document.querySelector('body');
  body.appendChild(textarea);
  body.appendChild(keyboard);

}


const clickButton = (e) => {
  let textarea = document.querySelector('textarea');
  if (e.target.classList == 'keyboard__button') {
    console.log(e.target.id);
    textarea.value += e.target.id[0];
    chars = textarea.value.split('');
  }
  // } else {
  //   console.log(e.target.id)
  //   textarea.value += e.target.closest('BUTTON').id[0];
  //   chars = textarea.value.split('');
  // }
}

window.addEventListener('keydown', (e) => {
  console.log(e);
});

let chars = [];

createKeyboard();

