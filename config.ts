// Auto-generated configuration for GVC World Greece Pakistan AutoBot

export const config = {
  botName: "GVC World Greece Pakistan",
  country: "Pakistan",
  provider: "GVC World",
  destination: "Greece",
  loginUrl: "https://pk-gr.gvcworld.eu/en/login",
  centers: [
  "Islamabad",
  "Lahore"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Study",
  "Work"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
