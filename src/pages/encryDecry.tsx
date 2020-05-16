import React, { useState } from 'react';
import { Base64 } from 'js-base64';

export default () => {
  const [textData, setTextData] = useState<string>('');
  const [resData, setResData] = useState<string>();
  const [curAc, setCurAc] = useState<string>();

  const cryAction = (acKey: string) => {
    console.log('cryAction', acKey, textData);
    setCurAc(acKey);
    if (acKey === 'base64-encry') {
      setResData(Base64.encode(textData));
    }
    if (acKey === 'base64-decry') {
      setResData(Base64.decode(textData));
    }
    if (acKey === 'url-encry') {
      setResData(encodeURIComponent(textData));
    }
    if (acKey === 'url-decry') {
      setResData(decodeURIComponent(textData));
    }
  };

  return (
    <div className="pageBlock">
      <div className="encry-block">
        <textarea
          className="encry-top"
          placeholder="粘贴数据"
          value={textData}
          onChange={e => {setTextData(e.target.value);setResData('')}}
        ></textarea>
        <div className="cry-btns">
          <div
            className={`btn ${curAc === 'base64-encry' ? 'active' : ''}`}
            onClick={() => cryAction('base64-encry')}
          >
            Base64编码
          </div>
          <div
            className={`btn ${curAc === 'base64-decry' ? 'active' : ''}`}
            onClick={() => cryAction('base64-decry')}
          >
            Base64解码
          </div>

          <div
            className={`btn ${curAc === 'url-encry' ? 'active' : ''}`}
            onClick={() => cryAction('url-encry')}
          >
            URL编码
          </div>
          <div
            className={`btn ${curAc === 'url-decry' ? 'active' : ''}`}
            onClick={() => cryAction('url-decry')}
          >
            URL解码
          </div>
        </div>
        <textarea className="res" value={resData} readOnly>
          {resData}
        </textarea>
        <div className="cry-btns">
          <div
            className={`btn clear`}
            onClick={() => {
              setResData('');
              setTextData('');
              setCurAc('');
            }}
          >
            清空数据
          </div>
        </div>
      </div>
    </div>
  );
};
