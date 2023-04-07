import { Card, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import CardDisplay from "./components/cardDisplay";
import CardFilter from "./components/CardFilter";
import SearchBar from "./components/SearchBar";
import GameGenres from "./components/GameGenres";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [gameGenres, setGameGenres] = useState();
	const [isSticky, setIsSticky] = useState(false);

	const { colorMode, toggleColorMode } = useColorMode();
	localStorage.setItem("chakra-ui-color-mode", colorMode);

	const changeTheme = () => toggleColorMode();

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		const navbarHeight = navbar?.offsetHeight;

		const handleScroll = () => {
			console.log(window.pageYOffset);
			if (navbarHeight) {
				if (window.pageYOffset >= 165) {
					setIsSticky(true);
				} else {
					setIsSticky(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Grid
			templateAreas={`
				  "search search"
				  "nav header"
                  "nav main"`}
			gridTemplateRows={"50px 50px 1fr"}
			gridTemplateColumns={"200px 1fr"}
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
			<GridItem
				className={isSticky ? "sticky" : ""}
				id='navbar'
				pl='0.5'
				area={"nav"}
				height={"fit-content"}
			>
				<GameGenres />
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
