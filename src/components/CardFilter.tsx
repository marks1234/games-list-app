import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Button,
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";

const CardFilter = () => {
	return (
		<>
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
					<MenuOptionGroup
						onChange={(string) => console.log("Menu1 - selected -- ", string)}
						defaultValue='asc'
						title='Order'
						type='radio'
					>
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
					<MenuOptionGroup
						onChange={(string) => console.log("Menu2 - selected -- ", string)}
						defaultValue='asc'
						title='Order'
						type='radio'
					>
						<MenuItemOption value='asc'>Ascending</MenuItemOption>
						<MenuItemOption value='desc'>Descending</MenuItemOption>
					</MenuOptionGroup>
				</MenuList>
			</Menu>
		</>
	);
};

export default CardFilter;
