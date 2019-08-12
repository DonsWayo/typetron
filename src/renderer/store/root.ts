import { CounterState, counterReducer } from './counter/index'
import { combineReducers } from 'redux';

export interface RootState {
    counter: CounterState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer
});


export default {rootReducer};