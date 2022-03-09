import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryNow, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}
const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  padding: 26px 0;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;
const ErrorMeg = styled.h3`
  font-size: 14px;
  color: crimson;
  padding: 14px;
  font-weight: 400;
  text-align: center;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 26px;
  padding-right: 150px;
  font-size: 18px;
  border-radius: 16px;
  border: none;
  background-color: ${(props) => props.theme.bgColor};
  &::placeholder {
    transition: 0.2s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;
const AddBtn = styled.button`
  position: absolute;
  right: 10px;
  align-self: center;
  padding: 10px 30px;
  background-color: crimson;
  color: snow;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const selectedCategory = useRecoilValue(categoryNow);
  const { register, handleSubmit, formState, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: selectedCategory },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <>
      <Title>React To Do App</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <ErrorMeg>{formState.errors.toDo?.message}</ErrorMeg>
        <InputBox>
          <Input
            {...register("toDo", { required: "할 일을 입력해주세요" })}
            autoFocus
            autoComplete="off"
            type="text"
            placeholder="Write To-do..."
          />
          <AddBtn>ADD</AddBtn>
        </InputBox>
      </Form>
    </>
  );
}

export default CreateToDo;
