import { DB_CONNECTION } from "./models/index.js";
import {app} from "./app.js"
import { env_access } from "./config/credentials.js";

process.env.PORT = env_access.PORT;
process.env.CORS_ORIGIN = env_access.CORS_ORIGIN;
process.env.SECRET_KEY = env_access.SECRET_KEY;
const PORT = process.env.PORT || 5252
console.log("port===>", PORT);


DB_CONNECTION().then(
    app.listen(PORT, () => {
        console.log(`Server runs at port : ${PORT}`);
        
    })
).catch((error) => {
    console.log("db connection failed !!!");
    
})