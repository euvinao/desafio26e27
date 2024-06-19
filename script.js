document.getElementById('cep').addEventListener('blur', function() {
    let cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    } else {
        alert('CEP inválido.');
    }
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value.trim();
    let sobrenome = document.getElementById('sobrenome').value.trim();
    let email = document.getElementById('email').value.trim();

    if (nome === '' || sobrenome === '' || email === '') {
        alert('Todos os campos são obrigatórios.');
        event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('E-mail inválido.');
        event.preventDefault();
    } else {
        alert('Cadastro realizado com sucesso!');
    }
});
