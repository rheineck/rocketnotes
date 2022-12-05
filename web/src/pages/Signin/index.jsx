import { useContext } from "react";

import { Container, Form, Background } from "./styles";
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { MyContext } from "../../myContext"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {

    const data = useContext(MyContext)
    console.log("MEU CONTEXTO => ", data)
    return(
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu Login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <Link to="/register">Criar Conta</Link>

            </Form>

            <Background />
        </Container>
    )
}