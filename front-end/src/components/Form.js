import axios from 'axios';
import React, { useRef, useEffect } from 'react';
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
const Form = ({ onEdit, getEstudantes, setOnEdit }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const estudante = ref.current;

    if (
      !estudante.nome.value ||
      !estudante.email.value ||
      !estudante.fone.value ||
      !estudante.data_nasc.value
    ) {
      return alert('Preencha todos os campos!');
    }
    if (onEdit) {
      await axios
        .put('http://localhost:8800/' + onEdit.id, {
          nome: estudante.nome.value,
          email: estudante.email.value,
          fone: estudante.fone.value,
          data_nasc: estudante.data_nasc.value,
        })
        .then(({ data }) => alert(data))
        .catch(({ data }) => alert('error ao atualizar'));
    } else {
      await axios
        .post('http://localhost:8800', {
          nome: estudante.nome.value,
          email: estudante.email.value,
          fone: estudante.fone.value,
          data_nasc: estudante.data_nasc.value,
        })
        .then(({ data }) => alert(data))
        .catch(({ data }) => alert('error ao criar'));

      getEstudantes();
    }
    estudante.nome.value = '';
    estudante.email.value = '';
    estudante.fone.value = '';
    estudante.data_nasc.value = '';

    setOnEdit(null);
    getEstudantes();
  };

  useEffect(() => {
    if (onEdit) {
      const estudante = ref.current;

      estudante.nome.value = onEdit.nome;
      estudante.email.value = onEdit.email;
      estudante.fone.value = onEdit.fone;
      estudante.data_nasc.value = onEdit.data_nasc;
    }
  }, [onEdit]);
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

      <Button type='submit'>{onEdit ? 'Salvar' : 'Criar'}</Button>
    </FormContainer>
  );
};

export default Form;
