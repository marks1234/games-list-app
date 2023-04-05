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
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CardDisplay from "./components/cardDisplay";

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
				<Grid
					px={"5px"}
					py={"5px"}
					alignItems={"center"}
					gap={2}
					templateAreas={`"image searchBar theme"`}
					gridTemplateColumns={"auto 1fr auto"}
				>
					<GridItem area={"image"}>
						<Image
							borderRadius='full'
							boxSize='2.5rem'
							src='src\\imgs\\cyberpunk.jpg'
							alt='Cyberpunk world 2077'
						/>
					</GridItem>
					<GridItem area={"searchBar"}>
						<Input   placeholder='default placeholder' />
					</GridItem>
					<GridItem area={"theme"}>
						<FormControl display='flex' alignItems='center'>
							<Text me={1}>{colorMode === "light" ? "Light  " : "Dark  "}</Text>
							<Switch
								display='flex-grow'
								onChange={changeTheme}
								onClick={toggleColorMode}
								id='email-alerts'
							/>
						</FormControl>
					</GridItem>
				</Grid>
			</GridItem>
			<GridItem pl='2' area={"header"}>
				<Menu closeOnSelect={false}>
					<MenuButton
						as={Button}
						rightIcon={<ChevronDownIcon />}
						minWidth='100px'
						margin={1}
					>
						Menu Item
					</MenuButton>
					<MenuList minWidth='240px'>
						<MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
							<MenuItemOption value='asc'>Ascending</MenuItemOption>
							<MenuItemOption value='desc'>Descending</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
				<Menu closeOnSelect={false}>
					<MenuButton
						as={Button}
						rightIcon={<ChevronDownIcon />}
						minWidth='100px'
						margin={1}
					>
						Menu Item
					</MenuButton>
					<MenuList minWidth='240px'>
						<MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
							<MenuItemOption value='asc'>Ascending</MenuItemOption>
							<MenuItemOption value='desc'>Descending</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>
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
