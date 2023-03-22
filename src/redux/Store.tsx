import {createStore, combineReducers} from 'redux';
import LoginReducer from './reducers/LoginReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const rootReducer = combineReducers({
   login : LoginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)