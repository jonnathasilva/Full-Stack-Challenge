import { app } from "./setup.js";

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("server start in port:", port));
