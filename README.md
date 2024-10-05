# desafio-aibiz

O server roda na porta padrão 3000

Na rota index a api retornará um texto de Boas vindas a API


Fazendo uma requisão do tipo POST com a rota: http://localhost:3000/empresa e no body: {"name":"nome-empresa", "cnpj":"00.000.000/0001-00"} ,irá inserir uma empresa no Banco de Dados.

Fazendo uma requisição do tipo GET com a rota http://localhost:3000/empresa, irá listar as Empresas cadastradas no Banco de Dados.

Fazendo uma requisão do tipo POST com a rota: http://localhost:3000/cliente, no body: {"name":"nome-cliente", "company":["66ffcfa09ad31779b12b311c"],"phone":"(11) 91111-1111" }, inserirá um cliente no Banco de Dados.

Fazendo uma requisição do tipo GET com a rota http://localhost:3000/cliente, listará os clientes cadastrados no Banco de Dados.

Fazendo uma requisição do tipo GET com a rota http://localhost:3000/cliente/id: e com parâmetro o id do cliente, retornará as informações do cliente no Banco de Dados.

Fazendo uma requisição do tipo DELETE com a rota http://localhost:3000/cliente/id: com o id do cliente de parâmetro, excluirá o cliente correspondente ao id informado do Banco de Dados.

Fazendo uma requisição do tipo PATCH com a rota http://localhost:3000/cliente/id:, com o id do cliente de parâmetro e no body algum dos seus atributos, atualizará os atributos escolhidos do cliente no Banco de Dados.

Fazendo uma requisição do tipo GET com a rota http://localhost:3000/cliente/empresa/id:, com o id da empresa associado ao cliente de parâmetro, retornará todos os clientes associados aquela empresa.
