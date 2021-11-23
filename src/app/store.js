import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga, { sagaMW } from './sagas';

const enhancers = composeWithDevTools(applyMiddleware(sagaMW));

const store = createStore(rootReducer, enhancers);
sagaMW.run(rootSaga);

export const dispatch = store.dispatch;
export default store;
