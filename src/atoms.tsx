import { atom, selector } from "recoil";

export const theme = atom({
  key: "isDark",
  default: false,
});

export const everyCategories = atom({
  key: "everyCategories",
  default: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories") as any)
    : ["SCHEDULED", "DOING", "DONE"],
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryNow = atom<string>({
  key: "categoryNow",
  default: localStorage.getItem("categoryNow")
    ? JSON.parse(localStorage.getItem("categoryNow") as any)
    : "SCHEDULED",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: localStorage.getItem("toDos")
    ? JSON.parse(localStorage.getItem("toDos") as any)
    : [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryNow);
    return toDos.filter((item) => item.category === category);
  },
});
