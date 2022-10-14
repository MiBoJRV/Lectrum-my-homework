// Core
import { useQuery } from 'react-query';

// Instruments
import { api } from '../api';

export const usePosts =  () => {
    const query = useQuery('posts', api.posts.fetch);
    const { data, isFetched } = query;

    return {
        data: Array.isArray(data) ? data : [],
        isFetched,
    };
};
