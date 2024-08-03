import exprss from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = exprss();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(exprss.json({
    limit: "16kb"
}));

app.use(exprss.urlencoded({extended: true, limit: "16kb"}));

app.use( exprss.static("public"));

app.use(cookieParser());


export {app}