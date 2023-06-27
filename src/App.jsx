/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/styledComponent/Card';
import Switch from './components/styledComponent/Switch';
import MoonIcon from './components/styledComponent/icons/MoonIcon';
import SunIcon from './components/styledComponent/icons/SunIcon';
import { Container, IconContainer } from './components/styledComponent/styles/Container.styles';
import GlobalStyle from './components/styledComponent/styles/Global.styles';
import { darkTheme, lightTheme } from './components/styledComponent/styles/themes';

export default function App() {
    const getPreferredScheme = () =>
        window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(getPreferredScheme());
    const isDarkTheme = theme === 'dark';
    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    };
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <IconContainer>
                    <SunIcon />
                    <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <MoonIcon />
                </IconContainer>
                <Card />
            </Container>
        </ThemeProvider>
    );
}
