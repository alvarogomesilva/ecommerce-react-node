import { create } from "zustand";

type CharacteristicsStore = {
  selected: Record<string, string>; // Ex: { Cor: "2", Tamanho: "4" }
  setSelected: (name: string, value: string) => void;
  clearSelected: () => void;
};

export const useProductCharacteristicsStore = create<CharacteristicsStore>((set) => ({
  selected: {},
  setSelected: (name, value) =>
    set((state) => ({
      selected: {
        ...state.selected,
        [name]: value,
      },
    })),
  clearSelected: () => set({ selected: {} }),
}));
