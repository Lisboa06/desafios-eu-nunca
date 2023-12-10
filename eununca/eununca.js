const frase = [
'participei de uma briga',
'Furtei uma viatura',
'chorei no transporte público',
'fui expulso da sala de aula',
'criei uma conta falsa nas redes sociais',
'levei um tapa no rosto',
'dei um tapa no rosto de alguém'
]

function gerarFrase() {
    const randomElement = frase[Math.floor(Math.random() * frase.length)];
    const fraseSaida = document.querySelector('#fraseId')
    fraseSaida.innerHTML = randomElement
}