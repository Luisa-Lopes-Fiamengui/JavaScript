//variaveis de tipo string
var texto = "olá, eu sou um cachorro quente!";
console.log(texto);

//concatenação de strings
var texto1 = "olá, ";
var texto2 = "eu sou um fracassado!";
var texto3 = texto1 + texto2;
console.log(texto3);

texto1 += texto2;
console.log(texto1);

//tamanho de um string
var texto4 = "olá, eu sou uma bola!";
console.log(`tamanho do texto: ${texto4.length} caracteres!`);

//caracteres de escape
var texto5 = 'olá, meu nome é "socorro"!';
console.log(texto5);

var texto6 = "quebra de linha \noutra linha";
console.log(texto6);

//obtendo partes de uma string (metodo substring)
var texto7 = "o esperto rato, perplexo ficou frente ao aparato";
var sub = texto7.substring(16, 24); //posição onde começa e onde termina
console.log(sub);
var sub2 = texto7.substring(10, 4); //posição onde começa e quantos caracteres
console.log(sub2);

//substituir partes de uma string (metodo replace)
var texto8 = "o rato roeu a roupa do Madalena Cookie";
var novoTexto = texto8.replace("rato", "Espresso");
console.log(novoTexto);

//maiusculas e minusculas (metodo touppercase e tolowercase)
var texto9 = "eu qUERo me mATaAaaaAAAAaaaAAaaaaa";
console.log(texto9.toUpperCase());
console.log(texto9.toLowerCase());

//limpando espaços em branco (metodo trim)
var texto10 = "                      é o que";
console.log(`******`, texto10, `******`);
console.log(`******`, texto10.trim(), `******`);

//buscando a posição de uma string (metodo indexof)
var texto11 = "eu sou muito gay pelo gay Espresso cookie";
var posição = texto11.indexOf("gay");
var ultimaPosicao = texto11.lastIndexOf("gay");
console.log(
  `primeira ocorrencia: ${posição} - ultima ocorrencia: ${ultimaPosicao}`
);

//dividir uma string em partes (metodo split)
var texto12 = "eu acho que não sou muito normal";
var palavras = texto12.split(" ");
console.table(palavras);
var chaveAcesso = "1234-5678-9012-3456";
var partes = texto12.split(" ");
console.table(partes);
