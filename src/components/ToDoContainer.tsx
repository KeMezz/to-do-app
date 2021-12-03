import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
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
`;


function ToDoApp() {
  const toDos = useRecoilValue(toDoState);
  return (
    <>
      <Container>
        <Lists>
          <CreateToDo />
          {toDos.map(item => <CreatedList key={item.id} {...item}></CreatedList>)}
        </Lists>
      </Container>
    </>
  );
}

export default ToDoApp;
