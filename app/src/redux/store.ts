import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './features/task';
import modeReducer from './features/mode';
import globalReducer from './features/globalState';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    mode: modeReducer,
    globalState: globalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;