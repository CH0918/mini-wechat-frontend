import { create } from 'zustand';

interface State {
  count: number;
  increment: () => void;
}

const useStore = create<State>((set) => ({
  // 定义您的状态和操作
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
