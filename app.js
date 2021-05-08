const express = require("express");
const app = express();
const rootRoute = require("./routes/rootRoute.js");
const trash = require("./routes/trash.js");
const allowCORS = require("./cors");
// Setting up local Port number if not given in process.env.PORT
const port = 5000;

// Basic middlewares to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Seperate routes middlewares
app.all("*", allowCORS);
app.use("/api", rootRoute);
app.use("/api/trash", trash);

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});

// deleteMany dynamic approach

// app.delete("/", (req, res) => {
//

// getting value of the delete filter's argument from body
// 	const values = req.body[1].items;
// getting value of the delete filter from body
// 	let key = req.body[0].value;

// 	if (!values) {
// 		res.send("please specify values to be deleted");
// 	} else {
// 		values.map((singleItem) => {
// 			const deleteObj = { [key]: singleItem };

// 			mainCollection
// 				.deleteMany(deleteObj)
// 				.then()
// 				.catch((error) => console.log(error));
// 		});
// 	}
// 	res.status(200).send("OK");
// });
