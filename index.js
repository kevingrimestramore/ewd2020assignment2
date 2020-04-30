import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'
import './db'
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';

dotenv.config();

export const app = express()
const port = process.env.PORT;
const swaggerDocument = YAML.load('../movie-api-yaml/swagger.yaml');

const errorHandler=(err,req,res,next)=>{
  console.log(err);
  res.status(500).json({status: 500, message:"Internal Server Error"});
}

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(passport.initialize());
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));


app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/users', usersRouter);
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);


app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});