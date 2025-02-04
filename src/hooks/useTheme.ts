import { useEffect, useState } from "react";
import applyTheme from "../utils/applyTheme";

type ThemeSettings = {
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
};

export const useTheme = (
  initialTheme: ThemeSettings
): [ThemeSettings, React.Dispatch<React.SetStateAction<ThemeSettings>>] => {
  const [theme, setTheme] = useState<ThemeSettings>(initialTheme);

  useEffect(() => {
    chrome.storage.sync.get("theme", (data) => {
      if (data.theme) {
        setTheme(data.theme);
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({ theme });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        const tabId = tabs[0].id;
        if (tabId) {
          chrome.scripting.executeScript({
            target: { tabId },
            func:applyTheme,
            args: [theme],
          });
        } else {
          console.error("Tab ID not found.");
        }
      } else {
        console.error("No active tab found.");
      }
    });
  }, [theme]);

  return [theme, setTheme];
};
