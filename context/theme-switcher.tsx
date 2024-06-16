import React, { useEffect } from "react";
import { useTheme } from "../context/theme-provider";
import { BsMoon, BsSun } from "react-icons/bs";

type SwitchProps = {
  light: string;
  dark: string;
}

const ThemeSwitch: React.FC<SwitchProps> = ({ light, dark }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "h") {
        toggleTheme();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTheme]);

  return (
    <button className="theme-switch-btn" onClick={toggleTheme}>
      {theme === "light" ? (
        <div className="flex flex-row items-center gap-x-2">
          <BsSun /> 
          {light}
        </div>
      ) : (
        <div className="flex flex-row items-center gap-x-2">
          <BsMoon /> 
          {dark}
        </div>
      )}
    </button>
  );
}

export default ThemeSwitch;
