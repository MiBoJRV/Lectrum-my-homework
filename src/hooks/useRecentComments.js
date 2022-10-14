// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';

export const useRecentComments =  () => {
    const query = useQuery('comments', api.posts.getComments);
    const { data, isFetched } = query;

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
