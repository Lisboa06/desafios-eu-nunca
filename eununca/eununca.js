const frase = [
'participei de uma briga',
'chorei no transporte público',
'fui expulso da sala de aula',
'criei uma conta falsa nas redes sociais',
'levei um tapa no rosto',
'dei um tapa no rosto de alguém',
'quebrei um osso',
'fui parado por policiais',
'tive algum perfil de rede social hackeado',
'apareci na TV',
'corri da polícia',
'passei mal em um parque de diversões',
'me arrependi imediatamente após enviar uma mensagem',
'olhei o celular de alguém sem que a pessoa soubesse',
'consegui algo de graça dando em cima de alguém',
'tive um vídeo constrangedor postado na internet',
'quebrei algo na casa de alguém e escondi',
'me gabei por algo que não fiz',
'sofri bullying na escola',
'fui expulso de uma festa',
'postei algo e me arrependi',
'fui assaltado',
'menti para meus pais sobre aonde estava indo',
'deixei meu celular cair na privada',
'beijei alguém famoso',
'passei o número errado para alguém',
'menti para alguém sobre qual era meu nome',
'convenci um amigo a largar a namorada',
'culpei outra pessoa por um erro meu',
'viralizei na internet',
'fingi estar mexendo no celular para evitar falar com alguém',
'dei em cima do namorado(a) de algum amigo',
'passei a madrugada mandando mensagem para alguém',
'traí alguém',
'estive um relacionamento aberto',
'beijei meu melhor amigo(a)',
'duvidei sobre minha orientação sexual',
'namorei uma pessoa para tentar esquecer outra',
'fiquei com alguém comprometido(a)',
'terminei com alguém por mensagem',
'menti sobre meu estado civil',
'fui apaixonado(a) por mais de uma pessoa ao mesmo tempo',
'fuxiquei o celular do(a) namorado(a)',
'causei ciúmes em alguém de propósito',
'tive um contato próximo com a morte']

const frasePlus = [
'beijei alguém que eu não conhecia',
'fiquei com o irmão/irmã de um amigo',
'fiquei apaixonado por algum professor',
'fiquei com mais de uma pessoa ao mesmo tempo',
'fiquei com uma pessoa e depois nunca mais falei com ela',
'vi algum vizinho(a) sem roupa',
'fiquei com gêmeos',
'fiquei com alguém no banheiro de uma festa',
'fiquei com alguém na praia',
'fiquei com alguém na rua',
'fiquei com alguém do mesmo gênero que eu',
'mandei fotos ousadas para alguém',
'mandei a mesma foto ousada para duas pessoas ao mesmo tempo',
'tive um sonho quente com algum professor',
'tive um sonho quente com algum amigo',
'enviei fotos ousadas para a pessoa errada',
'dancei especialmente para alguém',
'fiquei com alguém que eu nem sabia o nome',
'fiquei com alguém na universidade',
'fiquei com alguém em um carro',
'me passei por outra pessoa nas redes sociais',
'recebi fotos ousadas sem estar esperando',
'assisti a um filme para maiores de idade',
'dormi enquanto estava ficando com alguém',
'fiquei com um(a) vizinho(a)',
'enviei uma mensagem comprometedora para a pessoa errada',
'fiquei com alguém bem mais novo que eu'
]

function gerarFrase() {
    if (frase.length === 0) {frase.push('... (Fim!)');}

    const randomIndex = frase[Math.floor(Math.random() * frase.length)];
    const fraseEscolhida = frase.splice(randomIndex, 1)[0];
    const fraseSaida = document.querySelector('#fraseId');
    fraseSaida.innerHTML = fraseEscolhida;
}

function gerarFrasePlus() {
    if (frasePlus.length === 0) {frasePlus.push('... (Fim!)');}

    const randomIndex = frasePlus[Math.floor(Math.random() * frasePlus.length)];
    const fraseEscolhida = frasePlus.splice(randomIndex, 1)[0];
    const fraseSaida = document.querySelector('#fraseId');
    fraseSaida.innerHTML = fraseEscolhida;
}

let contadorNunc = 0;
function contNunc() {
    if (frase.length > 0) {
    contadorNunc++;
    document.getElementById('contagemNunc').innerText = '(' + contadorNunc + ')';
    }
}
let contadorJa = 0;
function contJa() {
    if (frasePlus.length > 0) {
        contadorJa++;
        document.getElementById('contagemJa').innerText = '(' + contadorJa + ')';
    }
}

let contadorNuncPlus = 0;
function contNuncPlus() {
    if (frasePlus.length > 0) {
        contadorNuncPlus++;
        document.getElementById('contagemNunc').innerText = '(' + contadorNuncPlus + ')';
    }
}
let contadorJaPlus = 0;
function contJaPlus() {
    if (frasePlus.length > 0) {
    contadorJaPlus++;
    document.getElementById('contagemJa').innerText = '(' + contadorJaPlus + ')';
    }
}