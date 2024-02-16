import { Box, Button, Container, Heading, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../Store/favorites/favorites.slice";

const Recipe = ({ recipe }) => {
    const dispatch = useDispatch();
    const toast = useToast();

    const { toggleFavorites } = favoritesSlice.actions;

    const favoriteRecipes = useSelector((state) => state.favorites);
    const isFavorite = favoriteRecipes.some(item => item.id === recipe.id);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorites(recipe));
        if (!isFavorite) {
            toast({
                title: `Рецепт "${recipe.title}" был добавлен в избранное!`,
                status: "success",
                duration: 2000,
                isClosable: true,
            });
        } else {
            toast({
                title: `Рецепт "${recipe.title}" был удален из избранного!`,
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                m='6'
                borderWidth="1px"
                borderRadius="30px"
                overflow="hidden"
                bgColor="gray.500"
                boxShadow="md"
                p='6'
                id={recipe.id}
            >
                <Heading as="h2" size="xl" mb={4} color="white">
                    {recipe.title}
                </Heading>
                <Button colorScheme={isFavorite ? "red" : "green"} size={['sm', 'md', 'lg']} onClick={handleToggleFavorite}>
                    {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                </Button>
            </Box>
        </Container>
    );
};

export default Recipe;
