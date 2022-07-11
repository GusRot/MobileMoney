import react from "react";
import HomeCards from "./HomeCards";
import { HomeCardContainer } from "./style";

export default function HomeCardsContainer() {
    return (
        <HomeCardContainer>
            <HomeCards
                title="entrada"
                amount={9000}
                date="10/02/2001"
                type="up"
            />
            <HomeCards
                title="saida"
                amount={2000}
                date="10/02/2001"
                type="down"
            />
            <HomeCards
                title="total"
                amount={7000}
                date="10/02/2001"
                type="total"
            />
        </HomeCardContainer>
    );
}
