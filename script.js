let input = document.querySelector('input');
let div = document.querySelector('div');
let arr = 'qwertyuiopasdfghjklzxcvbnm1234567890'.split('');
let caps = false;

for (let char of arr) {
    let p = document.createElement('p')
    p.textContent = char;
    p.addEventListener('click', function() {
        if (caps) {
            input.value += p.textContent.toUpperCase()
        }
        else {
            input.value += p.textContent
        }
    })

    div.appendChild(p)
}

let backspace = document.createElement('p');
backspace.textContent = 'Backspace';
backspace.onclick = () => {
    input.value = input.value.slice(0, input.value.length - 1);
}

div.appendChild(backspace);


let capsLock = document.createElement('p');
capsLock.textContent = 'Caps Lock';
capsLock.onclick = () => {
    if (caps) {
        caps = false;
    }
    else {
        caps = true;
    }
}

div.appendChild(capsLock);