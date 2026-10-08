const timeZone = "America/Maceio";

const formats = {
  eventDay: { day: "2-digit", timeZone },
  eventMonth: { month: "short", timeZone },
  eventYear: { year: "numeric", timeZone },
  eventTime: { hour: "numeric", timeZone },
} as const;

export default defineI18nConfig(() => ({
  legacy: false,
  datetimeFormats: {
    "pt-BR": formats,
    en: { ...formats, eventDay: { day: "numeric", timeZone } },
  },
}));
