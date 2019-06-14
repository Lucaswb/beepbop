# Lucas' BEEP BOOP

#### This file contains HTML, JavaScript and CSS and is used to play a simple game where the user may enter a number and then receives a prompt based on the film 2001 space odyssey. 06/07/2019

#### By Lucas .B

## Description

This website will begin by prompting the user if he/she would like to play a game. It then brings the user to a second prompt where they must input a number. Depending on the number entered, one of four things will happen. The first, the user will receive a message saying beep. The second, the user will receive a message saying boop. The third, the user will receive a famous quote from 2001 space odyssey. the fourth and final possibility is that the user will receive a list of all the numbers starting at 1 and up to and including their inputted number.

## Setup/Installation Requirements

* 1. open terminal to install git and copy the following code: $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* 2. next copy:  echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
* 3. install git by: $ brew install git
* 4. cd in terminal to preferred
* 5. install the file in: $ git clone https://github.com/Lucaswb/Portfolio-landing-page.git
* 6. Open the file in your preferred directory.

## Known Bugs

## specs
1. The user is prompted a question as to whether he/she would like to play a certain game.
 * if the user selects no, the question will disappear from the header and as well as the about me. Furthermore, the user will receive a message saying that "This conversation can serve no further purpose"
 * if the user selects yes than the user will be given a subsequent prompt and the original question will disappear from the screen.

2. After answering the first question, this user will be asked to enter a number. Each time the user enters a number, it will delete the previous statement and replace it with a new one.
  * if the user enters an incorrect number, then then a message will appear asking the user to enter a number
  * if the user enters a number containing the digit one, then the user will receive a message "beep"
  * if the user enters a number containing the digit two, then the user will receive a message "boop." This rule will supersede the aforementioned rule.
  * if the user enters a number containing the digit three, then the user will receive a message "I'm sorry, Dave. I'm afraid I can't do that"
  * if the user enters a number that doesn't contain the digits, three, two or one, than the website will return a list of numbers starting at 1 and finishing at the user inputted number where numbers containing the 1,2, or 3 are replaced with the aforementioned statements.

no known bugs at this time

## Support and contact details

Lucas .B
email: thisisafakeemail@email.com

## Technologies Used

iMAC pro

HTML

JavaScript

CSS

Bootstrap

jQuery

Github


### License

Copyright (c) 2019 Lucas B.

This software is licensed under the MIT license.
