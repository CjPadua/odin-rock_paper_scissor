/*
FUNCTION getComputerChoice()
	SET choice equal to blank

	SET randomNumber equal to 0
	GET a random number
	SET randomNumber equal to the random number

	IF randomNumber < 0.3 THEN
		SET choice equal to rock
	ELSE IF randomNumber < 0.6 THEN
		SET choice equal to paper
	ELSE
		SET choice equal to scissor
	END IF

	RETURN choice
END FUNCTION

FUNCTION getHumanChoice()
	SET choice equal to blank

	DISPLAY Rock, Paper, or Scissor?
	GET user input 
SET choice equal to user input

RETURN  choice
END FUNCTION

FUNCTION playRound()
	SET humanChoice equal to blank
	SET computerChoice equal to blank

	CALL getHumanChoice RETURNING choice
	SET humanChoice equal to choice
	SET humanChoice equal to lowercase humanChoice

	CALL getComputerChoice RETURNING choice
	SET computerChoice equal to choice

	IF humanChoice is equals computerChoice THEN
		RETURN draw
	END IF

	CASE humanChoice OF
		rock:
			IF computerChoice equals paper THEN
				RETURN computer
			ELSE
				RETURN human
			END IF
		paper:
			IF computerChoice equals scissor THEN
				RETURN computer
			ELSE
				RETURN human
			END IF			
		scissor:
			IF computerChoice equals rock THEN
				RETURN computer
			ELSE
				RETURN human
			END IF
	END CASE
END FUNCTION

FUNCTION playGame()
	SET humanScore equal to 0
	SET computerScore equal to 0

	SET rounds equal to 0

	WHILE rounds is less than 5  
		CALL playRound RETURNING winner

		CASE winner OF 
			human:
				INCREMENT humanScore
computer: 
	INCREMENT computerScore
END CASE			

		INCREMENT rounds
	END WHILE

	SET winner equal to blank
	
IF humanScore is equals to computerScore THEN
	SET winner equal to none
ELSE IF humanScore is greater than computerScore THEN
	SET winner equal to human
ELSE 
	SET winner equal to computer	
END IF

DISPLAY winner
END FUNCTION
*/

/*
FUNCTION getComputerChoice()
	SET choice equal to blank

	SET randomNumber equal to 0
	GET a random number
	SET randomNumber equal to the random number

	IF randomNumber < 0.3 THEN
		SET choice equal to rock
	ELSE IF randomNumber < 0.6 THEN
		SET choice equal to paper
	ELSE
		SET choice equal to scissor
	END IF

	RETURN choice
END FUNCTION
*/

function getComputerChoice() {
  let choice;

  const randomNumber = Math.random();

  if (randomNumber < 0.3) {
    choice = 'rock';
  }
  else if (randomNumber < 0.6) {
    choice = 'paper';
  }
  else {
    choice = 'scissor';
  }

  return choice;
}

/*
FUNCTION getHumanChoice()
	SET choice equal to blank

	DISPLAY Rock, Paper, or Scissor?
	GET user input 
  SET choice equal to user input
  SET choice equal to lowered case user input

RETURN  choice
END FUNCTION
*/

function getHumanChoice() {
  return choice = prompt('Rock, Paper, or Scissor?').toLowerCase();
}

/*
FUNCTION playRound()
	SET humanChoice equal to blank
	SET computerChoice equal to blank

	CALL getHumanChoice RETURNING choice
	SET humanChoice equal to choice
	SET humanChoice equal to lowercase humanChoice

	CALL getComputerChoice RETURNING choice
	SET computerChoice equal to choice

	IF humanChoice is equals computerChoice THEN
		RETURN draw
	END IF

	CASE humanChoice OF
		rock:
			IF computerChoice equals paper THEN
				RETURN computer
			ELSE
				RETURN human
			END IF
		paper:
			IF computerChoice equals scissor THEN
				RETURN computer
			ELSE
				RETURN human
			END IF			
		scissor:
			IF computerChoice equals rock THEN
				RETURN computer
			ELSE
				RETURN human
			END IF
	END CASE
END FUNCTION
*/

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if(humanChoice === computerChoice) {
    return 'draw';
  }

  switch (humanChoice) {
    case 'rock':
      return computerChoice === 'paper' ? 'computer' : 'human';
    case 'paper':
      return computerChoice === 'scissor' ? 'computer' : 'human';
    case 'scissor':
      return computerChoice === 'rock' ? 'computer' : 'human';
  }
}

/*
FUNCTION playGame()
	SET humanScore equal to 0
	SET computerScore equal to 0

	SET rounds equal to 0

	WHILE rounds is less than 5  
		CALL playRound RETURNING winner

		CASE winner OF 
			human:
				INCREMENT humanScore
computer: 
	INCREMENT computerScore
END CASE			

		INCREMENT rounds
	END WHILE

	SET winner equal to blank
	
IF humanScore is equals to computerScore THEN
	SET winner equal to none
ELSE IF humanScore is greater than computerScore THEN
	SET winner equal to human
ELSE 
	SET winner equal to computer	
END IF

DISPLAY winner
END FUNCTION
*/

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let rounds = 0;

  while (rounds < 5) {
    let winner = playRound();

    switch (winner) {
      case 'human':
        humanScore++;
        break;
      case 'computer':
        computerScore++;
        break;
    }

    rounds++;
  }

  if(humanScore === computerScore) {
    return 'draw';
  }
  else if (humanScore > computerScore) {
    return 'human';
  }
  else {
    return 'computer';
  }
}