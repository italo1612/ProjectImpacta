import { Global } from './styles/global.js';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Form from './components/Form.js';
import Grid from './components/Grid.js';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: ;
  padding: 2rem;
  -webkit-box-shadow: -2px 10px 14px -6px rgba(0,0,0,0.26);
-moz-box-shadow: -2px 10px 14px -6px rgba(0,0,0,0.26);
box-shadow: -2px 10px 14px -6px rgba(0,0,0,0.26);
`;
const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`;
function App() {
  const [estudantes, setEstudantes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getEstudantes = async () => {
    try {
      const res = await axios.get('http://localhost:8800');
      setEstudantes(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getEstudantes();
  }, [setEstudantes]);
  return (
    <div>
      <Container>
        <Title>Estudantes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getEstudantes={getEstudantes}></Form>
        <Grid estudantes={estudantes} setOnEdit={setOnEdit} />
      </Container>
      {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
      <Global />
    </div>
  );
}

export default App;
