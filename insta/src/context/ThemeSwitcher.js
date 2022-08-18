import React, { useContext } from "react";
import { Text,TouchableOpacity } from 'react-native'
import ThemeContext from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
        <TouchableOpacity onPress={toggleTheme}>
        {theme === "dark" ? <Text>🌞</Text> : <Text>🌙</Text>}
        </TouchableOpacity>
      
   
  );
};

export default ThemeSwitcher;
