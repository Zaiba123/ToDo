import { selector } from 'recoil';

const removeItem = selector({
    key: "removeItem",
    get: ({ get }) => {
      const items = get(itemsState);
      return items.splice(index,1);
    }
  });