export enum IModalSize {
  sm = "sm",
  lg = "lg",
  xl = "xl",
  default = "",
}

export interface IModal {
  title: string;
  show: boolean;
  onClose: () => void;
  size?: IModalSize;
  className?: string;
  children: any;
}

export interface IDialog {
  title: string;
  size?: IModalSize;
  onClose: () => void;
  children: any;
}
