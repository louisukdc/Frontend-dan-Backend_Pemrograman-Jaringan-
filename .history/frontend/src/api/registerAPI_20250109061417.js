import axios from 'axios';

const url = "http://localhost:4000";

export const getData = async() => {
    try {
        const response = await axios.get(`${url}/register`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


export const createData = async(data) => {
    try {
        const response = await axios.post(`${url}/register`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};