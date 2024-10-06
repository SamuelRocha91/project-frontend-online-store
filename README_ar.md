# <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />مشروع المتجر الإلكتروني للواجهة الأمامية <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" alt="Trybe Logo" width="42" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![معاينة التطبيق](./public/onlineStore.gif)

تم تطوير هذا المشروع في وحدة الواجهة الأمامية في دورة تطوير الويب في Trybe. المشروع يتضمن استخدام JavaScript و CSS و HTML من خلال إطار عمل React. تم التعامل مع الملفات التابعة لمجلد `src`، مع إنشاء مكونات وطرق وصفحات. تم تنفيذ التطوير في فريق باستخدام منهجيات مرنة.

<details>
  <summary><h2>🚀 التقنيات المستخدمة</h2></summary>

  - **React**: لإنشاء واجهة المستخدم.
  - **Redux**: لإدارة حالة التطبيق.
  - **React Router**: للتنقل بين الصفحات.
  - **CSS**: لتصميم التطبيق.
  - **Docker**: لحاوية التطبيق.

</details>

<details>
  <summary><h2>🛠️ المهارات المكتسبة</h2></summary>

  - استخدام المنهجيات المرنة (Trello و Scrum)؛
  - تنفيذ الطرق باستخدام React Router؛
  - منطق البرمجة؛
  - إدارة الحالة باستخدام Redux؛
  - إنشاء مكونات React.

</details>

<details>
  <summary><h2>📂 هيكل الكود</h2></summary>

  هيكل الطرق في التطبيق يتم إدارته بواسطة مكون `App`. إليك مثال على تنفيذ الطرق:

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
  <summary><h2>🐳 تشغيل التطبيق باستخدام Docker</h2></summary>

  لتشغيل التطبيق باستخدام Docker، اتبع الخطوات أدناه:

  1. **بناء صورة Docker**:

     في دليل المشروع، نفذ الأمر التالي لإنشاء صورة Docker:

     ```bash
     docker build -t react_store .
     ```

  2. **تشغيل الحاوية**:

     بعد بناء الصورة، يمكنك تشغيل حاوية منها بالأمر التالي:

     ```bash
     docker run -d --name react -p 3000:3000 react_store
     ```

  3. **الوصول إلى التطبيق**:

     بعد بدء الحاوية، سيكون التطبيق متاحًا على [http://localhost:3000](http://localhost:3000).

</details>

<details>
  <summary><h2>🔗 مشاريع أخرى</h2></summary>

  - 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
  - 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
  - 👛 [Expense organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
  - 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)

</details>
