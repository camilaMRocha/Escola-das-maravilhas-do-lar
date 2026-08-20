```markdown
# 🚀 Guia de Instalação e Execução do Projeto (FastAPI)

Este guia contém o passo a passo para clonar, configurar o ambiente virtual, instalar as dependências e rodar a aplicação localmente.

---

## 📋 Pré-requisitos

- **Git** instalado na sua máquina
- **Python 3.10+** instalado

---

## 🛠️ Passo a Passo

### 1. Clonar o repositório
Substitua a URL abaixo pela URL do repositório do seu projeto:

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio

```

---

### 2. Criar o ambiente virtual

```bash
python -m venv venv

```

---

### 3. Ativar o ambiente virtual

* **Windows (PowerShell / Prompt de Comando):**
```bash
venv\Scripts\activate

```


* **Linux / macOS (caso necessário):**
```bash
source venv/bin/activate

```



---

### 4. Atualizar o `pip` (Opcional, mas recomendado)

```bash
python -m pip install --upgrade pip

```

---

### 5. Instalar as dependências

Instale o FastAPI com a CLI padrão (`fastapi[standard]`) e os demais pacotes necessários:

```bash
pip install "fastapi[standard]" uvicorn mysql-connector-python python-dotenv email-validator

```

---

### 6. Executar o servidor de desenvolvimento

Inicie o servidor utilizando o comando de desenvolvimento do FastAPI:

```bash
fastapi dev backend/main.py

```

---

## 🌐 Acesso à API e Documentação

Após iniciar o servidor, abra o navegador nos seguintes endereços:

* **Aplicação:** [http://127.0.0.1:8000](https://www.google.com/search?q=http://127.0.0.1:8000)
* **Documentação Swagger (Swagger UI):** [http://127.0.0.1:8000/docs](https://www.google.com/search?q=http://127.0.0.1:8000/docs)
* **Documentação Redoc:** [http://127.0.0.1:8000/redoc](https://www.google.com/search?q=http://127.0.0.1:8000/redoc)

```

```