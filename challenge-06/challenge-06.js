/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Pernambucano';
console.log(championship);


/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = ['Náutico', 'Central', 'Porto', 'Salgueiro', 'Sport'];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(n) {
	switch (n) {
		case 0:
		console.log("O time que está em 1º lugar é o " + teams[0] + ".");
		break;
		case 1:
		console.log("O time que está em 2º lugar é o " + teams[1] + ".");
		break;
		case 2:
		console.log("O time que está em 3º lugar é o " + teams[2] + ".");
		break;
		case 3:
		console.log("O time que está em 4º lugar é o " + teams[3] + ".");
		break;
		case 4:
		console.log("O time que está em 5º lugar é o " + teams[4] + ".");
		break;
		default:
		console.log('Não temos a informação do time que está nessa posição.');
	}
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0);
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(8);
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while (counter < 31) {
	console.log(counter)
	counter++;
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
	switch (cor) {
		case "red":
		console.log("O hexadecimal para a cor " +  cor + " é #FF0000.")
		break;
		case "white":
		console.log("O hexadecimal para a cor " +  cor + " é #FFFFFF.")
		break;
		case "green":
		console.log("O hexadecimal para a cor " +  cor + " é #008000.")
		break;
		case "purple":
		console.log("O hexadecimal para a cor " +  cor + " é #800080.")
		break;
		case "blue":
		console.log("O hexadecimal para a cor " +  cor + " é #0000FF.")
		break;
		case "black":
		console.log("O hexadecimal para a cor " +  cor + " é #000000.")
		break;
		default:
		console.log("Não temos o equivalente hexadecimal para " + cor + ".")
		break;
	}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red');
convertToHex('blue');
convertToHex('yellow');
convertToHex('black');
convertToHex('purple');
convertToHex('green');
convertToHex('white');
convertToHex('brown');
