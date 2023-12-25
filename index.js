// TODO import images in CSS
// TODO Add Images as backgrounds in CSS

// TODO Create Var

var tom1 = document.querySelector('.w');
var tom2 = document.querySelector('.a');
var tom3 = document.querySelector('.s');
var tom4 = document.querySelector('.d');
var crash = document.querySelector('.j');
var kick = document.querySelector('.k');
var snare = document.querySelector('.l');

const drumsArray = [tom1, tom2, tom3, tom4, crash, kick, snare];

// TODO Add Imgs

let imgs = {
	w: 'tom1.png',
	a: 'tom2.png',
	s: 'tom3.png',
	d: 'tom4.png',
	j: 'crash.png',
	k: 'kick.png',
	l: 'snare.png',
};

drumsArray.forEach((element) => {
	// TODO Add Imgs
	// element.style.backgroundImage = "url('./images/" + imgs[element.textContent] + "')";
	// TODO Add event listeners when click over the buttons
	element.addEventListener('click', () => {
		console.log(element.textContent);
		setDrum(element);
		pressed(element);
	});

	// TODO Add event listeners when press certain sticks
	document.addEventListener('keydown', (item) => {
		if (element.textContent == item.key) {
			console.log(item.key);
			setDrum(element);
			pressed(element);
		}
	});
});

// TODO Add Sounds

let audios = {
	w: 'tom-1.mp3',
	a: 'tom-2.mp3',
	s: 'tom-3.mp3',
	d: 'tom-4.mp3',
	j: 'crash.mp3',
	k: 'kick-bass.mp3',
	l: 'snare.mp3',
};

function setDrum(item) {
	let audio = new Audio();
	audio.setAttribute('src', './sounds/' + audios[item.textContent]);
	audio.play();
}

// TODO: Whenk gets Clicked o Pressed, active the pressed Class

function pressed(item) {
	item.classList.add('pressed');

	setTimeout(() => {
		item.classList.remove('pressed');
	}, 50);
}
