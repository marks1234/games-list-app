import {
	ColorMode,
	FormControl,
	Grid,
	GridItem,
	Input,
	Switch,
	Image,
	Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
	changeTheme: () => void;
	colorMode: ColorMode;
	toggleColorMode: () => void;
}

const SearchBar = ({ changeTheme, colorMode, toggleColorMode }: Props) => {
	return (
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
				<Input placeholder='default placeholder' />
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
	);
};

export default SearchBar;
