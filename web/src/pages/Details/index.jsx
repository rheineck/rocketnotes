import { Container, Links, Content } from './styles'

import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {

    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <ButtonText title="Excluir Nota"/>

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et temporibus totam at adipisci eveniet soluta voluptates iste reiciendis, nulla error quidem reprehenderit iure, voluptatem nesciunt ipsa labore? Neque, alias eveniet.
                    </p>
                    
                    <Section title="Links Úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                            <li><a href="#">https://www.rocketseat.com.br</a></li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title ="express" />
                        <Tag title ="node" />
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>
        </Container>
    )
}