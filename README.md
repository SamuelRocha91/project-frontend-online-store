# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Project FrontEnd Online Store <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />


## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Preview da aplicação](./public/onlineStore.gif)

Este projeto foi desenvolvido no módulo de FrontEnd do curso de Desenvolvimento Web da Trybe. O projeto envolveu o uso de Javascript, CSS e HTML através do framework React. Nele foram manipulados os arquivos pertencentes à pasta `src`, com a criação de componentes, rotas e páginas. O desenvolvimento foi realizado em equipe utilizando metodologias ágeis.

## Tecnologias Utilizadas

- **React**: Para a criação da interface de usuário.
- **Redux**: Para o gerenciamento do estado da aplicação.
- **React Router**: Para a navegação entre páginas.
- **CSS**: Para a estilização da aplicação.
- **Docker**: Para a containerização da aplicação.

## Competências Desenvolvidas

- Uso de metodologias ágeis (Trello e Scrum);
- Implementação de rotas com React Router;
- Lógica de programação;
- Manipulação de estado com Redux;
- Criação de componentes React.

## Estrutura do Código

A estrutura de rotas da aplicação é gerenciada pelo componente `App`. Aqui está um exemplo da implementação das rotas:

```javascript
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/checkout" render={ (props) => <Checkout { ...props } /> } />
        <Route path="/details/:product" render={ (props) => <Details { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
```

## Execução da Aplicação com Docker

Para rodar a aplicação utilizando Docker, siga os passos abaixo:

1. **Construir a imagem Docker**:

   No diretório do projeto, execute o seguinte comando para criar a imagem Docker:

   ```bash
   docker build -t react_store .
   ```

2. **Rodar o container**:

   Após a construção da imagem, você pode rodar um container a partir dela com o seguinte comando:

   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

3. **Acessar a Aplicação**:

   Após iniciar o container, a aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Outros projetos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi)
- 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex)