const formulario = document.getElementById("form-professor");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    mensagem.textContent = "";

    const professor = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        email: document.getElementById("email").value,
        especialidade: document.getElementById("especialidade").value
    };

    try {
        const resposta = await fetch("/professor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(professor)
        });

        const resultado = await resposta.json();

        if (resposta.ok) {
            mensagem.textContent = "Professor cadastrado com sucesso!";
            formulario.reset();
            console.log("Professor cadastrado:", resultado);
        } else {
            mensagem.textContent =
                "Erro ao cadastrar professor: " + obterMensagemErro(resultado);

            console.error("Erro da API:", resultado);
        }

    } catch (erro) {
        mensagem.textContent =
            "Não foi possível conectar ao servidor.";

        console.error("Erro de conexão:", erro);
    }
}); 


function obterMensagemErro(resultado) {
    if (!resultado.detail) {
        return "Dados inválidos.";
    }

    if (Array.isArray(resultado.detail)) {
        return resultado.detail
            .map(erro => {
                const campo = erro.loc?.[1];

                if (campo === "email") return "E-mail inválido.";
                if (campo === "nome") return "Nome inválido.";
                if (campo === "cpf") return "CPF inválido.";
                if (campo === "especialidade") return "Especialidade inválida.";

                return erro.msg;
            })
            .join(" ");
    }

    return resultado.detail;
}