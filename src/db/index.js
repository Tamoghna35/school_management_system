//  this file is used to establish connection

import { Sequelize } from "sequelize";
import config from "../config/config.js";

const current_config = config;
const sequelize = new Sequelize(
    current_config.development.database,
    current_config.development.username,
    current_config.development.password,
    {
        host: current_config.development.host,
        dialect: current_config.development.dialect,
        // dialectOptions: {
        //     ssl: {
        //         require: true
        //     }
        // },
        logging: false,
        pool: {
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }

)

export { sequelize }