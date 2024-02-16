import Recipe from "../components/Recipe"
import Menu from "../components/SimpleMenu";

const Main = () => {
    return (
        <>
            <Menu />
            <Recipe recipe={{ id: 1, title: "Блины", description: "Описание рецепта 1" }} />
            <Recipe recipe={{ id: 2, title: "Лазанья", description: "Описание рецепта 2" }} />
            <Recipe recipe={{ id: 3, title: "Пицца", description: "Описание рецепта 3" }} />
            <Recipe recipe={{ id: 4, title: "Паста", description: "Описание рецепта 4" }} />
            <Recipe recipe={{ id: 5, title: "Арбуз", description: "Описание рецепта 5" }} />
            <Recipe recipe={{ id: 6, title: "Печенье", description: "Описание рецепта 6" }} />
            <Recipe recipe={{ id: 7, title: "Макароны с сыром", description: "Описание рецепта 7" }} />
        </>
    )
}

export default Main