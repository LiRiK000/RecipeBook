import { Box, Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
    const favoriteRecipes = useSelector((state) => state.favorites);

    return (
        <Flex
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100vw"
            bgColor="teal"
            p="4"
            color="white"
        >
            <Box>
                <Heading>
                    <Link to="/">Home</Link>
                </Heading>
            </Box>
            <Box>
                <Heading>
                    <Link to="/favorites">Избранное ({favoriteRecipes.length})</Link>
                </Heading>
            </Box>
        </Flex>
    );
};

export default Menu;

