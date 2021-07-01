function q2(){

    let $q2 = document.querySelector("#q2")
    let $h1 = document.createElement("h1")
    let $p1 = document.createElement("p1")
    let $input = document.createElement("input")
	let $botao = document.createElement("button")
	let $p2 = document.createElement("p2")
    
    /* HTML */
    $h1.innerHTML = "Questão 2";
    $p1.innerHTML = "Informe o valor para calcular o fatorial:"
    $input.type = "valor"
    $botao.innerHTML = "Calcular"

    /* Estilização */
    $q2.style.fontWeight = "bold"
    $h1.style.marginTop = "20px"

	$p1.style.display = "block"
    $p1.style.maxWidth= "210px"

    $p2.style.marginTop = "5px"
	$p2.style.fontSize = "20px"

    $input.style.marginRight = "10px"
	$input.style.marginTop = "5px"

    $botao.style.display = "block"
	$botao.style.padding= "10px 62px"
	$botao.style.margin= "10px 0px";
    
    $q2.appendChild($h1)
    $q2.appendChild($p1)
    $q2.appendChild($input)
    $q2.appendChild($botao)
    $q2.appendChild($p2)

    $botao.onclick = function(){
        if($input.value !== ""){
            var tempoInicial = Date.now();
            var fat = 1;
            var n = $input.value;
            for(var i = 1; i <= n; i++){
                fat *= i;
            }
            var tempoFinal = Date.now() - tempoInicial;
            $p2.innerHTML = "Resultado: " + n + "! = " + fat + " (" + tempoFinal + " milisegundos)";
            $p2.style.color = "black";
        } else{
            window.alert("Erro: Fórmula: n! \nInsira o valor de \"n\"")
            $p2.innerHTML = "Input Vazio! Atenção!!!"
        }
    }
}

q2()