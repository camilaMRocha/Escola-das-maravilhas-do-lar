async function carregarprofessores() {

    const tabela = document.getElementById("listaProfessor");

    if (!tabela) {
        return;
    }

    try {

        const resposta = await fetch("/professor");

        if (!resposta.ok) {
            throw new Error("Erro ao buscar professor.");
        }

        const professores = await resposta.json();

        tabela.innerHTML = "";

        professores.forEach(professores => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${professores.id}</td>
                <td>${professores.nome}</td>
                <td>${professores.cpf}</td>
                <td>${professores.email}</td>
                <td>${professores.especialidade}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar alunos:", erro);

        tabela.innerHTML = `
            <tr>
                <td colspan="8">
                    Erro ao carregar os professores.
                </td>
            </tr>
        `;
    }
}

carregarprofessores();