import {createStore} from 'redux';
import { reducerFunc } from '../reducers/reducers';



export const store = createStore(reducerFunc)



