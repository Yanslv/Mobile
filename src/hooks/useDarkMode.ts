import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../redux/theme";

export const useDarkMode = () => {
  const isDarkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();
  const toggleDarkMode = () => dispatch(toggleMode());

  return [isDarkMode, toggleDarkMode];
};

export const getTheme = mode => (mode ? "dark" : "light")