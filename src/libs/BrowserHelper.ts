export class BrowserHelper {
  public static isBrowser(): boolean {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return false;
    } else {
      return true;
    }
  }
}
