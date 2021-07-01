function q6(){

	let $q6 = document.querySelector("#q6")
	let $h1 = document.createElement("h1")
	let $p = document.createElement("p")
	let $botao_login = document.createElement("button")
	let $botao_cadastro = document.createElement("button")
	let $botao_voltar = document.createElement("button")
	let $label1 = document.createElement("label")
	let $label2 = document.createElement("label")
	let $input1 = document.createElement("input")
	let $input2 = document.createElement("input")
	let $validate_cadastro = false
	let $validate_login = false

    /* HTML */
	$h1.innerHTML = "Questão 6"	
	$botao_login.innerHTML = "Logar"	
	$botao_cadastro.innerHTML = "Cadastrar"
	$botao_voltar.innerHTML = "Voltar"	
	/* $input1.type = "texto"
    $input2.type = "senha" */

    /* Estilização */
    $q6.style.fontWeight = "bold"

	$label1.style.display = "none"
    $label1.style.marginTop = "5px"

	$label2.style.display = "none"
    $label2.style.marginTop = "5px"

    $input1.style.display = "none"	
    $input1.style.marginTop = "5px"
	
    $input2.style.display = "none"
	$input2.style.marginTop = "5px"
	
    $p.style.maxWidth= "220px"
    $p.style.fontSize = "20px"

    $botao_login.style.display = "block"
    $botao_login.style.padding= "10px 70px"
	$botao_login.style.margin= "10px 0px"

    $botao_cadastro.style.display = "block"
    $botao_cadastro.style.padding= "10px 58px"
	$botao_cadastro.style.margin= "10px 0px"

    $botao_voltar.style.display = "none"
    $botao_voltar.style.padding= "10px 70px"
	$botao_voltar.style.margin= "10px 0px"


	$q6.appendChild($h1)
	$q6.appendChild($p)
	$q6.appendChild($label1)
	$q6.appendChild($input1)
	$q6.appendChild($label2)
	$q6.appendChild($input2)
	$q6.appendChild($botao_login)
	$q6.appendChild($botao_cadastro)
	$q6.appendChild($botao_voltar)

    function limpar(el){
        while(el.firstChild) {
            el.removeChild(el.firstChild)
        }
        
    }

    //Cenários
	function cenarioInicial(){
		$validate_cadastro = false
		$validate_login = false

        //$input1.value = ""
		//$input2.value = ""

        limpar($label1)
        limpar($label2)
        limpar($p)
        //limpar($input1)
        //limpar($input2)
		//$label1.style.display = "none"
		//$label2.style.display = "none"

		$input1.style.display = "none"
		$input2.style.display = "none"

        $botao_login.style.display = "block"
		$botao_cadastro.style.display = "block"
		$botao_voltar.style.display = "none"
	}

	function cenario_cadastro(){

        $label1.innerHTML = "Cadastre seu nome de usuário:";
        $label2.innerHTML = "Cadastre sua senha:";
        $botao_voltar.innerHTML = "Voltar"
		
		$label1.style.display = "block";
		$label2.style.display = "block";
		$input1.style.display = "block";
		$input2.style.display = "block";
        $botao_login.style.display = "none";
		$botao_voltar.style.display = "block";
	}

	function cenario_login(){

        $label1.innerHTML = "Login:";
        $label2.innerHTML = "Senha:";
        $botao_voltar.innerHTML = "Voltar"

		$label1.style.display = "block";
		$label2.style.display = "block";
		$input1.style.display = "block";
		$input2.style.display = "block";
        $botao_cadastro.style.display = "none";
		$botao_voltar.style.display = "block";
	}

	function cenario_logado(){
		
		$p.innerHTML = "Olá " + $input1.value + "! Seja bem vindo(a)! Você está logado(a)!"

        limpar($label1)
        limpar($label2)
        $input1.style.display = "none"
		$input2.style.display = "none"
		
		$botao_voltar.style.display = "block"
		$botao_voltar.innerHTML = "Sair"
		$botao_login.style.display = "none"
	}

	$botao_cadastro.onclick = () =>	{

		cenario_cadastro()

		if($validate_cadastro){
			if($input1.value !== "" && $input2.value !== ""){

				localStorage.setItem($input1.value, $input2.value)

				window.alert("Usuario cadastrado com sucesso!")

				cenarioInicial()

				return
			} else{
				window.alert("Preencha todos os campos!")
			}
		}
		$validate_cadastro = true
        $input1.value=""
        $input2.value=""
	}
	
	$botao_login.onclick = () => {

		cenario_login()

		if($validate_login){

			let usuario = localStorage.getItem($input1.value)

			if(usuario === $input2.value){
				cenario_logado()
			} else{
				window.alert("Tem algo de errado! Usuário e/ou senha incorretos.")

				cenarioInicial()

				return
			}
		}
		$validate_login = true
	}

	$botao_voltar.onclick = () => {

		cenarioInicial()
	}
}

q6();