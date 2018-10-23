const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Ajax",
				weight: 12.3
			}, {
				text: "CSS3",
				weight: 8
			}, {
				text: "JavaScript",
				weight: 14
			}, {
				text: "jQuery",
				weight: 6
			}, {
				text: "Programming",
				weight: 7
			}, {
				text: "SASS",
				weight: 10
			}, {
				text: "Bootstrap",
				weight: 9
			}, {
				text: "Python",
				weight: 15
			}, {
				text: "HTML5",
				weight: 7
			}, {
				text: "SQL",
				weight: 11
			}, {
				text: "NPM",
				weight: 9
			}, {
				text: "Laravel",
				weight: 7
			}, {
				text: "PHP",
				weight: 20
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "am passionate to learn.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
