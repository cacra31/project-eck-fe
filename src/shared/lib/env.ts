function required(name: keyof ImportMetaEnv) {
  const v = import.meta.env[name];
  if (!v) throw new Error(`Missing env: ${String(name)}`);
  return v;
}

export const ENV = {
  APP_NAME: required("VITE_APP_NAME"),
  API_BASE_URL: required("VITE_API_BASE_URL"),
} as const;
