import express from 'express';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import path from 'path';
import {indexRoutes} from "./routes/indexRoutes.mjs"
import {noteRoutes} from './routes/noteRoutes.mjs';
import {registerHelpers} from './utils/handlebar-util'
import {overrideMiddleware} from "./utils/method-override";


const app = express();
app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));
registerHelpers(hbs);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(overrideMiddleware);
app.use('/', indexRoutes);
app.use("/note", noteRoutes);
app.use(express.static(path.resolve('public')));

const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
