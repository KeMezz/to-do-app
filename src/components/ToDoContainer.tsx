import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categories, categoryNow, toDoSelector } from "../atoms";
import CreatedList from "./CreatedList";
import CreateToDo from "./CreateToDo";
import { BiCaretDown } from "react-icons/bi";

const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 30px 16px;
  background-color: #fff;
`;

const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  h2 {
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  select {
    width: 100%;
    padding: 12px 22px;
    border-radius: 20px;
    appearance: none;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
    outline: none;
  }
  svg {
    position: absolute;
    right: 20px;
    top: 12px;
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
          <SelectBox>
            <select value={category} onInput={onInput}>
              <option value={categories.SCHEDULED}>예정됨</option>
              <option value={categories.DOING}>진행 중</option>
              <option value={categories.DONE}>완료함</option>
            </select>
            <BiCaretDown />
          </SelectBox>
          {toDos.map((item) => (
            <CreatedList key={item.id} {...item} />
          ))}
        </Lists>
      </Container>
    </>
  );
}

export default ToDoApp;
