# domme2
Установка

Vue 2 - npm install

need vue router - npm install vue-router,

need vue-material design - npm install vue-material --save

в main.js
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Картинки в src/assets/images
Основной css в src/assets/styles.css
Компоненты в src/components
Модальные окна в src/components/modals

2 layout файла 
MainLayout - основыне страницы
EmptyLayout - для регистрации

все пути к указаны в router/index.js


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
