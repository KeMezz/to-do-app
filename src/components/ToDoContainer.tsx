import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categories, categoryNow, toDoSelector } from "../atoms";
import CreatedList from "./CreatedList";
import CreateToDo from "./CreateToDo";

const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 16px;
  background-color: #fff;
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  h2 {
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

function ToDoApp() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryNow);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as categories);
  };
  return (
    <>
      <Container>
        <CreateToDo />
        <Lists>
          <select value={category} onInput={onInput}>
            <option value={categories.SCHEDULED}>예정됨</option>
            <option value={categories.DOING}>진행 중</option>
            <option value={categories.DONE}>완료함</option>
          </select>
          {toDos.map((item) => (
            <CreatedList key={item.id} {...item} />
          ))}
        </Lists>
      </Container>
    </>
  );
}

export default ToDoApp;
