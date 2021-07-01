function q3(){

    let $q3 = document.querySelector("#q3")
	let $h1 = document.createElement("h1")
    let $p1 = document.createElement("p1")
    let $botao = document.createElement("button")
    let $tabela = document.createElement("table")
    let $tr = document.createElement("tr")
    let $tdAluno = document.createElement("td")
    let $tdNota = document.createElement("td")
    let $tdResultado = document.createElement("td")

    $h1.innerHTML = "Questao 3"
    $p1.innerHTML = "Clique no botão abaixo para gerar o relatório:"
    $botao.innerHTML = "Criar Relatório"

    $q3.style.fontWeight = "bold"
    $tabela.style.fontSize = "20px"
    $tr.style.margin= "1px solid black"
    $p1.style.display = "block"
    $p1.style.maxWidth= "210px"
    $botao.style.display = "block"
	$botao.style.padding= "10px 42px"
	$botao.style.margin= "10px 0px";

    $tabela.appendChild($tr)
    $tr.appendChild($tdAluno)
    $tr.appendChild($tdNota)
    $tr.appendChild($tdResultado)
    $q3.appendChild($h1)
    $q3.appendChild($p1)
    $q3.appendChild($botao)
    $q3.appendChild($tabela)

    let $alunosAprovados = []
    let $alunosReprovados = []
    let $porcentoAprovados
    let $porcentoReprovados

    $botao.onclick = function(){
        if($alunosAprovados.length > 0){
            return
        } else{
            console.log($alunosAprovados.length)
            function Aluno($nrDoAluno, $notaDoAluno){
                this.$nrDoAluno = $nrDoAluno
                this.$notaDoAluno = $notaDoAluno
            }
    
            let $nota = 0
            let $lista = []
            let $totalDeAlunos = 20
    
            for(var i = 1; i <= $totalDeAlunos; i++){
                $nota = (Math.random() * 100) + 1
                $nota = Math.round($nota)
                $lista.push(new Aluno(i, $nota))
            }

            $tdAluno.innerHTML = "Aluno"
            $tdNota.innerHTML = "Nota"
            $tdResultado.innerHTML = "Resultado"
    
            for(var j = 0; j <= $lista.length; j++){
                let $tr2 = document.createElement("tr")
    
                let $alunos = $lista[j]
    
                if($alunos){
                    let $td1 = document.createElement("td")
                    let $td2 = document.createElement("td")
                    let $td3 = document.createElement("td")
    
                    $td1.innerHTML = "Aluno " + $alunos.$nrDoAluno
                    $td2.innerHTML = $alunos.$notaDoAluno

                    if($alunos.$notaDoAluno >= 70){
                        $td3.innerHTML = "APROVADO!"
                        $alunosAprovados.push($td3)
                    } else{
                        $td3.innerHTML = "REPROVADO!"
                        $alunosReprovados.push($td3)
                    }

                    $tr2.appendChild($td1)
                    $tr2.appendChild($td2)
                    $tr2.appendChild($td3)
                }

                $tabela.appendChild($tr2)
            }

            let $td4 = document.createElement("td")
            let $td5 = document.createElement("td")

            $porcentoAprovados = ($alunosAprovados.length / $totalDeAlunos) * 100
            $porcentoReprovados = ($alunosReprovados.length / $totalDeAlunos) * 100

            $td4.innerHTML = "APROVADOS: " + $alunosAprovados.length + " (" +  Math.round($porcentoAprovados) + "%) | "
            $td5.innerHTML = "REPROVADOS: " + $alunosReprovados.length + " (" + Math.round($porcentoReprovados) + "%)"

            let $tr3 = document.createElement("tr")
            $tr3.appendChild($td4)
            $tr3.appendChild($td5)
            $tabela.appendChild($tr3)
        }
    }
}

q3();