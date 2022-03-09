import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categories, IToDo, toDoState } from "../atoms";

const List = styled.li`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  gap: 8px;
  span {
    margin-right: auto;
  }
  button {
    border-radius: 12px;
    border: none;
    cursor: pointer;
    background-color: dodgerblue;
    color: #fff;
    padding: 12px;
  }
`;

function CreatedList({ text, id, category }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  console.log(toDos);
  const onClick = (clickedCategory: categories) => {
    const targetIndex = toDos.findIndex((item) => item.id === id);
    const newToDo: IToDo = { text, id, category: clickedCategory };
    setToDos(() => [
      ...toDos.slice(0, targetIndex),
      newToDo,
      ...toDos.slice(targetIndex + 1),
    ]);
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
        <button onClick={() => onClick(categories.DONE)}>완료함</button>
      )}
    </List>
  );
}

export default CreatedList;
