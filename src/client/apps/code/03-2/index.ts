import { bootstrap } from '@helpers/bootstrap';
import { RootState } from './3-connection/RootState';
import { hydrateStore } from './3-connection/Store';
import App from './4-presentation/App.vue';

const store = hydrateStore(window.__INITIAL_STATE__);

bootstrap<RootState>(App, { store });
