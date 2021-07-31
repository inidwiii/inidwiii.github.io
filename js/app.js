const sentences = [
	'Hai Ekalestari,',
	'Ini aku Dwi',
	'Jangan tinggalin aku',
	'Aku sayang sama kamu',
	'',
	'Semenjak kenal sama kamu',
	'Rasanya aku makin hari',
	'Makin sayang',
	'Makin kangen',
	'Makin cinta',
	'Love you Eka',
];

const typed = new Typed('#app-typed', {
	strings: sentences,
	backDelay: 1000,
	backSpeed: 50,
	typeSpeed: 70,
	loop: true,
	loopCount: Infinity,
	showCursor: false,
});
