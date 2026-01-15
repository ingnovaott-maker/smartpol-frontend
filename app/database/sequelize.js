
import { Sequelize } from 'sequelize';
import config from './config/config.js';
import { setupModels } from './models/index.js';

const env = process.env.NODE_ENV;

const sequelize = new Sequelize(config[env]);

setupModels(sequelize);

export default sequelize
