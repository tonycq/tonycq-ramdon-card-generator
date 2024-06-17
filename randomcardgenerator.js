window.onload = () => {
    let card = document.querySelector('.card');
    let suit = randomSuit();
    let number = randomNumber();

    card.classList.add(suit);
    document.querySelector('.number').textContent = number;
    document.querySelector('.top-suit').classList.add(suit);
    document.querySelector('.bottom-suit').classList.add(suit);
};

let randomNumber = () => {
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
}

let randomSuit = () => {
    let suits = ['spade', 'club', 'heart', 'diamond'];
    let indexSuit = Math.floor(Math.random() * suits.length);
    return suits[indexSuit];
}
