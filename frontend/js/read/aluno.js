async function carregarAlunos() {

    const tabela = document.getElementById("listaAlunos");

    if (!tabela) {
        return;
    }

    try {

        const resposta = await fetch("/alunos");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar alunos.");
        }

        const alunos = await resposta.json();

        tabela.innerHTML = "";

        alunos.forEach(aluno => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.email}</td>
                <td>${aluno.data_nascimento}</td>
                <td>${aluno.telefone}</td>
                <td>${aluno.ra}</td>
                <td>${aluno.cidade}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar alunos:", erro);

        tabela.innerHTML = `
            <tr>
                <td colspan="8">
                    Erro ao carregar os alunos.
                </td>
            </tr>
        `;
    }
}

carregarAlunos();