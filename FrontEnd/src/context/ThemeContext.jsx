import { createTheme} from '@mui/material/styles';
import { createContext } from 'react';


const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const defaultTheme = createTheme();

    return (
        <ThemeContext.Provider theme={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
}