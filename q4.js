function q4()
{
	let $q4 = document.querySelector("#q4")
	let $h1 = document.createElement("h1")
	let $botao = document.createElement("button")
	let $label1 = document.createElement("label")
	let $label2 = document.createElement("label")
	let $label3 = document.createElement("label")
	let $input1 = document.createElement("input")
	let $input2 = document.createElement("input")
	let $input3 = document.createElement("input")
	let $p = document.createElement("p")
	
    /* HTML */
	$h1.innerHTML = "Questão 4"
	$label1.innerHTML = "Quantidade de números:"
	$label2.innerHTML = "Valor mínimo:"
	$label3.innerHTML = "Valor máximo:"
	$input1.type = "valor"
	$input2.type = "valor"
	$input3.type = "valor"
    $botao.innerHTML = "Calcular"
	
    /* Estilização */
    $q4.style.fontWeight = "bold"

    $label1.style.display = "block"
    $label1.style.marginTop = "5px"

    $label2.style.display = "block"
    $label2.style.marginTop = "5px"

    $label3.style.display = "block"
    $label3.style.marginTop = "5px"

    $input1.style.marginTop = "5px"
    $input2.style.marginTop = "5px"
    $input3.style.marginTop = "5px"

    $botao.style.display = "block"
	$botao.style.padding= "10px 62px"
	$botao.style.margin= "10px 0px"

	$q4.appendChild($h1)
	$q4.appendChild($label1)
	$q4.appendChild($input1)
	$q4.appendChild($label2)
	$q4.appendChild($input2)
	$q4.appendChild($label3)
	$q4.appendChild($input3)
	$q4.appendChild($botao)
	
	$botao.onclick = () => {

		if($input1.value === "" || $input2.value === "" || $input3.value === ""){
			window.alert("Erro: Os campos não podem ser vazios!")
		} else if($input2.value > $input3.value){
			window.alert("Erro: Valor mínimo precisa ser menor que valor máximo!")
		} else{
			$somaMinimoMaximo = $input2.value + $input3.value
			if($input1.value > $somaMinimoMaximo){
				window.alert("Erro: Quantidade de números deve ser menor que a soma de valor mínimo e valor máximo!")
			} else{

				let $array = []
				let $numerosAleatorios = 0

				for(var i = 0; i < $input1.value; i++){
					$minimo = Math.ceil($input2.value)
					$maximo = Math.floor($input3.value)
					$numerosAleatorios = Math.floor(Math.random() * ($maximo - $minimo + 1)) + $minimo
					$numerosAleatorios = parseInt($numerosAleatorios)

					if(!$array.includes($numerosAleatorios)){
						$array.push(" " + $numerosAleatorios)
					} 
				}

				$p.innerHTML =  $array.sort(function(a,b){
					return a-b
				})

				$q4.appendChild($p)
			}
		}
	}
}

q4();