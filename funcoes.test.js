const testar = require('./funcoes');

test("Número par deve retornar true", function () {
    const resultado = testar.ehPar(4);
    expect(resultado).toBe(true);
});

test("Número ímpar deve retornar false", function () {
    const resultado = testar.ehPar(7);
    expect(resultado).toBe(false);
});


test("TemMaisdeCincoLetras", function () {
    const resultado = testar.temMaisDeCincoLetras("Paralelepipedo");
    expect(resultado).toBe(true);
});

test("TemMenosdeCincoLetras", function () {
    const resultado = testar.temMaisDeCincoLetras("arco");
    expect(resultado).toBe(false);
});

test("É Maior de Idade", function () {
    const resultado = testar.verificarIdade(24);
    expect(resultado).toBe("maior de idade");
});

test("É Menor de Idade", function () {
    const resultado = testar.verificarIdade(7);
    expect(resultado).toBe("menor de idade");
});

test("A Soma é: ", function () {
    const resultado_soma = testar.somar(3,4);
    expect(resultado_soma).toBe(7);
});


test("Nome começa com A maiúsculo", function () {
    const resultado = testar.nomeComecaComA("Ana");
    expect(resultado).toBe(true);
});

test("Nome começa com a minúsculo", function () {
    const resultado = testar.nomeComecaComA("antonio");
    expect(resultado).toBe(true);
});

test("Nome não começa com A", function () {
    const resultado = testar.nomeComecaComA("Maria");
    expect(resultado).toBe(false);
});



test("Não Possui Conteudo", function () {
    const resultado = testar.campoVazio("");
    expect(resultado).toBe(true);
});


test("Possui Conteudo", function () {
    const resultado = testar.campoVazio("Maria");
    expect(resultado).toBe(false);
});


test("A senha tem 6 ou mais digitos", function () {
    const resultado = testar.senhaValida("antonio");
    expect(resultado).toBe(true);
});

test("Essa senha é muito pequena", function () {
    const resultado = testar.senhaValida("Maria");
    expect(resultado).toBe(false);
});

test("Número Positivo", function () {
    const resultado = testar.tipoNumero(8);
    expect(resultado).toBe("positivo");
});

test("Número Negativo", function () {
    const resultado = testar.tipoNumero(-2);
    expect(resultado).toBe("negativo");
});
test("É Zero", function () {
    const resultado = testar.tipoNumero(0);
    expect(resultado).toBe("zero");
});

test("A Multiplicação é: ", function () {
    const resultado_multiplicar = testar.multiplicar(7,2);
    expect(resultado_multiplicar).toBe(14);
});

test("Esse é um email valido", function () {
    const resultado = testar.emailValido("igorfefesilva12@gmail.com");
    expect(resultado).toBe(true);
});

test("Esse não é um email", function () {
    const resultado = testar.emailValido("igorfefesilva12gmail.com");
    expect(resultado).toBe(false);
});

test("Pode votar", function () {
    const resultado = testar.podeVotar(43);
    expect(resultado).toBe(true);
});

test("Não pode votar ainda", function () {
    const resultado = testar.podeVotar(12);
    expect(resultado).toBe(false);
});

test("Está Gritando", function () {
    const resultado = testar.estaMaiusculo("MARIA");
    expect(resultado).toBe(true);
});

test("Não está gritando", function () {
    const resultado = testar.estaMaiusculo("Maria");
    expect(resultado).toBe(false);
});

test("Passou", function () {
    const resultado = testar.passou(7);
    expect(resultado).toBe(true);
});

test("Reprovou", function () {
    const resultado = testar.passou(5);
    expect(resultado).toBe(false);
});

test("Está entre", function () {
    const resultado = testar.entreDezEVinte(13);
    expect(resultado).toBe(true);
});

test("Não está entre", function () {
    const resultado = testar.entreDezEVinte(999);
    expect(resultado).toBe(false);
});

test("Está na Lista", function () {
    const resultado = testar.nomeNaLista("João");
    expect(resultado).toBe(true);
});

test("Não está na lista", function () {
    const resultado = testar.nomeNaLista("Mariana");
    expect(resultado).toBe(false);
});