var quiz = {};

// EDIT THIS.
// The answers should be IDENTICAL to the correct answer as you coded it in the HTML. This means punctuation and all. 

quiz.answers = {
	1: 'Mara Jade',
	2: '"You know you love him, and so does he!"',
	3: "Red",
	4: "Anakin",
	5: "Red"
	// if you need to add more answers, do it using this format. DO NOT include a comma after the last one.
}

// STOP EDITING

quiz.thisQ = 1;
quiz.quizLength = $('.question').length;
quiz.score = 0;

quiz.init = function() {
	$('.question').hide();
	$('.answers').hide();
	$('.q1').show();
}

quiz.engine = function(e) {
	response = e.target.innerHTML;
	if (response == quiz.answers[quiz.thisQ]) {
		$('.result').html("Correct. ");
		quiz.score++;
	} else {
		$('.result').html("Nope. The right answer is " + quiz.answers[quiz.thisQ] + ". ");
	}
	$('.result').append("Your score is " + quiz.score + "/" + quiz.thisQ + ".");
	$('.q'+quiz.thisQ).hide();
	quiz.thisQ++;
	
	if (quiz.thisQ <= quiz.quizLength) {
		$('.q' + quiz.thisQ).show();
	} else {
		$('.answers').show();
		for (i = 0; i <= quiz.quizLength; i++) {
			$('.a' + i).html("A: " + quiz.answers[i]);
		}
	}
}

// make it go
$('document').ready(function() {
	quiz.init();
});

$('li').on('click', function(e) {
	quiz.engine(e);
});