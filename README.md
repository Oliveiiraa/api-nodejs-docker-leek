# API em Node.js para uso em Container Docker

## Objetivo

A ideia desse teste, é validar os conceitos de **Docker** e servidor, subindo um container com uma api simples em **Node.js**.


## Passos necessários
- Será necessário um servidor para subir esse container, a AWS possuí servidores a nível gratuito para utilização, denomidado de Free Tier AWS, então como primeiro passo será necessário subir uma instância ubuntu gratuíta para ser utilizada como servidor.

- Com a instância no ar, será necessário instalar o Docker na máquina

- Com o docker instalado na máquina (Se tiver dúvidas se ele está instalado, pode executar um `docker run hello-world`), será necessário clonar esse projeto, realizando um git clone do mesmo.

- Com o projeto clonado, será necessário criar uma imagem de execução do projeto, ou seja, um Dockerfile, e em seguida criado um docker-compose.yml, colocando o container no ar e expondo a porta 3000.

- Com o projeto no ar, basta acessar o IP:3000 no navegador, e verá uma resposta do GET executado no / da api.

- Finalizado, basta encaminhar o endereço IP para o discord (oliveiiraa)
