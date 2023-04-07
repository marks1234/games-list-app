import React from "react";
import axios from "axios";
import ApiKey from "./../../keys.js";

const GameGenres = () => {
	axios.get("https://api.rawg.io/api/genres", {
		params: {
			api_key: ApiKey(),
		},
	});

	return <div>GameGenres</div>;
};

export default GameGenres;
