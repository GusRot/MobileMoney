export interface CategoriesProps {
    key: string;
    name: string;
    icon: string;
    color: string;
}

export const categoriesIcons = {
    Compras: "shopping-bag",
    Alimentação: "coffee",
    Salário: "dollar-sign",
    Carro: "crosshair",
    Lazer: "heart",
    Estudos: "book",
};

export const categoriesIconsColors = {
    Compras: "#5636D3",
    Alimentação: "#FF872C",
    Salário: "#12A454",
    Carro: "#E83F5B",
    Lazer: "#26195C",
    Estudos: "#9C001A",
};

export const categories: CategoriesProps[] = [
    {
        key: "purchases",
        name: "Compras",
        icon: categoriesIcons["Compras"],
        color: categoriesIconsColors["Compras"],
    },
    {
        key: "food",
        name: "Alimentação",
        icon: categoriesIcons["Alimentação"],
        color: categoriesIconsColors["Alimentação"],
    },
    {
        key: "salary",
        name: "Salário",
        icon: categoriesIcons["Salário"],
        color: categoriesIconsColors["Salário"],
    },
    {
        key: "car",
        name: "Carro",
        icon: categoriesIcons["Carro"],
        color: categoriesIconsColors["Carro"],
    },
    {
        key: "leisure",
        name: "Lazer",
        icon: categoriesIcons["Lazer"],
        color: categoriesIconsColors["Lazer"],
    },
    {
        key: "studies",
        name: "Estudos",
        icon: categoriesIcons["Estudos"],
        color: categoriesIconsColors["Estudos"],
    },
];
