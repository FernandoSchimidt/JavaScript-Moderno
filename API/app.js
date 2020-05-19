import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express'
import homeRoutes from './src/routes/homeRoute';

class App {
  constructor() {
    this.app = express();
    this.middlewars();
    this.routes();
  }
  middlewars() {
    this.app.use(express.urlencoded({
      extended: true
    }));
    this.app.use(express.json());
  }
  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
