import { getRequestConfig } from "next-intl/server";

import el from "./messages/el.json";
import en from "./messages/en.json";

const messages = {
    el,
    en,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;

    const locale = requested === "en" ? "en" : "el";

    return {
        locale,
        messages: messages[locale],
    };
});