import { createApp,provide,h } from 'vue'
import App from './App.vue'
import {router} from './router/router.js'
import apolloclient from './apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'
const app = createApp({
    setup () {
      provide(DefaultApolloClient, apolloclient)
    },
    render: () => h(App),
  });
 app.use(router)
  app.mount('#app');

