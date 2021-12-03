import styled from "styled-components";
import { categories, IToDo } from "../atoms";

const List = styled.li``;

function CreatedList({ text }:IToDo) {
    const onClick = (clickedCategory: categories) => {
        return console.log(clickedCategory)
    }
  return (
    <List>
      <span>{text}</span>
      <button onClick={() => onClick(categories.SCHEDULED)}>예정됨</button>
      <button onClick={() => onClick(categories.DOING)}>진행중</button>
      <button onClick={() => onClick(categories.DONE)}>완료됨</button>
    </List>
  );
}

export default CreatedList;