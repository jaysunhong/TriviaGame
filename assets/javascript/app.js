// load JS after html file is done loading
$(document).ready(function() {
    var correct = 0;
    var wrong = 0;
    var noAnswer = 0;
    // check the value of the options by calling the "radio" name
    function getCheckedValue(radioName){
        var radios = document.getElementsByName(radioName); // Get radio group by-name
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) 
            return radios[i].value; // return the checked value
        }
    };
    // loop through the 10 questions
    function timer() {
        for (var i = 1; i < 11; i++)
            if (getCheckedValue("question" + i) === "true") {               // if value is "true", then increment var "correct" by 1.
                correct++;
            } else if (getCheckedValue("question" + i) === "false") {       // if value is "false", then increment var "wrong" by 1.
                wrong++;
            } else {                                                        // if no value is returned, then increment var "noAnswer" by 1.
                noAnswer++;
            }
        // print "Time's Up" after 30 seconds into #test. Append the number of correct, wrong, and unanswered 
        $("#test").html("Time's Up!<br>")
        .append("<br>Correct: " + correct)
        .append("<br>Wrong: " + wrong)
        .append("<br>Unanswered: " + noAnswer);
    };
    // change the background-image to batman.jpg and hide the "Start" button and reveal the test questions (initially hidden)
    function testActive () {
        $("body").css('background-image', 'url("./assets/images/batman.jpg")');
        $(".btnStart").css('display', 'none');
        $("#test").css('display', 'block');
        setTimeout(function() {         
            timer(); }, 30 * 1000);     // run function timer() for 30 seconds
    };
    // when "Start" button is clicked, run the function testActive();
    $(".btnStart").on("click", function () {
        testActive();
    });
    // when "Done" button is clicked, run the function timer();
    $(".btnDone").on("click", function () {
        timer();
    }); 
});