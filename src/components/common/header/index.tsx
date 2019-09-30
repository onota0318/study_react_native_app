/**
 * Header
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from "native-base";

/**
 * HeaderProps
 */
interface HeaderProps {
    title: string;
}

/**
 * HeaderComponent
 */
export const HeaderComponent: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Container>
            <Header>
                <Left>
                    {props.title !== "Index" ?
                    <Button transparent>
                        <Icon name="arrow-back" />
                    </Button>
                    : <></>}
                </Left>
                <Body>
                    <Title>{props.title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Right>
            </Header>
        </Container>
    );
};
