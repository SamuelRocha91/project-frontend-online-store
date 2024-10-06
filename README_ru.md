# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />Проект FrontEnd Интернет-магазин <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![Предварительный просмотр приложения](./public/onlineStore.gif)

Этот проект был разработан в модуле FrontEnd курса веб-разработки в Trybe. Проект включал использование Javascript, CSS и HTML через фреймворк React. Были обработаны файлы в папке `src`, созданы компоненты, маршруты и страницы. Разработка проводилась в команде с использованием гибких методологий.

<details>
  <summary><h2>🚀 Используемые Технологии</h2></summary>

  - **React**: Для создания пользовательского интерфейса.
  - **Redux**: Для управления состоянием приложения.
  - **React Router**: Для навигации между страницами.
  - **CSS**: Для стилизации приложения.
  - **Docker**: Для контейнеризации приложения.

</details>

<details>
  <summary><h2>🛠️ Развиваемые Навыки</h2></summary>

  - Использование гибких методологий (Trello и Scrum);
  - Реализация маршрутов с помощью React Router;
  - Логика программирования;
  - Управление состоянием с помощью Redux;
  - Создание компонентов React.

</details>

<details>
  <summary><h2>📂 Структура Кода</h2></summary>

  Структура маршрутов приложения управляется компонентом `App`. Вот пример реализации маршрутов:

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
  <summary><h2>🐳 Запуск Приложения с Docker</h2></summary>

  Для запуска приложения с помощью Docker выполните следующие шаги:

  1. **Собрать образ Docker**:

     В каталоге проекта выполните следующую команду, чтобы создать образ Docker:

     ```bash
     docker build -t react_store .
     ```

  2. **Запустить контейнер**:

     После сборки образа вы можете запустить контейнер из него с помощью следующей команды:

     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  3. **Доступ к Приложению**:

     После запуска контейнера приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

</details>

<details>
  <summary><h2>🔗 Другие Проекты</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ru.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ru.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ru.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ru.md)

</details>