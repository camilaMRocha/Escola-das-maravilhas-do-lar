from datetime import date

from pydantic import BaseModel, EmailStr


class AlunoCreate(BaseModel):
    nome: str
    cpf: str
    email: EmailStr
    data_nascimento: date
    curso: str


class AlunoResponse(BaseModel):
    id: int
    nome: str
    cpf: str
    email: EmailStr
    data_nascimento: date
    curso: str

class ProfessorCreate(BaseModel):
    nome: str
    cpf: str
    email: EmailStr
    especialidade: str

class ProfessorResponse(BaseModel):
    id: int
    nome: str
    cpf: str
    email: EmailStr
    especialidade: str

class FuncionarioCreate(BaseModel):
    nome: str
    cpf: str
    email: EmailStr
    cargo: str
    setor: str

class FuncionarioResponse(BaseModel):
    id: int
    nome: str
    cpf: str
    email: EmailStr
    cargo: str
    setor: str