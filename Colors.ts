export const slate900 = "#0f0f0f";
export const stone50 = "#fafaf9";
export const stone100 = "#ffffff";
export const amber400 = "#fbbf24";
export const blue700 = "#1d4ed8";

export const getColors = theme => {
  if (theme === "dark")
    return {
      primaryColor: slate900,
      secondaryColor: stone50,
      accentColor: amber400
    };
  return {
    primaryColor: stone100,
    secondaryColor: slate900,
    accentColor: blue700
  };
};