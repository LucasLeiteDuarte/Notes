import { Container, Links, Content } from "./styles";



import { Header } from "../../componentes/Header";
import { ButtonText } from "../../componentes/ButtonText";
import { Section } from "../../componentes/Section";
import { Tag } from "../../componentes/Tag";
import { Button } from "../../componentes/Button";

export function Details() {

  return (
    <Container>
      <Header />


      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores consectetur quod dolore iure, fugit quo alias.
            Accusamus optio mollitia porro, id quam quia facere.
            Deserunt quos iure molestiae nisi veritatis!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Illo facilis in nobis obcaecati eligendi eveniet!
            Adipisci dignissimos assumenda recusandae vel ut provident dolor nihil vero!
            Doloremque laboriosam esse itaque earum!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>

    </Container>
  )
}  
