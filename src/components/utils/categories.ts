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
}

export const categories: CategoriesProps[] = [
    {
        key: "purchases",
        name: "Compras",
        icon: "shopping-bag",
        color: "#5636D3",
    },
    { key: "food", name: "Alimentação", icon: categoriesIcons["Alimentação"], color: "#FF872C" },
    { key: "salary", name: "Salário", icon: categoriesIcons["Salário"], color: "#12A454" },
    { key: "car", name: "Carro", icon:  categoriesIcons["Carro"], color: "#E83F5B" },
    { key: "leisure", name: "Lazer", icon:  categoriesIcons["Lazer"], color: "#26195C" },
    { key: "studies", name: "Estudos", icon:  categoriesIcons["Estudos"], color: "#9C001A" },
];