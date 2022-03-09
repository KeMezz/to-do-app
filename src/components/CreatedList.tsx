import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { everyCategories, IToDo, toDoState } from "../atoms";

const List = styled.li`
  background-color: #fff;
  border: solid 1px #ccc;
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
  const allCats = useRecoilValue(everyCategories);

  const onClick = (clickedCategory: string) => {
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
      {allCats.map(
        (item: string, index: number) =>
          category !== item && (
            <button key={index} onClick={() => onClick(item)}>
              {item}
            </button>
          )
      )}
    </List>
  );
}

export default CreatedList;
