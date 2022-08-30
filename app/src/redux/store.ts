import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './features/task';
import modeReducer from './features/mode';
export const store = configureStore({
  reducer: {
    task: taskReducer,
    mode: modeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;