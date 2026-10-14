function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let low = 1;
    let high = 100;
    let attempts = 0;
    let guessed = false;

    do {
        const guess = Math.floor((low + high) / 2);
        attempts++;

        console.log(`Attempt ${attempts}: Guess = ${guess}`);

        if (guess === secretNumber) {
            console.log("Correct Number guessed.");
            guessed = true;
        } else if (guess < secretNumber) {
            console.log("Too low ");
            low = guess + 1;
        } else {
            console.log("Too high ");
            high = guess - 1;
        }

    } while (!guessed && attempts < 7);
    if(!guessed){
        console.log("You have failed to Guessed the Secret Number")
    }
    console.log(`Secret number: ${secretNumber}`);
    console.log(`Total attempts: ${attempts}`);
}

guessingGame();