const textarea = document.getElementById('textarea');
const container = document.getElementById('suggestion_container');
const suggestions_count = document.getElementById('suggestions_count');
textarea.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addSuggestionToDOM(e.target.value.trim());
		setTimeout(() => {
			textarea.value = '';
		}, 10);
	}
});

function addSuggestionToDOM(suggestionText) {
	const newSuggestion = document.createElement('div');
	newSuggestion.classList.add('suggestion');
	newSuggestion.innerHTML = `
		<div class="block">
			<button class="vote-btn">
				<i class="fas fa-chevron-up"></i>
			</button>
			<p>
				<span class="votes">0</span>
				votes
			</p>
		</div>
		<div class="right">
			<strong>${suggestionText}</strong>
		</div>
	`;
	container.appendChild(newSuggestion);
	suggestions_count.innerText = +suggestions_count.innerText + 1;
}
container.addEventListener('click', (e) => {
	const btn = e.path.find(el => el.classList && el.classList.contains('vote-btn'));
	
	if(btn) {
		const suggestionEl = e.path.find(el => el.classList && el.classList.contains('suggestion'));
		
		if(btn.classList.contains('voted')) {
			btn.classList.remove('voted');
			unvoteFor(suggestionEl);
	
		} else {
			btn.classList.add('voted');
			voteFor(suggestionEl);
		}
	}
});

function voteFor(el) {
	const voteEl = el.querySelector('span.votes');
	voteEl.innerText = +voteEl.innerText + 1;
}
function unvoteFor(el) {
	const unvoteEl = el.querySelector('span.votes');
	unvoteEl.innerText = +unvoteEl.innerText - 1;
}
