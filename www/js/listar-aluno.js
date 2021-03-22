var botaoCarregar = document.querySelector('#carregar');

// colocar cor em todos os botões excluir
$('table #remove').addClass('btn btn-outline-danger btn-sm');


botaoCarregar.onclick = function() {

    var url = "http://localhost:3000/alunos";

    fetch(url).then(function(resposta) {
        return resposta.json()
    }).then(function(dados) {
        console.log(dados);
        if (dados.length > 0) {
            var temp = "";

            //start loop
            dados.forEach(element => {
                temp += "<tr>";
                temp += "<td>" + element.nome + "</td>";
                temp += "<td>" + element.curso + "</td>";
                temp += "<td>" + element.nota + "</td>";
                temp += "<td>" + element.status + "</td>";
                temp += '<td><button id="remove">Remover</button></td></tr>';
            });
            document.querySelector('#dados').innerHTML = temp;
            $('table #remove').addClass('btn btn-outline-danger btn-sm');
        }
    });
}

$('table').on('click', '#remove', function() {
    $(this).closest('tr').remove();
});