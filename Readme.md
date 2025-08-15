# Projeto API de Certificados

Bem-vindo à API de Certificados, um serviço RESTful completo para gerenciar dados relacionados a um sistema de ensino e certificação. Esta aplicação foi projetada para lidar com diversas entidades, como administradores, alunos, cursos, turmas e certificados.

---

## 📖 Sobre o Projeto

Esta API foi desenvolvida em **Node.js** com o framework **Express** e utiliza **PostgreSQL** como banco de dados. O projeto segue uma arquitetura modular, com controladores dedicados para cada entidade, facilitando a organização e a manutenção do código. A comunicação com o banco de dados é feita de forma simples e eficiente, utilizando o ORM **Sequelize**.

### Funcionalidades Principais

* **Gerenciamento Completo de Entidades:** A API suporta operações de **CRUD (Criar, Ler, Atualizar, Deletar)** para todas as entidades principais.
* **Conexão com Banco de Dados:** Conexão com o PostgreSQL utilizando `dotenv` para gerenciar as credenciais de forma segura.
* **Sincronização Automática:** O Sequelize cria e atualiza as tabelas do banco de dados automaticamente com base nos modelos definidos.
* **Estrutura Modular:** Código organizado em controladores, rotas e modelos, seguindo boas práticas de desenvolvimento.

---

## 🚀 Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework web para roteamento e criação da API.
* **Sequelize:** ORM (Object-Relational Mapping) para interagir com o PostgreSQL.
* **PostgreSQL:** Banco de dados relacional.
* **dotenv:** Para gerenciar variáveis de ambiente de forma segura.

---

## ⚙️ Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar o projeto localmente:

1.  **Pré-requisitos:** Certifique-se de ter o **Node.js** e o **PostgreSQL** instalados na sua máquina.
2.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [NOME_DO_SEU_PROJETO]
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Configure o Banco de Dados:**
    * Crie um banco de dados PostgreSQL.
    * Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente com suas credenciais:
        ```env
        DB_HOST=postgres://[USUARIO]:[SENHA]@[HOST]:[PORTA]/[NOME_DO_BANCO]
        DB_USER=[SEU_USUARIO_DO_BANCO]
        DB_PASSWORD=[SUA_SENHA]
        DB_NAME=[NOME_DO_SEU_BANCO]
        ```
    * **Importante:** A aplicação usará o `Sequelize` para criar as tabelas automaticamente ao ser iniciada, então não é necessário rodar scripts SQL manualmente.
5.  **Inicie o servidor:**
    ```bash
    node app.js
    ```
    A API estará rodando em `http://localhost:8080`.

---

## 💻 Documentação da API

A seguir estão todos os endpoints disponíveis. Todas as requisições devem ser feitas para a URL base `http://localhost:8080/api`.

### Endpoints de Admins

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/admin` | Cria um novo administrador. |
| `GET` | `/api/admin` | Lista todos os administradores. |
| `GET` | `/api/admin/:id` | Busca um administrador pelo ID. |
| `PUT` | `/api/admin/:id` | Altera um administrador pelo ID. |
| `DELETE`| `/api/admin/:id` | Exclui um administrador pelo ID. |

### Endpoints de Alunos

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/aluno` | Cria um novo aluno. |
| `GET` | `/api/aluno` | Lista todos os alunos. |
| `GET` | `/api/aluno/:id` | Busca um aluno pelo ID. |
| `PUT` | `/api/aluno/:id` | Altera um aluno pelo ID. |
| `DELETE`| `/api/aluno/:id` | Exclui um aluno pelo ID. |

### Endpoints de Categorias

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/categoria` | Cria uma nova categoria. |
| `GET` | `/api/categoria` | Lista todas as categorias. |
| `GET` | `/api/categoria/:id` | Busca uma categoria pelo ID. |
| `PUT` | `/api/categoria/:id` | Altera uma categoria pelo ID. |
| `DELETE`| `/api/categoria/:id` | Exclui uma categoria pelo ID. |

### Endpoints de Certificados

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/certificado` | Cria um novo certificado. |
| `GET` | `/api/certificado` | Lista todos os certificados. |
| `GET` | `/api/certificado/:id` | Busca um certificado pelo ID. |
| `PUT` | `/api/certificado/:id` | Altera um certificado pelo ID. |
| `DELETE`| `/api/certificado/:id` | Exclui um certificado pelo ID. |

### Endpoints de Cursos

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/curso` | Cria um novo curso. |
| `GET` | `/api/curso` | Lista todos os cursos. |
| `GET` | `/api/curso/:id` | Busca um curso pelo ID. |
| `PUT` | `/api/curso/:id` | Altera um curso pelo ID. |
| `DELETE`| `/api/curso/:id` | Exclui um curso pelo ID. |

### Endpoints de Endereços

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/endereco` | Cria um novo endereço. |
| `GET` | `/api/endereco` | Lista todos os endereços. |
| `DELETE`| `/api/endereco/:id`| Exclui um endereço pelo ID. |

### Endpoints de Instituições

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/instituicao` | Cria uma nova instituição. |
| `GET` | `/api/instituicao` | Lista todas as instituições. |
| `GET` | `/api/instituicao/:id` | Busca uma instituição pelo ID. |
| `PUT` | `/api/instituicao/:id` | Altera uma instituição pelo ID. |
| `DELETE`| `/api/instituicao/:id`| Exclui uma instituição pelo ID. |

### Endpoints de Turmas

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/turma` | Cria uma nova turma. |
| `GET` | `/api/turma` | Lista todas as turmas. |
| `DELETE`| `/api/turma/:id` | Exclui uma turma pelo ID. |