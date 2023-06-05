import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://localhost:4000/transactions',
})

const getTransactions = async () => await backend.get('/');
const addTransaction = async (data) => await backend.post('/', data);

export {
    getTransactions,
    addTransaction,
}