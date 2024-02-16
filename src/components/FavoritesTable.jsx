import { Box, Heading, Text, Container, IconButton, Flex } from "@chakra-ui/react";
import { IoTrashBinOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../Store/favorites/selector";
import { favoritesSlice } from "../Store/favorites/favorites.slice";

const FavoritesTable = () => {
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const toggleFavorites = favoritesSlice.actions.toggleFavorites;
    const dispatch = useDispatch();

    const removeFromFavorites = (recipeId) => {
        dispatch(toggleFavorites({ id: recipeId }));
    };

    return (
        <Container
            color='white'
            fontSize='lg'
            bgColor='teal'
            mt='10'
            borderRadius='30px'
        >
            <Box p="4">
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Heading mb="4">Избранное</Heading>
                </Box>
                {favoriteRecipes.map((recipe) => (
                    <Box key={recipe.id} borderWidth="1px" bgColor='black' borderRadius="20px" overflow="hidden" p="4" mb="4">
                        <Flex align="center" justify="space-between">
                            <Heading as="h2" size="md" mb="2">{recipe.title}</Heading>
                            <IconButton
                                aria-label="Удалить из избранного"
                                icon={<IoTrashBinOutline />}
                                onClick={() => removeFromFavorites(recipe.id)}
                                colorScheme="red"
                            />
                        </Flex>
                        <Text>{recipe.description}</Text>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}
export default FavoritesTable;
