import express, { Express } from 'express';
import fetch from "node-fetch";
import TranslationService from './translationService'

const app: Express = express();
const translateService = new TranslationService();
const apiUrl: string = 'https://swapi.dev/api/';
const port: number = 8070;

app.get(`/people/:id`, async (req, res, next) => {
  const swapiRes = await fetch(apiUrl + `people/${req.params.id}`)
    .then(res => res.json());
  if(req.query.encoding === 'ewok') {
    swapiRes.name = translateService.translate(swapiRes.name);
  }
  res.send(swapiRes);
});

app.get(`/planets/:id`, async (req, res) => {
  const swapiRes = await fetch(apiUrl + `planets/${req.params.id}`)
    .then(res => res.json());
  if(req.query.encoding === 'ewok') {
    swapiRes.name = translateService.translate(swapiRes.name);
  }
  res.send(swapiRes);
});

app.listen(port, () => {
  console.log(`server starting in ${port} port`)
});