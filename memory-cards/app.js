const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

// Generate cards
const getData = () => [
    { imgSrc: 'images/you.jpg', name: 'you' },
    { imgSrc: 'images/you.jpg', name: 'you' },
    { imgSrc: 'images/casaDePapel.jpg', name: 'casaDePapel' },
    { imgSrc: 'images/casaDePapel.jpg', name: 'casaDePapel' },
    { imgSrc: 'images/peakyBlinders.jpg', name: 'peakyBlinders' },
    { imgSrc: 'images/peakyBlinders.jpg', name: 'peakyBlinders' },
    { imgSrc: 'images/breakingBad.jpg', name: 'breakingBad' },
    { imgSrc: 'images/breakingBad.jpg', name: 'breakingBad' },
    { imgSrc: 'images/umbrellaAcademy.jpg', name: 'umbrellaAcademy' },
    { imgSrc: 'images/umbrellaAcademy.jpg', name: 'umbrellaAcademy' },
    { imgSrc: 'images/elite.png', name: 'elite' },
    { imgSrc: 'images/elite.png', name: 'elite' },
    { imgSrc: 'images/friends.jpg', name: 'friends' },
    { imgSrc: 'images/friends.jpg', name: 'friends' },
    { imgSrc: 'images/gameofthrones.jpg', name: 'gameofthrones' },
    { imgSrc: 'images/gameofthrones.jpg', name: 'gameofthrones' },
]

// Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

// Generate cards
const cardGenerator = () => {
    const cardData = randomize();
    // Generate HTML
    cardData.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        // Add image
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        // Add the cards to HTML
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            setTimeout(() => checkCards(e), 50);
            // checkCards(e);
        })
    })

}

// Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(clickedCard);

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') == flippedCards[1].getAttribute('name')) {
            console.log('matched');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        } else {
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });

            playerLives--;
            playerLivesCount.textContent = playerLives;

            if(playerLives === 0) {
                restart("Try again!👎🤡");
            }
        }
    }

    if(toggleCard.length === 16) {
        restart("You won!🤘🤩");
    }
}

// Restart game win/lose
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index)=> {
        cards[index].classList.remove('toggleCard');
        // Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            cards[index].setAttribute('name', item.name);
            faces[index].src = item.imgSrc;
            section.style.pointerEvents = 'all';
        }, 100);

    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text));
}

// Main Function
cardGenerator();