import { ComponentClass } from 'react';

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

interface IProps {
  className?: string;
  style?: object;
  name: string;
  onClick?: (e?: EventTarget) => void;
}

declare global {
  interface Window {
    __iconfont__svg__cssinject__: any;
  }
}

declare module 'iconfont-symbol' {
  const createIconfontSymbol: (fontId: string, option: IOption) => ComponentClass<IProps>;
  export createIconfontSymbol;
}
