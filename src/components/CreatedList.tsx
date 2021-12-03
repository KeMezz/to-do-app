import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categories, IToDo, toDoState } from "../atoms";

const List = styled.li``;

function CreatedList({ text, id, category }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (clickedCategory: categories) => {
      const targetIndex = toDos.findIndex(item => item.id === id);
      const newToDo: IToDo = {text, id, category: clickedCategory}
      setToDos(() => [...toDos.slice(0, targetIndex), newToDo, ...toDos.slice(targetIndex + 1)])
    };
  return (
    <List>
      <span>{text}</span>
      {category !== categories.SCHEDULED && (
        <button onClick={() => onClick(categories.SCHEDULED)}>예정됨</button>
      )}
      {category !== categories.DOING && (
        <button onClick={() => onClick(categories.DOING)}>진행중</button>
      )}
      {category !== categories.DONE && (
        <button onClick={() => onClick(categories.DONE)}>완료됨</button>
      )}
    </List>
  );
}

export default CreatedList;
