var titulo = document.querySelector('h2')
titulo.textContent = "Lista de alunos"

var botaoAdcionarAluno = document.querySelector("#btn-adiciona-aluno");

botaoAdcionarAluno.addEventListener('click', function() {
    //prevenir o comportamento padrao
    event.preventDefault();
    var form = document.querySelector('#form-adiciona-aluno');

    //guarda o value do input
    var nome = form.nome.value;
    var curso = form.curso.value;
    var nota = form.nota.value;
    var status = form.status.value.toUpperCase();

    //criar tr
    var alunoTr = document.createElement('tr');

    //criar td's
    var nomeTd = document.createElement('td');
    var cursoTd = document.createElement('td');
    var notaTd = document.createElement('td');
    var statusTd = document.createElement('td');
    var removeTd = document.createElement('td');

    //criar button remove
    var buttonRemove = document.createElement('button');

    //inserir texto no button
    buttonRemove.textContent = 'Remover';

    //setando atributo id no button
    buttonRemove.setAttribute('id', 'remove');

    //montar os td's com o textContent
    nomeTd.textContent = nome;
    cursoTd.textContent = curso;
    notaTd.textContent = nota;
    statusTd.textContent = status;

    //montar tr com os td's dentro
    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(cursoTd);
    alunoTr.appendChild(notaTd);
    alunoTr.appendChild(statusTd);

    //montar tr com o td remove
    alunoTr.appendChild(removeTd);

    //montar td com o buttonRemove
    removeTd.appendChild(buttonRemove);

    //acessar tabela de alunos
    var tabelaAlunos = document.querySelector('#tabela-alunos');

    //criar a tabela com o appendchild adicionando um novo aluno
    tabelaAlunos.appendChild(alunoTr);

    //condicional da nota de aprovado ou reprovado
    if (nota >= 6) {
        notaTd.classList.add('aprovado');
    } else {
        notaTd.classList.add('Reprovado')
    }

    if (status == 'ATIVO') {
        statusTd.classList.add('aprovado');
    } else if (status == 'INATIVO') {
        statusTd.classList.add('reprovado');
    }

    //add class btn remover
    $('table #remove').addClass('btn btn-outline-danger btn-sm');

    //limpar o form
    form.reset();
});

// remover item(aluno)
var tabela = document.querySelector('#remove');
//var tabela = document.getElementById('remove');

tabela.addEventListener('click', function(_event) {
    console.log(_event.target);

    _event.target.parentNode.classList.add('fadeOut');

    setTimeout(function() {
        _event.target.parentNode.parentNode.remove();
    }, 500);

});