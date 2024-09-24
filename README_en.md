# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Project FrontEnd Online Store <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Application Preview](./public/onlineStore.gif)

This project was developed in the FrontEnd module of the Web Development course at Trybe. It involved the use of Javascript, CSS, and HTML through the React framework. The files in the `src` folder were manipulated, creating components, routes, and pages. The development was carried out in a team using agile methodologies.

## Technologies Used

- **React**: For creating the user interface.
- **Redux**: For managing the application state.
- **React Router**: For navigation between pages.
- **CSS**: For styling the application.
- **Docker**: For containerizing the application.

## Skills Developed

- Use of agile methodologies (Trello and Scrum);
- Implementation of routes with React Router;
- Programming logic;
- State management with Redux;
- Creation of React components.

## Code Structure

The routing structure of the application is managed by the `App` component. Here is an example of the route implementation:

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

## Running the Application with Docker

To run the application using Docker, follow the steps below:

1. **Build the Docker image**:

   In the project directory, execute the following command to create the Docker image:

   ```bash
   docker build -t react_store .
   ```

2. **Run the container**:

   After building the image, you can run a container from it with the following command:

   ```bash
   docker run -d --name react -p 3000:3000 react_store
   ```

3. **Access the Application**:

   After starting the container, the application will be available at [http://localhost:3000](http://localhost:3000).

## Other Projects

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_en.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_en.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_en.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_en.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)
