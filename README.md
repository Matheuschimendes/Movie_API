Aqui está um README atualizado que inclui a explicação para o novo componente `Details`:

```markdown
# Movie App

Este é um aplicativo de filmes que consome a API do The Movie Database (TMDb) para exibir uma lista de filmes populares. Os usuários podem clicar em um filme para ver mais detalhes.

## Funcionalidades

- Exibir uma lista de filmes populares.
- Permitir que os usuários cliquem em um filme para ver mais detalhes.

## Tecnologias Utilizadas

- React
- React Router
- TMDb API

## Instalação

Siga estas etapas para configurar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/movie-app.git
   cd movie-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

O aplicativo deve estar rodando em [http://localhost:3000](http://localhost:3000).

## Uso

Acesse a página inicial para ver uma lista de filmes populares. Clique em um filme para ver mais detalhes.

### Explicação

#### Componente Home

- **Imports**: Importa os componentes de estilo (`Container`, `MovieList`, `Movie`), hooks do React (`useState`, `useEffect`), e `Link` do React Router.
- **Estado e Efeito**: Usa `useState` para armazenar a lista de filmes e `useEffect` para buscar os filmes populares na API do TMDb quando o componente é montado.
- **Renderização**: Mapeia a lista de filmes para exibir cada filme como um item clicável. Cada item contém um link para a página de detalhes do filme e exibe a imagem do poster do filme.

#### Componente Details

- **Imports**: Importa hooks do React (`useState`, `useEffect`), `Link` e `useParams` do React Router, e `Container` do estilo.
- **Estado e Efeito**: Usa `useState` para armazenar os detalhes do filme e `useEffect` para buscar os detalhes do filme na API do TMDb quando o componente é montado ou o id do filme muda.
- **Renderização**: Exibe os detalhes do filme, incluindo a imagem do poster, título, sinopse e data de lançamento. Inclui um botão para voltar à página inicial.

## Contribuição

Se você quiser contribuir para este projeto, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Instruções Adicionais

1. **Substitua `seu-usuario` na URL do repositório pelo nome de usuário do GitHub que você está usando.
2. **Garanta que a chave de API (`APIKey`) esteja corretamente configurada no arquivo `../../config/key`.

Este README deve fornecer uma base sólida para os usuários e desenvolvedores que desejam entender e colaborar com seu projeto.