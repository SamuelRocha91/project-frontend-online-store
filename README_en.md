# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />Project FrontEnd Online Store <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Application Preview](./public/onlineStore.gif)

This project was developed in the FrontEnd module of the Web Development course at Trybe. The project involved using Javascript, CSS, and HTML through the React framework. It manipulated the files in the `src` folder, creating components, routes, and pages. The development was carried out in a team using agile methodologies.

<details>
  <summary><h2>🚀 Technologies Used</h2></summary>

  - **React**: For creating the user interface.
  - **Redux**: For managing the application state.
  - **React Router**: For navigation between pages.
  - **CSS**: For styling the application.
  - **Docker**: For containerizing the application.

</details>

<details>
  <summary><h2>🛠️ Skills Developed</h2></summary>

  - Use of agile methodologies (Trello and Scrum);
  - Implementation of routes with React Router;
  - Programming logic;
  - State management with Redux;
  - Creation of React components.

</details>

<details>
  <summary><h2>📂 Code Structure</h2></summary>

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

</details>

<details>
  <summary><h2>🐳 Running the Application with Docker</h2></summary>

  To run the application using Docker, follow the steps below:

  1. **Build the Docker image**:

     In the project directory, run the following command to create the Docker image:

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

</details>

<details>
  <summary><h2>🔗 Other Projects</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_en.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_en.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_en.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_en.md)

</details>