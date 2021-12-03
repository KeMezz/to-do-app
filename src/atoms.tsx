import { atom, selector } from "recoil";

export const theme = atom({
    key: "isDark",
    default: false,
})

export enum categories {
    "SCHEDULED" = "SCHEDULED",
    "DOING" = "DOING",
    "DONE" = "DONE"
}

export interface IToDo {
    text: string,
    id: number,
    category: categories,
}

export const categoryNow = atom<categories>({
    key: "categoryNow",
    default: categories.SCHEDULED
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryNow);
        return toDos.filter(item => item.category === category)
    }
})