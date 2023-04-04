GPT-4 Question Tracker
Overview
The GPT-4 Question Tracker is a web-based tool that helps users monitor and manage the number of questions they can ask from the GPT-4 AI model. It provides a clear visual representation of the questions per minute (QPM) using a gauge chart and a countdown timer for when the QPM goes below a specified threshold. The tool also indicates the number of remaining questions that can be asked within a 3-hour window.

By keeping the QPM gauge in the black zone (as opposed to the red zone), users can ask questions at a sustainable rate, allowing them to better manage their GPT-4 usage without exceeding the allowed limit.

How to Run
Ensure you have a modern web browser installed (such as Google Chrome, Mozilla Firefox, or Microsoft Edge).
Download or clone the repository containing the following files:
index.html
styles.css
script.js
Open the index.html file in your preferred web browser.
Usage
The main interface displays the number of remaining questions, the QPM gauge, and a countdown timer.
Click the "Ask a question" button to simulate asking a question. The QPM gauge and remaining questions counter will update accordingly.
The QPM gauge will change color based on the rate of questions being asked. Aim to keep the gauge in the black zone, which means you are asking questions at a sustainable rate.
Black: Below the threshold (1 question per 7.5 minutes)
Red: Above the threshold (1 question per 7.5 minutes or more)
The countdown timer displays the time until the QPM drops below the threshold, allowing you to plan your question-asking accordingly.
Click the "Reset" button to reset the tool, clearing the history of asked questions.
Note: the Time until QPM below threshold currently won't reset in this version of QT after it’s initial countdown, but the red or black numbers in the Questions per minute gauge will update to indicate if questions are being asked at a sustainable rate.  
License
This project is licensed under the MIT License.
