import express  from 'express';
import cors from 'cors';
import config from 'config';
import {authorRouter} from "./routes/author-routes";

const app = express();
const port: number = config.get<number>('appConfig.port');
const origin:string = config.get<string>('appConfig.origin');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: origin}));

app.use('/authors', authorRouter);

function errorHandler(err:any, req:any, res:any, next:any)  {
    if (res.headersSent) {
        return next(err);
    }
    console.error(err);
    res.status(500).send('Something broke!  ' + err);
}
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
