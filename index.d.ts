export interface IOption {
  fontClass?: string;
  style?: {
    width?: string;
    height?: string;
    verticalAlign?: string;
    fill?: string;
    overflow?: string;
  };
}

declare module 'iconfont-symbol' {
  const createIconfontSymbol: (fontId: string, option: IOption) => any;
  export createIconfontSymbol;
}
