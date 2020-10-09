export interface IAlertButton {
  text: string;
  role: string;
  cssClass: string;
  handler: (x?: any) => any;
}

export interface IAlert {
  isActive?: boolean;
  title: string;
  subtitle: string;
  message: string;
  buttons: IAlertButton[] | string[];
  onDismiss?: () => void;
  mode?: "ios" | "md" | undefined;
}
