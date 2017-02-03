window.onload = function() {
	window.addEventListener('keydown',function (e) {
	// body...
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
	if(!audio) return; //if audio not found do nothing
	audio.currentTime = 0; //rewind the audio to start so that pressing same key multiple times works
	audio.play();
	key.classList.add("playing"); 


});

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

	function removeTransition(e){
		if(e.propertyName !== 'transform')
			return;
	}
}




// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
