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

  const handleUpImg = (e)=>{
    console.log('handleUpImg', e.target.files[0])
    const fileReader = new FileReader();
    fileReader.onload = function(){
      setTextData(fileReader.result?.toString() || '');
    }
    fileReader.readAsDataURL(e.target.files[0]);
  }


  return (
    <div className="pageBlock">
      <div className="encry-block">
        <textarea
          className="encry-top"
          placeholder="粘贴base64图片数据"
          value={textData}
          onChange={e => {setTextData(e.target.value);setResData('')}}
        ></textarea>
        <div className="cry-btns">
          
          <div
            className={`btn`}
            onClick={() => cryAction('base64-encry')}
          >
            +上传图片
            <input className='input-file' accept="image/*" type='file' name='上传图片' onChange={(e)=>handleUpImg(e)} />
          </div>
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
        <div className="encry-block img-block">
          {textData && (<img src={textData} />)}
        </div>
        
      </div>
    </div>
  );
};
