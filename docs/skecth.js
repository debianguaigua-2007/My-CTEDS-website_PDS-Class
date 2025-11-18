document.addEventListener('DOMContentLoaded', function () {
	//Define as funções de acessibilidade
	const aumentaFonteBotao = document.getElementById('aumentar-fonte');
	const diminuiFonteBotao = document.getElementById('diminuir-fonte');
	const alternaContraste = document.getElementById('alterna-contraste');
	const reiniciarFonte = document.getElementById('reinicia-fonte');
	let messageFonte = document.getElementById('aviso-fonte');
	let tamanhoAtualFonte = 1;
	//Função de aumentar a fonte
	aumentaFonteBotao.addEventListener('click', function(){
		tamanhoAtualFonte += 0.1;
		document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
		//O aumento de fonte tem um limite;
		if(tamanhoAtualFonte > 5){
			tamanhoAtualFonte = 5;
			messageFonte.textContent = "Limite máximo de fonte atingido";
		}else{messageFonte.textContent = `Tamanho aumentado para ${tamanhoAtualFonte}`};
	});
	//Função de diminuir a fonte
	diminuiFonteBotao.addEventListener('click', function(){
		tamanhoAtualFonte -= 0.1;
		document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
		//A diminuição de fonte tem um limite;
		if(tamanhoAtualFonte < 0.2){
			tamanhoAtualFonte = 0.2;
			messageFonte.textContent = "Limite mínimo de fonte atingido";
		}else{messageFonte.textContent = `Tamanho diminuido para ${tamanhoAtualFonte}`};
	});
	//Função de alto contraste, protege a sua visão
	alternaContraste.addEventListener('click', function(){
		document.body.classList.toggle('alto-contraste');
	});
	//Função de reiniciar o tamanho da fonte para a configuração default
	reiniciarFonte.addEventListener('click', function(){
		tamanhoAtualFonte = 1;
		document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
		messageFonte.textContent = "";
	});
});
