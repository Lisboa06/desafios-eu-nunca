const quizFrases = [
'Quando é meu aniversário?',
'Quantos irmãos/irmãs eu tenho?',
'Qual é o meu talento especial?',
'Qual é a principal coisa que faço no meu tempo livre?',
'Qual é a principal coisa que eu não gosto em mim?',
'Quem é minha celebridade favorita?',
'Qual é o meu maior medo?',
'Quem é meu pior inimigo?',
'Qual é o meu lugar favorito no mundo?',
'Qual é a minha comida favorita?',
'Qual é o meu gênero de música favorito?',
'Qual é o meu dia favorito da semana?',
'Qual é o meu animal favorito?',
'Qual é o meu pior hábito?',
'Qual é o meu emprego dos sonhos?',
'Quando você acha que é o momento certo para terminar com um namorado ou namorada?',
'Qual você acha que é a melhor maneira de se desculpar com seu parceiro?',
'O que você faria se não houvesse aplicação da lei?',
'O que você faria se tudo no mundo acabaria amanhã?',
'O que você faria se seu amigo(a) estivesse ficando com seu Ex?',
'Qual é o meu momento mais embaraçoso?',
'Qual é a única coisa que eu não posso viver sem?'
];


function gerarQuiz() {
    const randomElement = quizFrases[Math.floor(Math.random() * quizFrases.length)];
    const fraseSaida = document.querySelector('#fraseId');
    fraseSaida.innerHTML = randomElement;
}