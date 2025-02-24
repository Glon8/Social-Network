import { createContext, useContext, useState} from 'react';

const ThemeConstext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeConstext);

    return context;
};

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light'? 'dark' : 'light'))
    }

    return(
        <ThemeConstext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeConstext.Provider>
    )
}