//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const app = require("./src/app");

//////////////////////////////////////////////////////
// SETUP ENVIRONMENT
//////////////////////////////////////////////////////
const port = 8000;

//////////////////////////////////////////////////////
// START SERVER
//////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});