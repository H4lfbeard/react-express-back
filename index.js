import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

const sampleEmployee = {
	name: {
		first: "Jean-Paul",
		last: "Richard",
	},
	email: "jp.richard@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
	},
};

app.get("/api/employees", (req, res) => {
	console.log("toto");
	return res.json({ results: [sampleEmployee] });
});

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
