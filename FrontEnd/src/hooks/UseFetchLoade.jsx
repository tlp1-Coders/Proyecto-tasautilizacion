import { useState } from 'react';

export const useFetchLoader = () => {
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, options) => {
        try {
            setLoading(true);
            const response = await fetch(url,{
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': options.token|| '',
                },
                method: options.method || 'GET',
                body: JSON.stringify(options.body) || null,

            });
            const data = await response.json();
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            throw new Error('Error fetching data');
        }
    };

    return {
        fetchData,
        loading,
    };
};
