import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import News from '../pages/News'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/news', name: 'News', component: News, props: true},
    ]
})