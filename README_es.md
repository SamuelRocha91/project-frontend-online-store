# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />Proyecto FrontEnd Tienda en Línea <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/onlineStore.gif)

Este proyecto fue desarrollado en el módulo de FrontEnd del curso de Desarrollo Web de Trybe. El proyecto involucró el uso de Javascript, CSS y HTML a través del framework React. Se manipularon los archivos en la carpeta `src`, creando componentes, rutas y páginas. El desarrollo se llevó a cabo en equipo utilizando metodologías ágiles.

<details>
  <summary><h2>🚀 Tecnologías Utilizadas</h2></summary>

  - **React**: Para la creación de la interfaz de usuario.
  - **Redux**: Para la gestión del estado de la aplicación.
  - **React Router**: Para la navegación entre páginas.
  - **CSS**: Para la estilización de la aplicación.
  - **Docker**: Para la containerización de la aplicación.

</details>

<details>
  <summary><h2>🛠️ Habilidades Desarrolladas</h2></summary>

  - Uso de metodologías ágiles (Trello y Scrum);
  - Implementación de rutas con React Router;
  - Lógica de programación;
  - Gestión del estado con Redux;
  - Creación de componentes React.

</details>

<details>
  <summary><h2>📂 Estructura del Código</h2></summary>

  La estructura de rutas de la aplicación es gestionada por el componente `App`. Aquí hay un ejemplo de la implementación de rutas:

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
  <summary><h2>🐳 Ejecución de la Aplicación con Docker</h2></summary>

  Para ejecutar la aplicación utilizando Docker, sigue los pasos a continuación:

  1. **Construir la imagen de Docker**:

     En el directorio del proyecto, ejecuta el siguiente comando para crear la imagen de Docker:

     ```bash
     docker build -t react_store .
     ```

  2. **Ejecutar el contenedor**:

     Después de construir la imagen, puedes ejecutar un contenedor a partir de ella con el siguiente comando:

     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  3. **Acceder a la Aplicación**:

     Después de iniciar el contenedor, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

</details>

<details>
  <summary><h2>🔗 Otros Proyectos</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)

</details>
