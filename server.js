import express from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as http from 'http';

import router from './routes/main.js';

const environment = process.env.NODE_ENV ?? 'development';

if (environment === 'development') {
  import('livereload').then(livereload => {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once('connection', () => {
      setTimeout(() => liveReloadServer.refresh('/'), 100);
    });
  });
}

const app = express();

const continuePromise = environment === 'development'
  ? import('connect-livereload').then(connectLiveReload => app.use(connectLiveReload.default()))
  : Promise.resolve();

continuePromise.then(() => {
  app.set('views', path.join(process.cwd(), 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(process.cwd(), 'public')));

  app.use('/', router);
  app.use('/stylesheets/purecss', express.static(path.join(process.cwd(), 'node_modules/purecss/build')));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

  const port = process.env.PORT || 3000;
  const server = http.createServer(app);
  server.listen(port);
  server.on('listening', () => console.log('Listening on port ' + port));
});
