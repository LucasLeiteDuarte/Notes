import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from "../../componentes/Note";
import { Input } from "../../componentes/Input";
import { Header } from "../../componentes/Header";
import { Section } from "../../componentes/Section";
import { ButtonText } from "../../componentes/ButtonText";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnote</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <ButtonText title="Todos" isActive /> </li>
                <li> <ButtonText title="Reactjs" /> </li>
                <li> <ButtonText title="Nodejs" /> </li>
            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título" />

            </Search>

            <Content>
                <Section title="Minhas notas">
                   <Note data={{
                    title: "React",
                    tags: [

                        {id:"1", name: "react"},
                        {id:"2", name: "rocketseat"}
                        ]
                   }}
                   />

                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>

    )

}