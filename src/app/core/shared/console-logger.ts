import { environment } from 'src/environments/environment';

export class ConsoleLogger {
  public static enableDebug: boolean = true;

  public static debug(msg: string) {
    if (ConsoleLogger.enableDebug) {
      console.debug(`[Zilk] ${msg}`);
    }
  }

  public static error(msg: string) {
    console.error(`[Zilk] ${msg}`);
  }
}
