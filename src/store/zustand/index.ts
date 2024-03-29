import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import storage from '../taro-persist';

interface State {
  token: string;
}

interface Action {
  setToken: (token: string) => void;
}

const useStore = create(
  persist<State & Action>(
    (set) => ({
      token: '',
      setToken: (token: string) => set({ token })
    }),
    {
      name: 'userToken',
      storage: createJSONStorage(() => storage),
    }
  )
);

export default useStore;
