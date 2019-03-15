import React from 'react';
import ReactDOM from 'react-dom';
import IconfontSymbol, { config } from './IconfontSymbol';

config('1089854_phq99uk0x5', {});

ReactDOM.render(
  <button>
    <IconfontSymbol name={'iconReact'} />
  </button>
  , document.getElementById('root')
);
