window.addEventListener('keydown',function (e) {
	// body...
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	if(!audio) return; //if audio not found do nothing
	audio.play();
})