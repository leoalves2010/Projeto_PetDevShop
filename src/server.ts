import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.listen(port, () => {
    console.log('listening on port ' + port);
});