import React from "react";
import axios from "axios";
import ApiKey from "./../../keys";
import GenresData from "../GenresData";
import { Button, Image } from "@chakra-ui/react";

const GameGenres = () => {
	const request = axios.create({
		baseURL: "https://api.rawg.io/api/",
	});

	// request
	// 	.get(`genres?key=${ApiKey()}`)
	// 	.then((response) => {
	// 		console.log(response.data.results);
	// 	})
	// 	.catch((respone) => console.log(respone));

	return (
		<>
			{GenresData().map((value) => (
				<Button
					borderRadius={"none"}
					h={"auto"}
					width={"200px"}
					justifyContent={"flex-start"}
					display={"flex"}
					key={value.id}
					py={1}
					pl={0}
					fontSize={"1.2rem"}
					fontFamily={"Helvetica ,sans-serif"}
					gap={2}
				>
					<Image
						src={value.image_background}
						borderRadius='full'
						boxSize='3rem'
						alt={value.name}
						objectFit={"cover"}
					></Image>
					{value.name}
				</Button>
			))}
		</>
	);
};

export default GameGenres;
