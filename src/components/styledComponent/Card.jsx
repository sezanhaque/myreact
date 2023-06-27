import nerdImage from '../../assets/images/illustration.png';
import Button from './Button';
// import Image from './Image';
// import Tag from './Tag';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.styles';
import { H1, P, Tag, StyledImage } from './styles/Elements.styles';

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>React Styled Component</H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer className="buttons">
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <StyledImage imgSrc={nerdImage} altTag="Nerd" width="300px" />
        </CardContainer>
    );
}
