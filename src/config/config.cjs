// // this is the configuration File

// const config = {
//     development: {
//         username: "postgres",
//         password: "root1234",
//         database: "school-management-system",
//         host: "localhost",
//         dialect: "postgres",
//         port: 5432
//     }
// }
// export  {config};



// src/config/config.js

const config = {
    development: {
        username: "postgres",
        password: "root1234",
        database: "school-management-system",
        host: "localhost",
        dialect: "postgres",
        port: 5432
    }
};

module.exports = config; // Use CommonJS syntax for exporting
