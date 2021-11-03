let player, playerX, playerY, playerWidth, playerHeight;
let coin,coinX, coinY, coinWidth, coinHeight;
let score, coinCount;
let coinSound, victorySound;

function onLoad() {
	player = document.querySelector('#player');
	coin = document.querySelector('#coin');
	score = document.querySelector('#score');
	coinSound = document.querySelector('#coinsound');
	victorySound = document.querySelector('#victorysound');

	coinCount = 0;

	playerWidth = player.width;
	playerHeight = player.height;

	playerX = Math.round(window.innerWidth / 2 - playerWidth / 2);
	playerY = Math.round(window.innerHeight / 2 - playerHeight / 2);

	initialisePlayerLocation();

	coinWidth = coin.width;
	coinHeight = coin.height;

	newCoin();
}

function initialisePlayerLocation() {

	player.style.left = playerX + 'px';
	player.style.top = playerY + 'px';

}

function newCoin() {
	coinX = Math.round(Math.random() * (window.innerWidth - coinWidth));
	coinY = Math.round(Math.random() * (window.innerHeight - coinHeight));
	coin.style.left = coinX + 'px';
	coin.style.top = coinY + 'px';
}

function onKeyDown(event) {
	if (event.key === 'ArrowLeft') {
		playerX -= 10;
		if (playerX < 0) {
			playerX = 0;
		}
		player.src = 'pictures/player-left.png';
	}

	if (event.key === 'ArrowRight') {
		playerX += 10;
		if (playerX + playerWidth > window.innerWidth) {
			playerX = window.innerWidth - playerWidth;
		}
		player.src = 'pictures/player-right.png';
	}

	if (event.key === 'ArrowUp') {
		playerY -= 10;
		if (playerY < 0) {
			playerY = 0;
		}
		player.src = 'pictures/player-up.png';
	}

	if (event.key === 'ArrowDown') {
		playerY += 10;
		if (playerY + playerHeight > window.innerHeight) {
			playerY = window.innerHeight - playerHeight;
		}
		player.src = 'pictures/player.png';
	}

	initialisePlayerLocation();
	coinCollision();
}

// when the player meet the coin at the same point
function coinCollision() {
	if (!(playerX + playerWidth < coinX || coinX + coinWidth < playerX || playerY + playerHeight < coinY || coinY + coinHeight < playerY)) {
		coinSound.play();
		addScore();
		newCoin();
	}
}

function addScore() {
	coinCount++;
	score.innerText = coinCount;

	if (coinCount === 5) {
		victorySound.play();
		alert('You won!');
	}
}