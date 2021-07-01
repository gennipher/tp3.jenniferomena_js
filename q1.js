function q1(){
	/* VARIÁVEIS */
	let $fundoTela = document.querySelector("body")
    let $q1 = document.querySelector("#q1")
	let $h1 = document.createElement("h1")
	let $p1 = document.createElement("p1")
	let $p2 = document.createElement("p2")
	let $input1 = document.createElement("input")
	let $input2 = document.createElement("input")
	let $botao = document.createElement("button")
	let $p3 = document.createElement("p3")
	
	/* HTML */
	$h1.innerHTML = "Questão 1"
	$p1.innerHTML = "Informe o valor mínimo:"
	$p2.innerHTML = "Informe o valor máximo:"
	$input1.type = "valor"
	$input2.type = "valor"
	$botao.innerHTML = "Calcular"

	/* Estilização */
	$fundoTela.style.backgroundColor = "rgba(0, 112, 226, 0.3)"

	$q1.style.fontWeight = "bold"

	$p1.style.display = "block"
	$p1.style.marginTop = "5px"

	$p2.style.display = "block"
	$p2.style.marginTop = "5px"

	$p3.style.display = "block"

	$input1.style.marginRight = "10px"
	$input1.style.marginTop = "5px"

	$input2.style.marginTop = "5px"

	$botao.style.display = "block"
	$botao.style.padding= "10px 62px"
	$botao.style.margin= "10px 0px";

	$p3.style.marginTop = "5px"
	$p3.style.fontSize = "20px"

	$q1.appendChild($h1)
	$q1.appendChild($p1)
	$q1.appendChild($input1)
	$q1.appendChild($p2)
	$q1.appendChild($input2)
	$q1.appendChild($botao)
	$q1.appendChild($p3)

	$botao.onclick = function(){
		//convertendo para inteiro
		let $minimo = parseInt($input1.value)
		let $maximo = parseInt($input2.value)
		//console.log(typeof $minimo)
		//console.log(typeof $maximo)
		if($minimo ===  " " || $maximo === " "){
			//não pode ser vazio
			window.alert("Erro: Insira um valor válido!")
		} else{

			//o minimo tem que ser menor que o maximo
			if($minimo < $maximo){
				let resultado = 0
				let lista = []
				for(let i = $minimo; i < $maximo; i++){

					//precisa ser multiplo de 2*3 e diferente do minimo e maximo
					if(i % 6 === 0 && i !== $minimo && i !== $maximo){
						lista.push(i)
					}
				}
				resultado = lista.length
			} else{
				window.alert("Erro: Valor mínimo precisa ser menor que valor máximo")
			}
		}
		if(resultado != undefined){
			//innerHTML para imprimir na tela o resultado
			$p3.innerHTML = "Resultado: " + resultado
		} else{
			
			$p3.style.display = "block"
			$p3.innerHTML = "Atenção!!!"
		}
	}
}

q1()