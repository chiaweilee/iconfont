import React from 'react';
import { hyphenateCss } from 'aliba';

let id = '';

let opt = {
  fontClass: 'icon',
  style: {
    width: '1em',
    height: '1em',
    verticalAlign: '-0.15em',
    fill: 'currentColor',
    overflow: 'hidden',
  },
};

export const config = (_id, _opt) => {
  id = _id;

  if (typeof _opt === 'object') {
    opt = Object.assign(opt, _opt);
  }
};

const install = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `//at.alicdn.com/t/font_${id}.js`;
  document.body.appendChild(script);
  document.body.removeChild(script);

  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `.${opt.fontClass}{${hyphenateCss(opt.style)}}`;
  document.head.appendChild(style);
};

export default ({ name }) => {
  if (!window.__iconfont__svg__cssinject__) {
    install();
  }

  return (
    <svg className={opt.fontClass} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
