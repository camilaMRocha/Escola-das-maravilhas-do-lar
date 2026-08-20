# Configuração do Ambiente FastAPI

Siga o passo a passo abaixo para configurar e executar o ambiente de desenvolvimento FastAPI.

## 1. Criar o Ambiente Virtual
Crie um ambiente virtual (`venv`) para isolar as dependências do projeto:
```bash
python -m venv venv
```

## 2. Ativar o Ambiente Virtual
Ative o ambiente virtual criado (comando para Windows):
```bash
venv\Scripts\activate
```
*(Se estiver usando Linux/macOS, utilize: `source venv/bin/activate`)*

## 3. Instalar as Dependências
Instale os pacotes necessários para rodar a aplicação:
```bash
pip install fastapi uvicorn mysql-connector-python python-dotenv email-validator "fastapi[standard]"
```
*(Nota: O pacote `email-validato` foi corrigido para o nome correto `email-validator`)*

## 4. Atualizar o Pip
Caso seja necessário, atualize o gerenciador de pacotes `pip` para a versão mais recente:
```bash
python.exe -m pip install --upgrade pip
```

## 5. Rodar a Aplicação
Inicie o servidor de desenvolvimento do FastAPI:
```bash
fastapi dev backend/main.py
```

## 6. Criar .env
Clone o .env.example para configurações do Banco De Dados:
```bash
cp .env .env.example
```

## 6. Configurar .env
Com o .env criado edite o "DB_PASSWORD=" com as senha do seu banco
```bash
DB_PASSWORD=suasenha
```