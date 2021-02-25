import { bootstrap } from '@helpers/bootstrap';
import { router } from './2-connection/Router';
import { RootState } from './2-connection/RootState';
import { hydrateStore } from './2-connection/Store';
import App from './3-presentation/App.vue';

const store = hydrateStore(window.__INITIAL_STATE__);

bootstrap<RootState>(App, { store, router });
