import express from 'express'
import knex from './database/connection';

const routes = express.Router();

routes.get('/itens', async (request, response) => {
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map(item => {
        return {
            title: item.name,
            image_url: 'http://localhost:3333/uploads/${item.image}'


        }
    });

    return response.json(serializedItens);
});

export default routes;