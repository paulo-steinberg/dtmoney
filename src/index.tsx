import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancing',
                    type: 'deposit',
                    category: 'Development',
                    amount: 4000,
                    createdAt: new Date('2021-06-20 09:00:00'),
                },
                {
                    id: 2,
                    title: 'Dishwasher',
                    type: 'withdraw',
                    category: 'Housing',
                    amount: 600,
                    createdAt: new Date('2021-06-25 15:18:00'),
                }
            ],
        })
    },
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () =>{
            return this.schema.all('transaction');
        });
        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transaction', data);
        });
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
