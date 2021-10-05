// Dictionary
const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png",
}
let score = 0;

/**
 * Oculta vista seleccionar pick
 * Muestra vista resultado
 * Setea la imágen del pick del usuario
 * LLama a generar el pick de la máquina
 * LLama a obtener el resultado vs
 * @param {*} hand 
 */
const pickUserHand = (hand) => {
    // index -> hide the hands
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // result -> show the vs
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    // set picked user image
    document.getElementById("userPickedImage").src = handOptions[hand];
    // generate azar hand for machine
    let azhand = pickMachineHand();
    // generate result
    result(hand, azhand);
}

/**
 * Genera un pick al azar para la máquina -> Setea la imágen
 * @returns 
 */
const pickMachineHand = () => {
    let hands = ["rock", "paper", "scissors"];

    // azar machine hand
    let azhand = hands[Math.floor(Math.random() * 3)];

    // set picked machine image
    document.getElementById("machinePickedImage").src = handOptions[azhand];

    return azhand;
}

/**
 * Genera el resultado
 * @param {*} userHand 
 * @param {*} machineHand 
 */
const result = (userHand, machineHand) => {
    if (userHand == "paper" && machineHand == "scissors") {
        setDecision("HAS PERDIDO!");
        // setScore(score - 1);
    }
    if (userHand == "paper" && machineHand == "rock") {
        setDecision("HAS GANADO!");
        setScore(score + 1);
    }
    if (userHand == "paper" && machineHand == "paper") {
        setDecision("EMPATE!");
    }
    if (userHand == "rock" && machineHand == "scissors") {
        setDecision("HAS GANADO!");
        setScore(score + 1);
    }
    if (userHand == "rock" && machineHand == "paper") {
        setDecision("HAS PERDIDO!");
        // setScore(score - 1);
    }
    if (userHand == "rock" && machineHand == "rock") {
        setDecision("EMPATE!");
    }
    if (userHand == "scissors" && machineHand == "scissors") {
        setDecision("EMPATE!");
    }
    if (userHand == "scissors" && machineHand == "rock") {
        setDecision("HAS PERDIDO!");
        // setScore(score - 1);
    }
    if (userHand == "scissors" && machineHand == "paper") {
        setDecision("HAS GANADO!");
        setScore(score + 1);
    }
}

/**
 * Setea el nuevo texto
 * @param {*} decision 
 */
const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

/**
 * Setea el nuevo score
 * @param {*} new_score 
 */
const setScore = (new_score) => {
    score = new_score;
    document.querySelector(".score h1").innerText = new_score;
}


/**
 * Muestra vista seleccionar pick
 * Oculta vista resultado
 */
const newGame = () => {
    // index -> show the hands
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    // result -> hide the vs
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}
