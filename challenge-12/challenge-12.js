// 20.10.2020 de madrugada e Susi de novo no hospital
(function() {
	/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
	var person = {
		name: 'Josias',
		lastname: 'Rocha',
		age: 75
	}
	console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person)) // retorna as chaves do objeto
/*
Crie um array vazio chamado `books`.
*/
	var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
	books.push({
		name: 'Dom Quixote',
		pages: 1033
	}, {
		name: 'Dom Casmurro',
		pages: 400
	}, {
		name: 'Dom Juan',
		pages: 759
	})
	console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
	
	console.log(books)

	console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
	var last  = books.pop();
	console.log(last);

	console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
	console.log(books)

/*
Converta os objetos que ficaram em `books` para strings.
*/
	var s = JSON.stringify(books);
	console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
	console.log(s)
/*
Converta os livros novamente para objeto.
*/
	var n = JSON.parse(s);
	console.log( '\nAgora os livros são objetos novamente:' );
	console.log(n)

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
	for (var i = 0; i < Object.keys(books).length; i++) {
		for (var props in books[i]) {
			console.log(props + ': ' + books[i][props])
		}		
	}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
	var myName = ['j', 'o', 'v', 'a', 'n', 'e'];
	console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
	console.log(myName.join(''))

	console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
	console.log(myName.reverse().join(''));
	console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
	console.log(myName.sort().join(''));
}())
