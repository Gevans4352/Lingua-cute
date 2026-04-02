
import { useTheme } from "./ThemeContext";

const Layout = ({ children }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className="app-wrapper" data-theme={darkMode ? "dark" : "light"}>
      {children}
    </div>
  );
};

export default Layout;