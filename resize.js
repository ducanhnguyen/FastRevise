var $isDragging = false;
var $isClick = false;
var $delta = 5;
var $currentWidthOfQuestionArea;
var $currentWidthOfAnswerArea;

var $previousX = 0;
$("#separator")
        .mousedown(function (event) {
            $isDragging = false;
            $isClick = true;
            $currentWidthOfQuestionArea = $("#questions-area").width();
            $currentWidthOfAnswerArea = $("#answer-area").width();
            
            $previousX = event.pageX;
        });

$("html")
        .mouseup(function () {
            $isDragging = false;
            $isClick = false;
        })
        .mousemove(function (event) {
            $isDragging = true;
            if ($isClick && $isDragging) {
                var $delta = event.pageX - $previousX;
                $previousX = event.pageX;

                $currentWidthOfQuestionArea += $delta;
                $("#questions-area").width($currentWidthOfQuestionArea);

                $currentWidthOfAnswerArea -= $delta;
                $("#answer-area").width($currentWidthOfAnswerArea);
            }
        });