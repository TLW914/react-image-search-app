import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 869e097434e6cc6927649ca85013bcc0080411f15d77b2a9a552bb498283f857'
    }
});


