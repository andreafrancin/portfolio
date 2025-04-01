"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import translations, { updateTranslations } from "@/translations/translations";
import { fetchWithLanguage } from "@/utils/fetchWithLanguage";

const TranslationsContext = createContext<{
    localTranslations: Record<string, string>;
} | undefined>(undefined);

export const TranslationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [localTranslations, setLocalTranslations] = useState(translations);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const response: any = await fetchWithLanguage("translations");

                const newData = Object.fromEntries(
                    response.map(({ key, text }: { key: string; text: string }) => [key, text])
                );

                updateTranslations(newData);

                setLocalTranslations((prevTranslations) => ({
                    ...prevTranslations,
                    ...newData,
                }));
            } catch (error) {
                console.error("Error loading translations:", error);
            }
        };

        loadTranslations();
    }, []);

    return (
        <TranslationsContext.Provider value={{ localTranslations }}>
            {children}
        </TranslationsContext.Provider>
    );
};

export const useTranslations = () => {
    const context = useContext(TranslationsContext);
    if (!context) {
        throw new Error("useTranslations must be used within a TranslationsProvider");
    }
    return context;
};
