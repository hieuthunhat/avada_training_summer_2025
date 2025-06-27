import { API_BASE_URL } from "../const/constants";

/**
 * @returns 
 */
const FetchAPI = async () => {
    try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error("Server failed");
    }

};

export default FetchAPI;