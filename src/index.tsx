// @ts-ignore
import React from 'react';
import { hyphenateCss } from 'aliba';
import { IOption } from '../index';

declare global {
  interface Window {
    __iconfont__svg__cssinject__: any;
  }
}

interface IProps {
  className?: string;
  style?: object;
  name: string;
}

export function createIconfontSymbol(
  fontId: string,
  option = {} as IOption,
): React.ReactComponentElement {
  return class IconfontSymbol extends React.PureComponent<IProps> {
    option: IOption;
    props: IProps;

    constructor(props: IProps) {
      super(props);

      this.option = Object.assign(
        {
          fontClass: 'icon',
          style: {
            width: '1em',
            height: '1em',
            verticalAlign: '-0.15em',
            fill: 'currentColor',
            overflow: 'hidden',
          },
        },
        option,
      );
    }

    componentWillMount() {
      if (!window.__iconfont__svg__cssinject__) {
        const script = document.createElement('script');
        script.id = fontId;
        script.type = 'text/javascript';
        script.src = `//at.alicdn.com/t/font_${fontId}.js`;
        document.body.appendChild(script);
        document.body.removeChild(script);

        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `.${this.option.fontClass}{${hyphenateCss(this.option.style)}}`;
        document.head.appendChild(style);
      }
    }

    get className() {
      const { className } = this.props;
      if (className) {
        return this.option.fontClass.concat(' ', className);
      }
      return this.option.fontClass;
    }

    render() {
      const { className, name, ...props } = this.props;
      return (
        <svg className={this.className} {...props} aria-hidden="true">
          <use xlinkHref={`#${name}`} />
        </svg>
      );
    }
  };
}
