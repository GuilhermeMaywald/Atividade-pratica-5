// Crie um arquivo chamado condicionais_js.html, e vamos fazer um algoritmo para resolver um problema de negócio: “João tem um petshop, ele atende uma lista específica de animais para banho e tosa, essa lista contém:
//   ● Cachorro
//   ● Gato
//   ● Coelho

// Ele tem uma outra lista de animais que ele encaminha para um veterinário especializado:
//   ● Cavalo
//   ● Cabra
//   ● Jumento

// No petshop, João tem apenas gaiolas especiais para os ratos. Para os passarinhos, ele oferece um serviço de implante de rastreador. Para todos os animais citados acima ele vende ração, e se por acaso for outro animal que não esteja citado, ele infelizmente, não pode atender.

// Utilizando seu conhecimento adquirido em JS, monte um algoritmo que receba do usuário o nome do seu animal de estimação, e como resposta devolva o produto/serviço ofertado pelo petshop do João.

// Dicas importantes:
//   ● Preste atenção nas palavras destacadas no texto do problema;
//   ● Utilize prompt para receber o valor do usuário;
//   ● Utilize alert para exibir a resposta.
//   ● Não deixe o usuário sem uma resposta adequada;
//   ● O nome do animal será digitado no singular pelo usuário, por exemplo:
// Qual seu animal de estimação?
// Resposta: Cachorro

let animalEstimacao = prompt('Qual seu animal de estimação?');

switch (animalEstimacao) {
    case 'Cachorro':
    case 'Gato':
    case 'Coelho':
        animalEstimacao = `Oferecemos serviços de banho e tosa para seu ${animalEstimacao} no valor de R$50,00 e rações diversas`;
        break;
    case 'Cavalo':
    case 'Cabra':
    case 'Jumento':
        animalEstimacao = `Encaminhamos seu animal de estimação para um veterinário especializado e temos rações diversas`;
        break;
    case 'Rato':
        animalEstimacao = `Para ratos temos gaiolas especiais no valor de R$50,00 e rações diversas`;
        break;
    case 'Passaro':
        animalEstimacao = `Para passarinhos temos implante de rastreador no valor de R$50,00 e rações diversas`;
        break;
    default:
        animalEstimacao = `Infelizmente não atendemos seu ${animalEstimacao}`;
        break;
}
alert(animalEstimacao);