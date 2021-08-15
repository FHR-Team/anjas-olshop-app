import axios from 'axios';

export default async function fetchProducts() {
    const config = {
        url: 'https://raw.githubusercontent.com/FHR-Team/anjas-olshop-app-db/main/products.json',
        method: 'get'
    };
    const request = await axios(config);
    const response = request.data.data;
    return response;
}