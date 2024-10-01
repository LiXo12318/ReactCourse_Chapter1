import { useState, useEffect } from 'react';

const useGetAllToDo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                if (!response.ok) {
                    throw new Error('Помилка мережі');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);
    return { isLoading, data, setData, error };
};

export default useGetAllToDo;