function q5()
{
	let $q5 = document.querySelector("#q5")
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
	$h1.innerHTML = "Questão 5"
	$label1.innerHTML = "Lado A:"
    $label2.innerHTML = "Lado B:"
    $label3.innerHTML = "Lado C:"
    $input1.type = "número"
    $input2.type = "número"
    $input3.type = "número"
    $botao.innerHTML = "Calcular"

    /* Estilização */
    $q5.style.fontWeight = "bold"

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
	
	
	$q5.appendChild($h1)
	$q5.appendChild($label1)
	$q5.appendChild($input1)
	$q5.appendChild($label2)
	$q5.appendChild($input2)
	$q5.appendChild($label3)
	$q5.appendChild($input3)
	$q5.appendChild($botao)
	$q5.appendChild($p)
	
	$botao.onclick = ()=>
	{
		$ladoA = $input1.value
		$ladoB = $input2.value
		$ladoC = $input3.value

		if($ladoA == 0 || $ladoB == 0 || $ladoC == 0){
			window.alert("NÃO É TRIÂNGULO")
		} else{
			if($ladoA == $ladoB && $ladoB == $ladoC){
				$p.innerHTML = "TRIÂNGULO EQUILÁTERO!"
			} else if($ladoA == $ladoB && $ladoB != $ladoC){
				$p.innerHTML = "TRIÂNGULO ISÓSCELES!"
			} else{
				$p.innerHTML = "TRIÂNGULO ESCALENO!"
			}
		}
	}
}

q5()