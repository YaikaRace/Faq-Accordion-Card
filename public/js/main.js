let active = 1;

const buttons = document.querySelectorAll('[data-id="question"]');
const answers = document.querySelectorAll('[data-id="answer"]');
const arrows = document.querySelectorAll('[data-id="arrow"]');

buttons.forEach((item, idx) => {
	item.addEventListener("click", function () {
		if (active != undefined) {
			buttons[active].classList.remove("font-bold", "text-v-desatured-blue");
			answers[active].classList.remove(
				"text-xs",
				"h-fit",
				"mt-2",
				"max-w-[289.5px]"
			);
			arrows[active].classList.remove("animate-arrow-rotation");
			arrows[active].classList.add("animate-arrow-reverse");
		}
		if (active != idx) {
			buttons[idx].classList.add("font-bold", "text-v-desatured-blue");
			answers[idx].classList.add("text-xs", "h-fit", "mt-2", "max-w-[289.5px]");
			arrows[idx].classList.add("animate-arrow-rotation");
			arrows[idx].classList.remove("animate-arrow-reverse");
			active = idx;
			return;
		}
		active = undefined;
	});
});
