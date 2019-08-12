import { applyMiddleware, createStore, Store } from 'redux';
import logger from 'redux-logger'
import { rootReducer, RootState } from './root';


const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    return createStore(rootReducer, initialState,applyMiddleware(logger));
};

const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('./root', () =>
        store.replaceReducer(require('./root').rootReducer)
    );
}

export default store;
