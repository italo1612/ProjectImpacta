import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props => (props.alignCenter? 'center': 'start'))};
  width: ${(props => (props.width ? props.width: 'auto'))};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }

`;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && 'display: none'}
  }
`;

const Grid = ({estudantes}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th >Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {estudantes.map((item, i) => (
          <Tr key={i}>
            <Td width='30%'>{item.nome}</Td>
            <Td width='30%'>{item.email}</Td>
            <Td width='20%'>{item.fone}</Td>
            <Td  width='5%'><FaEdit/></Td>
            <Td  width='5%'><FaTrash/></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;