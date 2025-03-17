export const getLanguage = (): string => {
  return typeof window !== "undefined"
    ? localStorage.getItem("language") || "es"
    : "es";
};

export const setLanguage = (lang: string): void => {
  if (typeof window !== "undefined" && lang !== getLanguage()) {
    localStorage.setItem("language", lang);

    const url = new URL(window.location.toString());
    window.location.replace(url.toString());
  }
};
