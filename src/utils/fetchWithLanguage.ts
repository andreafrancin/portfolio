import { getLanguage } from "@/utils/languageStorage";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export const fetchWithLanguage = async <T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  const url = `https://back.andreafrancin.com/api/${endpoint}`;
  const language = getLanguage();

  const headers: HeadersInit = {
    ...options.headers,
    "Accept-Language": language,
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
