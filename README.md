# odin-rock_paper_scissor

Practiced the proper way of problem solving through a console-based rock paper scissor game.

1. Understand the Problem

Step 1: Setup the project structure
Use Git, GitHub, and External JavaScript

Step 2: Write the logic to get computer choice
Step 3: Write the logic to get human choice
Step 4: Declare the players score variable
Step 5: Write the logic to play a single round
Step 6: Write the logic to play the entire game
Play five rounds then declare the winner at the end.



2. Plan

Does your program have a user interface?
- None, just console.

What inputs will your program have?
- User Input
- Machine-generated input

What’s the desired output?
- The winner after five rounds.

What are the steps necessary?
- Listed in the understanding the problem section above.


3. Pseudocode

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

4. Divide and Conquer

It will be visible in the code how the pseudocode are broken up and translated to code.