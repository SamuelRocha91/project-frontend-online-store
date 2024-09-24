# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> Proyecto FrontEnd Tienda en Línea <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Vista previa de la aplicación](./public/onlineStore.gif)

Este proyecto fue desarrollado en el módulo de FrontEnd del curso de Desarrollo Web de Trybe. Implicó el uso de Javascript, CSS y HTML a través del framework React. Se manipularon los archivos de la carpeta `src`, creando componentes, rutas y páginas. El desarrollo se llevó a cabo en equipo utilizando metodologías ágiles.

## Tecnologías Utilizadas

- **React**: Para crear la interfaz de usuario.
- **Redux**: Para la gestión del estado de la aplicación.
- **React Router**: Para la navegación entre páginas.
- **CSS**: Para el estilo de la aplicación.
- **Docker**: Para la contenedorización de la aplicación.

## Habilidades Desarrolladas

- Uso de metodologías ágiles (Trello y Scrum);
- Implementación de rutas con React Router;
- Lógica de programación;
- Gestión del estado con Redux;
- Creación de componentes React.

## Estructura del Código

La estructura de rutas de la aplicación es gestionada por el componente `App`. Aquí hay un ejemplo de la implementación de las rutas:

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

## Ejecución de la Aplicación con Docker

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

## Otros Proyectos

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_es.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_es.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_es.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_es.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_es.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_es.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_es.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_es.md)
