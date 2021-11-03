let playerX = 100,
	playerY = 100,
	playerWidth = 64,
	playerHeight = 70;

let player = document.querySelector('#player');

let coinX = 0,
	coinY = 0,
	coinWidth = 36,
	coinHeight = 36;

let coin = document.querySelector('#coin');

initialisePlayerLocation();

initialiseCoinLocation();


function keyDown(event) {

	if (event.key === 'ArrowRight') {
		playerX = playerX + 20;

		if (playerX > window.innerWidth - playerWidth) {
			playerX = window.innerWidth - playerWidth;
		}

		player.src = 'pictures/player-right.png';
	}

	if (event.key === 'ArrowLeft') {
		playerX = playerX - 20;

		if (playerX < 0) {
			playerX = 0;
		}

		player.src = 'pictures/player-left.png';
	}

	if (event.key === 'ArrowDown') {
		playerY = playerY + 20;

		if (playerY > window.innerHeight - playerHeight) {
			playerY = window.innerHeight - playerHeight;
		}

		player.src = 'pictures/player.png';
	}

	if (event.key === 'ArrowUp') {
		playerY = playerY - 20;

		if (playerY < 0) {
			playerY = 0;
		}

		player.src = 'pictures/player-up.png';
	}

	initialisePlayerLocation();
}




function initialisePlayerLocation() {
	// where the player is going to be located when the game begins
	player.style.left = playerX + 'px';
	player.style.top = playerY + 'px';
}

function initialiseCoinLocation() {
	// randon generator of coin location when the games begins
	coinX = Math.floor(Math.random() * (window.innerWidth - coinWidth));
	coinY = Math.floor(Math.random() * (window.innerHeight - coinHeight));

	coin.style.left = coinX + 'px';
	coin.style.top = coinY + 'px';
}