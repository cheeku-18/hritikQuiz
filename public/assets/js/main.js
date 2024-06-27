function startQuiz() {
    document.getElementById('welcome').classList.remove('show');
    document.getElementById('quiz1').classList.add('show');
}

function nextQuestion(nextQuiz) {
    const currentQuiz = document.querySelector('.container.show');
    currentQuiz.classList.remove('show');
    document.getElementById(nextQuiz).classList.add('show');
}

function repeatProposal() {
    alert('Please reconsider! I can’t imagine my life without you.');
}

function yesAnswer() {
    alert('Yay! I love you, Harsha! ❤️');
    const proposal = document.getElementById('proposal');
    proposal.classList.remove('show');
    document.getElementById('conclusion').classList.add('show');
}