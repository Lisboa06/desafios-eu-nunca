const frase = [
'participei de uma briga',
'chorei no transporte público',
'fui expulso da sala de aula',
'criei uma conta falsa nas redes sociais',
'levei um tapa no rosto',
'dei um tapa no rosto de alguém'
]

const frasePesada = [
'... Sem ideia por enquanto',
'... Nada por aqui',
'... Em breve novas opções por aqui'
]

function gerarFrase() {
    const randomElement = frase[Math.floor(Math.random() * frase.length)];
    const fraseSaida = document.querySelector('#fraseId')
    fraseSaida.innerHTML = randomElement
}

function gerarFrasePesada() {
    const randomElement = frasePesada[Math.floor(Math.random() * frasePesada.length)];
    const fraseSaida = document.querySelector('#fraseId')
    fraseSaida.innerHTML = randomElement
}