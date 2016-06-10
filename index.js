var $clickedQuestion;

$("body").keydown(function (event) {
    $UP_ARROW = 38;
    $DOWN_ARROW = 40;

    if (event.keyCode == $DOWN_ARROW)
        $clickedQuestion.next().trigger("click");
    else if (event.keyCode == $UP_ARROW)
        $clickedQuestion.prev().trigger("click");
});
//-----------------------------------------------------------------------------------------------
$("#questions-area").on("click", ".one-question", function () {
    $content = $(this).text();

    $(document.getElementsByClassName("one-question")).removeClass("row-style-2");
    $(this).addClass("row-style-2");

    $clickedQuestion = $(this);
    $id_question = $(this).find("span").text();

    showAnswer($id_question);
});

$("#questions-area").on("contextmenu", ".one-question", function (event) {
    $(this).trigger("click");
    
    event.preventDefault();
    $clickedX = event.pageX;
    $clickedY = event.pageY;

    $("#popup").css('visibility', 'visible');
    $("#popup").css("left", $clickedX + "px");
    $("#popup").css("top", $clickedY + "px");
});
$("#popup").click(function () {
    $("#popup").css('visibility', 'hidden')
});
function showAnswer($id_question) {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("answer-area").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "getanswer.php?id_question=" + $id_question, true);
    xmlhttp.send();
}

//-----------------------------------------------------------------------------------------------
$('.one-tag').click(function () {
    $(document.getElementsByClassName("one-tag")).removeClass("row-style-3");
    $(this).addClass("row-style-3");

    $clickTag = $(this);

    showQuestions($(this).text());

    $("#answer-area").empty();
});

function showQuestions(str) {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("questions-area").innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", "getquestions.php?tag=" + str, true);
    xmlhttp.send();
}
$("*").click(function(){
     $("#popup").css('visibility', 'hidden')
});