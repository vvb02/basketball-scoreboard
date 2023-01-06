document.querySelector('div').addEventListener('click', (e) => {
	const btn = e.target.closest('button');
  if (btn) {
    const team = e.target.closest('.team');
  	const score = team.querySelector('h2');
    const currentScore = Number(score.textContent)
    score.textContent = currentScore + Number(btn.dataset.value);
}})
