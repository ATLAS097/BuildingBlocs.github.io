//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const express = require("express");
const cors = require("cors")

//////////////////////////////////////////////////////
// CREATE APP
//////////////////////////////////////////////////////
const app = express();

//////////////////////////////////////////////////////
// USES
//////////////////////////////////////////////////////
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//////////////////////////////////////////////////////
// SETUP ROUTES
//////////////////////////////////////////////////////
const mainRoutes = require("./routes/mainRoutes");

app.use("/", mainRoutes);

//////////////////////////////////////////////////////
// EXPORT APP
//////////////////////////////////////////////////////
module.exports = app;   
