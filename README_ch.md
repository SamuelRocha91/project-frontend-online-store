
# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />前端在线商店项目 <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![应用预览](./public/onlineStore.gif)

该项目是在 Trybe 的 Web 开发课程的前端模块中开发的。项目涉及使用 JavaScript、CSS 和 HTML，通过 React 框架进行开发。在 `src` 文件夹中处理了相关文件，创建了组件、路由和页面。开发采用了敏捷方法进行团队协作。

<details>
  <summary><h2>🚀 使用的技术</h2></summary>

  - **React**：用于创建用户界面。
  - **Redux**：用于管理应用程序状态。
  - **React Router**：用于页面间的导航。
  - **CSS**：用于应用程序的样式化。
  - **Docker**：用于应用程序的容器化。

</details>

<details>
  <summary><h2>🛠️ 发展技能</h2></summary>

  - 使用敏捷方法（Trello 和 Scrum）；
  - 使用 React Router 实现路由；
  - 编程逻辑；
  - 使用 Redux 管理状态；
  - 创建 React 组件。

</details>

<details>
  <summary><h2>📂 代码结构</h2></summary>

  应用程序的路由结构由 `App` 组件管理。以下是路由实现的示例：

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
  <summary><h2>🐳 使用 Docker 运行应用程序</h2></summary>

  要使用 Docker 运行应用程序，请按照以下步骤操作：

  1. **构建 Docker 镜像**：

     在项目目录中，运行以下命令以创建 Docker 镜像：

     ```bash
     docker build -t react_store .
     ```

  2. **运行容器**：

     构建镜像后，可以使用以下命令从镜像运行容器：

     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  3. **访问应用程序**：

     启动容器后，应用程序将在 [http://localhost:3000](http://localhost:3000) 上可用。

</details>

<details>
  <summary><h2>🔗 其他项目</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ch.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ch.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ch.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ch.md)

</details>
