import React from "react";
import {
    Container,
    Header,
    Icon,
    Photo,
    ProfileContainer,
    UserName,
    UserWelcome,
    WelcomeContainer,
} from "./styles";

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <ProfileContainer>
                    <Photo
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/90923287?v=4",
                        }}
                    />
                    <WelcomeContainer>
                        <UserWelcome>Olá,</UserWelcome>
                        <UserName>Nome</UserName>
                    </WelcomeContainer>
                </ProfileContainer>
                <Icon name="power" />
            </Header>
        </Container>
    );
}
