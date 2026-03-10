import { API_BASE_URL } from './config';

const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

export const fashionService = {
    async getTrends() {
        try {
            const response = await fetch(`${API_BASE_URL}/trends`, { headers: getHeaders() });
            if (!response.ok) throw new Error('Failed to fetch trends');
            return await response.json();
        } catch (error) {
            console.error('Error fetching trends:', error);
            throw error;
        }
    },
};
