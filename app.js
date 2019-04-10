import bodyParser from 'body-parser';
import routes from './routes/index';

export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api/v1', routes);
};
