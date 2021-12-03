import { atom } from "recoil";

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

export const toDoState = atom<IToDo[]>({
    key: "toDos",
    default: [],
})