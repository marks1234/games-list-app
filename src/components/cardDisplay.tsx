import {
	ButtonGroup,
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	DarkMode,
	useColorMode,
	Box,
	GridItem,
	Grid,
} from "@chakra-ui/react";

const CardDisplay = () => {
	const property = [
		{
			id: 1,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 2,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 3,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 4,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 5,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 6,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 7,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 8,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
		{
			id: 9,
			imageUrl: "src\\imgs\\cyberpunk.jpg",
			imageAlt: "The amazing world of Cyberpunk 2077",
			heading: "Cyberpunk 2077",
			buttonText: "Click Me",
		},
	];

	const renderCards = () => {
		return property.map((obj) => {
			return (
				<GridItem key={obj.id}>
					<Card maxW='sm' borderRadius='lg' overflow='hidden'>
						<Image src={obj.imageUrl} alt={obj.imageAlt} />

						<Box p='5'>
							<Box display='flex' alignItems='baseline'>
								<Heading as='h1' textAlign='left' size='md'>
									{obj.heading}
								</Heading>
							</Box>
						</Box>
						<Box>
							<Button margin={5}>{obj.buttonText}</Button>
						</Box>
					</Card>
				</GridItem>
			);
		});
	};

	return (
		<Grid
			padding={1}
			templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
			gap={3}
			autoRows='minmax(200px, auto)'
		>
			{renderCards()}
		</Grid>
	);
};

export default CardDisplay;
