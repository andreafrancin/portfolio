export const getLanguage = (): string => {
  return typeof window !== "undefined"
    ? localStorage.getItem("language") || "en"
    : "en";
};

export const setLanguage = (lang: string): void => {
  if (typeof window !== "undefined" && lang !== getLanguage()) {
    localStorage.setItem("language", lang);

    const url = new URL(window.location.toString());
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  }
};
