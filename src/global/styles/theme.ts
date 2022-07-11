import { css } from "styled-components";

export const theme = {
    colors: {
        primary: "#5636D3",
        secondary: "#FF872C",
        secondary_light: "rgba(255,135,44,0.3)",

        success: "#12A454",
        success_light: "rgba(18, 144, 84, 0.5)",

        attention: "#E83F5B",
        attention_light: "rgba(232, 63, 91, 0.5)",

        shape: "#fff",
        title: "#363F5F",
        text: "#969CB2",
        text_dark: "#000",
        background: "#F0F2F5",
    },
    fonts: {
        primary: 18,
        secondary: 14,

        icon: 24,
        title: 30,
        dashboard: 32,

        regular: "Poppins_400Regular",
        medium: "Poppins_500Medium",
        bold: "Poppins_700Bold",
    },
    common: {
        padding: 20,
        gap: 10,
        logo: 50,
        radius: 10,
        radius_secondary: 5,
        icon: 20,
    },
};

export const alignRow = css`
    flex-direction: row;
    align-items: center;
`;

export const justifyRow = css`
    flex-direction: row;
    align-items: center;
`;

export const centerRow = css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const centerColumn = css`
    align-items: center;
    justify-content: center;
`;
