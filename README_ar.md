# <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" /> مشروع متجر الإنترنت الأمامي <img src="https://agenciars.com.br/wp-content/uploads/2022/06/Trybe.png" alt="Trybe Logo" width="52" height="30" />

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/project-frontend-online-store/blob/main/README_ar.md)

![معاينة التطبيق](./public/onlineStore.gif)

تم تطوير هذا المشروع في وحدة الواجهة الأمامية من دورة تطوير الويب في Trybe. شمل المشروع استخدام Javascript وCSS وHTML من خلال إطار React. تم التعامل مع الملفات الموجودة في مجلد `src`، مع إنشاء مكونات، ومسارات، وصفحات. تم تنفيذ التطوير في فريق باستخدام منهجيات مرنة.

## التقنيات المستخدمة

- **React**: لإنشاء واجهة المستخدم.
- **Redux**: لإدارة حالة التطبيق.
- **React Router**: للتنقل بين الصفحات.
- **CSS**: لتصميم التطبيق.
- **Docker**: لتجميع التطبيق في حاويات.

## المهارات التي تم تطويرها

- استخدام منهجيات مرنة (Trello وScrum)؛
- تنفيذ المسارات باستخدام React Router؛
- المنطق البرمجي؛
- معالجة الحالة باستخدام Redux؛
- إنشاء مكونات React.

## هيكل الكود

يتم إدارة هيكل المسارات في التطبيق بواسطة مكون `App`. إليك مثال على تنفيذ المسارات:

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

## تشغيل التطبيق باستخدام Docker

لتشغيل التطبيق باستخدام Docker، اتبع الخطوات التالية:

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

   بعد بدء تشغيل الحاوية، سيكون التطبيق متاحًا على [http://localhost:3000](http://localhost:3000).

## مشاريع أخرى

- ⚽ [Typescript FootBall API](https://github.com/SamuelRocha91/trybeFutebolClube/blob/main/README_ar.md)
- 🐉 [Trybers and Dragons](https://github.com/SamuelRocha91/trybeAndDragons/blob/main/README_ar.md)
- 🌶️ [Recipes App](https://github.com/SamuelRocha91/ProjectRecipesApp/blob/main/README_ar.md)
- 🎮 [Trivia](https://github.com/SamuelRocha91/trivia_game/blob/main/README_ar.md)
- 🪧 [Blogs Api](https://github.com/SamuelRocha91/BlogsApi/blob/main/README_ar.md)
- 👛 [Expense Organizer](https://github.com/SamuelRocha91/project-trybewallet/blob/main/README_ar.md)
- 🗡️ [Trybe Smith](https://github.com/SamuelRocha91/TrybeSmith/blob/main/README_ar.md)
- 🐣 [Pokedex](https://github.com/SamuelRocha91/pokedex/blob/main/README_ar.md)
