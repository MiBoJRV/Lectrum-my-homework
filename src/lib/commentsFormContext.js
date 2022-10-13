// Core
import { createContext, useState } from 'react';

export const Context = createContext(['', () => null]);

export const CommentsFormProvider = (props) => {
    const  state = useState('');
    const { children } = props;

    return (
        <Context.Provider value = { state }>
            { children }
        </Context.Provider>
    );
};
