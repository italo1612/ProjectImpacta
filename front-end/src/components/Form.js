import axios from 'axios';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;

  background-color: #fff;
  border-radius: 5px;

  padding: 20px;
`;
const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;
const Label = styled.label``;

const Button = styled.button`
  padding: 10px 1rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;
const Form = ({ onEdit, getEstudantes }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const estudante = ref.current;

    await axios
      .post('http://localhost:8800', {
        nome: estudante.nome.value,
        email: estudante.email.value,
        fone: estudante.fone.value,
        data_nasc: estudante.data_nasc.value,
      })
      .then(({ data }) => alert(data))
      .catch(({ data }) => alert(data));

    getEstudantes();
  };
  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name='nome' />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name='email' type='e-mail' />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name='fone' />
      </InputArea>
      <InputArea>
        <Label>Data de Nacimento</Label>
        <Input name='data_nasc' type='date' />
      </InputArea>

      <Button type='submit'>Criar</Button>
    </FormContainer>
  );
};

export default Form;
