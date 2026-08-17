import os

import mysql.connector
from dotenv import load_dotenv

load_dotenv()


def criar_conexao():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )


if __name__ == "__main__":
    conexao = criar_conexao()

    if conexao.is_connected():
        print("Conexão realizada com sucesso!")

    conexao.close()