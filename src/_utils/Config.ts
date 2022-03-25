const envSettings = window as any;

export class Config {
  static api_url = envSettings.API_URL;
  static database_username = envSettings.DATABASE_USERNAME;
  static database_password = envSettings.DATABASE_PASSWORD;
}
