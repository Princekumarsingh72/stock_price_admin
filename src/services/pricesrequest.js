import axios from "axios";

export const getPricesRequest = async () => {
    const requesturl = `http://localhost:3001/api/get-bestprices-request`;

    try {
        const response = await axios.get(requesturl, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response?.data
    } catch (error) {
        throw error
    }
}