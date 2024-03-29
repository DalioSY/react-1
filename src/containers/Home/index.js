import React, { useState, useRef} from "react";
import { useNavigate } from 'react-router';


import axios from "axios";

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button} from "./styles";

function App() {
  const [users, setUsers] = useState([]);//Estado
const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate ('/usuarios')
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />

      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar<img alt="seta" src={Arrow} />
        </Button>
        
      </ContainerItens>
    </Container>
  );
}

export default App;