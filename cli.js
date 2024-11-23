// cli.js (use ES module syntax)
import { SequelizeCLI } from 'sequelize-cli';
import path from 'path';

// Dynamically import the ES module config file
import config from './src/config/config.cjs';

const sequelizeCLI = new SequelizeCLI({
    config: config, // Pass the configuration
    migrationsPath: path.resolve('src', 'migrations'),
    modelsPath: path.resolve('src', 'models'),
    seedersPath: path.resolve('src', 'seeders')
});

// Run migrations
sequelizeCLI.exec(['db:migrate']);
