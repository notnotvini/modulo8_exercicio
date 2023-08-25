const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumTelefone = document.getElementById('num-telefone');

    if (contatos.includes(inputNumTelefone.value)) {
        alert(`O telefone: ${inputNumTelefone.value} já foi adicionado anteriormente.`);
    } else {
        contatos.push(inputNumTelefone.value);
        telefones.push(parseFloat(inputNumTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumTelefone.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaContatos() {
    
    document.getElementById('total-contatos').innerHTML = telefones.length;

}
