import {
	Button,
	Card,
	Flex,
	FormControl,
	Grid,
	GridItem,
	HStack,
	Input,
	Image,
	Spacer,
	Switch,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import CardDisplay from "./components/cardDisplay";
import CardFilter from "./components/CardFilter";
import SearchBar from "./components/SearchBar";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	localStorage.setItem("chakra-ui-color-mode", colorMode);

	const changeTheme = () => toggleColorMode();

	const gameGenres = [
		"Action",
		"Adventure",
		"RPG",
		"Simulation",
		"Strategy",
		"Sports",
		"Puzzle",
		"Platformer",
		"FPS",
		"MMORPG",
		"Racing",
		"Horror",
		"Stealth",
		"Survival",
	];

	return (
		<Grid
			templateAreas={`
				  "search search"
				  "nav header"
                  "nav main"`}
			gridTemplateRows={"50px 50px 1fr"}
			gridTemplateColumns={"150px 1fr"}
			h='200px'
			gap='1'
			fontWeight='bold'
		>
			<GridItem bg={""} area={"search"}>
				<SearchBar
					changeTheme={changeTheme}
					colorMode={colorMode}
					toggleColorMode={toggleColorMode}
				/>
			</GridItem>
			<GridItem pl='2' area={"header"}>
				<CardFilter />
			</GridItem>

			<GridItem pl='2' bg='pink.300' area={"nav"}>
				Nav
			</GridItem>
			<GridItem pl='2' area={"main"}>
				<Card marginRight={3} paddingX={3} paddingY={1} borderRadius='lg'>
					<CardDisplay />
				</Card>
			</GridItem>
		</Grid>
	);
}

export default App;
