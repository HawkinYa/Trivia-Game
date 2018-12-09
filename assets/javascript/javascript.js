// this quiz starts with an intro page with a single button that displays the trivia game tite and a button to start the quiz
    // the page will have a background image with a single container in the middle holding the title, and the "Begin" button

// a second page opens with 8 questions and a timer that starts at 30 seconds, as soon as the page loads the timer starts counting down
    // the timer starts immediately when the page loads
    // whatever questions that do not show immediately will have the user scroll down to access the next questions
    // each question will have 4 possible answers which will be multiple choice
    // the questions will have a bubble that the user will have to click to enter an answer
    
// if the timer runs out, the result page will load 
    // when the timer hits 0, the quiz will reload into a results page and stop the quiz
// if the quiz is finished before the timer runs out, the user has to press the submit button to stop the timer and load the results page
// the results page will display how may questions were ansered corrently, incorrectly, and not answered at all
// reloading the page with the "Try Again" button at the bottom of the results page will cause the trivia game home sceen to show up
$(document).ready(function () {

$('#pageOne').hide(0).slideDown(1000);

$('#wingmanTitle').html('<h1>Wingman Quiz</h1>').hide(0).fadeToggle(5000);

$('#wingmanButton').html('<button type="button" class="btn btn-light" id="startButton">Start</button>').hide(0).fadeToggle(5000);


    $(`#pageOne`).on('click', pageTwo);
    
    function pageTwo() {
        $("#titlePage").css("display", "none")
    }

//    $("#pageTwo").html("<div id="gamePage"></div>")













});