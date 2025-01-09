import axios from "axios";

const url = "http://localhost:4000";

export const getData = async() => {
    try {
        const response = await axios.get(`${url}/webinar`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const createData = async(data) => {
    try {
        const response = await axios.post(`${url}/webinar`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};
export const updateData = async(id, data) => {
    try {
        const response = await axios.put(`${url}/webinar/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};
export const deleteData = async(id) => {
    try {
        const response = await axios.delete(`${url}/webinar/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};