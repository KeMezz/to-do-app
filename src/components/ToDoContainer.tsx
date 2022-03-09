import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryNow, everyCategories, toDoSelector } from "../atoms";
import CreatedList from "./CreatedList";
import CreateToDo from "./CreateToDo";
import { BiCaretDown } from "react-icons/bi";
import AddCategory from "./AddCategory";

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
  gap: 20px;
  select {
    width: 100%;
    border: solid 2px #444;
    padding: 12px 22px;
    border-radius: 20px;
    appearance: none;
    outline: none;
  }
  .select-indicator {
    position: absolute;
    right: 18px;
    top: 13px;
  }
`;

const AddCat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #444;
  color: #fff;
  border-radius: 8px;
  font-size: 10px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 20px;
`;

function ToDoApp() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryNow);
  const allCats = useRecoilValue(everyCategories);
  const [showAddCat, setShowAddCat] = useState(false);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as string);
    localStorage.setItem(
      "categoryNow",
      JSON.stringify(event.currentTarget.value)
    );
  };
  return (
    <>
      {showAddCat ? <AddCategory setShowAddCat={setShowAddCat} /> : null}
      <Container>
        <CreateToDo />
        <Lists>
          <SelectBox>
            <select value={category} onInput={onInput}>
              {allCats.map((item: string, index: number) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <BiCaretDown className="select-indicator" />
          </SelectBox>
          <AddCat onClick={() => setShowAddCat(true)}>
            Add more categories
          </AddCat>
          {toDos.map((item) => (
            <CreatedList key={item.id} {...item} />
          ))}
        </Lists>
      </Container>
    </>
  );
}

export default ToDoApp;
