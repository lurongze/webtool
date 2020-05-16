import React, { useState, useEffect } from 'react';
import { Link} from 'umi';
import { useSize } from '@umijs/hooks';

export default (props:{children:any,location:{pathname:string}}) => {
  const pathName = props.location.pathname || '';
  const [ funcDiv, funcRef] = useSize<HTMLDivElement>();
  const [ funcAreaHeight, setFuncAreaHeight] = useState<string>();
  useEffect(()=>{
    setFuncAreaHeight(`calc(100vh - ${funcDiv.height}px)`)
  });

  return (
    <>
      <div className='funcList' ref={funcRef}>
        {/* {JSON.stringify(funcAreaHeight)} */}
        <Link className={`funcItem ${pathName==='/json-view'?'funcItemActive':''}`} to='/json-view'>JSON格式化</Link>
        <Link className={`funcItem ${pathName==='/encry-decry'?'funcItemActive':''}`} to='/encry-decry'>加解密/编码</Link>
        <Link className={`funcItem ${pathName==='/base64-img'?'funcItemActive':''}`} to='/base64-img'>Base64图片</Link>
      </div>
      <div className='funArea' style={{height: funcAreaHeight}}>
        {props.children}
      </div>
    </>
  );
}
