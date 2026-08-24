async function carregarFuncionarios() {

    const tabela = document.getElementById("listaFuncionario");

    if (!tabela) {
        return;
    }

    try {

        const resposta = await fetch("/funcionario");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar alunos.");
        }

        const funcionarios = await resposta.json();

        tabela.innerHTML = "";

        funcionarios.forEach(funcionarios => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${funcionarios.id}</td>
                <td>${funcionarios.nome}</td>
                <td>${funcionarios.cpf}</td>
                <td>${funcionarios.email}</td>
                <td>${funcionarios.cargo}</td>
                <td>${funcionarios.setor}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar alunos:", erro);

        tabela.innerHTML = `
            <tr>
                <td colspan="8">
                    Erro ao carregar os Funcionarios.
                </td>
            </tr>
        `;
    }
}

carregarFuncionarios();