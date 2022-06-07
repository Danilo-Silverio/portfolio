# Filmeo - Aplicativo de Streaming

Está cansado de ficar horas encarando telas tentando as achar os melhores filmes para assistir no seu tempo livre? O Filmeo é a solução, apresento a vocês o aplicativo que mostra somente os filmes e séries mais populares  do momento para curtir com sua família.

(Link surge)

Venha conhecer o <a href="filmeo.surge.sh">Filmeo.</a>

# Projeto

## 📑 Qual seu objetivo?

Usando a API de filmes gratuita themoviedb em sua versão 3, foi desenvolvido uma listagem dos filmes e séries mais populares do momento, consultando os endpoints `GET ${/movie/popular} & ${tv/popular}` para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes da opção selecionada deve ser exibida. Para acessar mais detalhes sobre nosso catálogo, foram utilizados os endpoints `GET {/movie/{movie_id}} &{tv/{tv_id}`. Para garantir que o usuário encontre o seu contéudo ideal, essa lista está paginada, podendo navegar entre páginas e escolher a melhor opção para você.

As referências utilizadas para desenvolvimento desse projeto foram:
- Case Front End Promobit Danilo-Silverio: <a href="https://github.com/future4code/moreira-Danilo-Silverio/tree/master/rodada-cases-semana1" target="_blanc">Danilo-Silverio GitHub</a> & <a href="https://case-frontend-promobit-danilo-silverio.surge.sh/" target="_blanc">Link Surge.</a>
- Case Front End Promobit: <a href="https://github.com/Promobit/front-end-challenge" target="_blanc">Promobit.</a>
- Design: <a href="https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End?node-id=16%3A1199" target="_blanc">Figma.</a> 

## 📚 Tecnologias & Bibliotecas utilizadas:

    - Reactjs
    - Styled-Components
    - Axios
    - API's Rest
    - Global State.
    - useState & useEffect.
    - Router
    - Material UI.
    - Componentização & Estrutura de Pastas.


## ✅ Desafios do Projeto

### `Funcionais`

* O usuário deve ter acesso a uma listagem dos filmes mais populares do dia.
* O usuário deve conseguir paginar a lista para encontrar novos filmes.
* O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem.
* A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa.

### `Não funcionais`

* O app deverá ser criado usando React.
* Na raiz do projeto, será necessário incluir um arquivo README md com as instruções para construir seu projeto localmente.
* Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.
* O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge.
* O app deverá ser responsivo

## 🛠️ Como faço rodar projeto?

### `git clone`

Clone o link https do projeto no GitHub para seu repositório local através do terminal utilizando o comando `git clone link do projeto`

### `npm install`

Após ter o repósitorio clonado em seu computador utilize o comando `npm install` para instalar todas suas dependências.

### `npm run start`

O comando `npm run start` serve para iniciar o projeto e verificar como ele renderiza em seu computador.

# Interface & Design

## Home

<div>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435294-8017ed1a-1232-4ffc-b456-d523651404ff.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435640-4b28609f-b396-4f71-8c63-40b7a15aa05b.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172435992-ebda05d7-bfc7-4532-9f1f-178c34f2adbc.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172437475-8d59e351-1df9-4d79-9e6e-ab2d342d3a22.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172437882-3139837d-edbb-4610-9b60-91537c4e2a0c.png"/>  
</div>

## Feed

<div>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172444584-37ce873e-12fd-4d16-8694-df19e480de3b.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172451860-36ce307e-9949-4fa4-84e8-83a925b971a4.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172452255-2c429e75-8f4e-4530-898c-c403be06b13c.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172452454-e73542d4-5230-4406-b4dd-c48e1edc3d67.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172453117-5490a1a5-7e7a-4520-9cd6-9b2fca97d2d4.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172454396-2b0e682f-a8ab-4009-9ddd-24580bb58d1a.png"/> 
</div>

## Página Filme

<div>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172444584-37ce873e-12fd-4d16-8694-df19e480de3b.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172451860-36ce307e-9949-4fa4-84e8-83a925b971a4.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172452255-2c429e75-8f4e-4530-898c-c403be06b13c.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172452454-e73542d4-5230-4406-b4dd-c48e1edc3d67.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172453117-5490a1a5-7e7a-4520-9cd6-9b2fca97d2d4.png"/>
   <img align="center"  height="300" width="900" src="https://user-images.githubusercontent.com/94642853/172454396-2b0e682f-a8ab-4009-9ddd-24580bb58d1a.png"/> 
</div>