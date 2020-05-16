import React, { useState } from 'react';

import JSONTree from 'react-json-tree';
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable';

// Inside a React component:
// const json = {
//   array: [1, 2, 3],
//   bool: true,
//   object: {
//     foo: 'bar'
//   },
//   immutable: Map({ key: 'value' })
// }

export default () => {
  // let obj =
  //   '{"code":201,"data":{"endRow":1,"hasNextPage":false,"hasPreviousPage":false,"isFirstPage":true,"isLastPage":true,"list":[{"bookitem":[{"key":"ED65CCF4B1123EF5E04353011EACECE5","other1":"","other10":"","other11":"","other12":"","other13":"","other14":"","other15":"","other16":"","other17":"","other18":"","other19":"","other2":"","other20":"","other3":"","other4":"","other5":"","other6":"","other7":"","other8":"","other9":"","value":"痤疮"},{"key":"06daab4b-4ade-49a1-a2e8-5a536ce03ff1","other1":"","other10":"","other11":"","other12":"","other13":"","other14":"","other15":"","other16":"","other17":"","other18":"","other19":"","other2":"","other20":"","other3":"","other4":"","other5":"","other6":"","other7":"","other8":"","other9":"","value":"黄金点阵"},{"key":"e8305e65-946e-4fd5-abce-094387bbebfd","other1":"","other10":"","other11":"","other12":"","other13":"","other14":"","other15":"","other16":"","other17":"","other18":"","other19":"","other2":"","other20":"","other3":"","other4":"","other5":"","other6":"","other7":"","other8":"","other9":"","value":"塑美极"}],"cusid":"48b62632-561a-4de8-ae83-c067a9bfdd80","fcontrolunitid":"AzxyxptbS3a31TaJPETBg8znrtQ=","fnexttime":null,"prevdays":0,"proids":"XVy4Bj/pHgbgU1IBHqzs0iWWPpY=","pronames":"深蓝升级BTL面部（单次）","typeid":"iHjRkzXuToiqt+oi/tmvorN4J/c=","typename":"紧肤除皱"}],"navigateFirstPage":1,"navigateLastPage":1,"navigatePages":8,"navigatepageNums":[1],"nextPage":0,"pageNum":1,"pageSize":10000,"pages":1,"prePage":0,"size":1,"startRow":1,"total":3},"message":"SUCCESS"}';
  // obj = JSON.parse(obj);
  // obj =JSON.stringify(JSON.parse(obj),null,2);
  const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };
  const [jsonData, setJsonData] = useState<string>('');
  const [jsonTreeData, setJsonTreeData] = useState<Object>({});
  const handleChange =(textValue:string)=>{
    console.log('handleChange',textValue);
    setJsonData(textValue);
    try{
      // let obj =JSON.stringify(JSON.parse(textValue),null,2);
      let obj = JSON.parse(textValue);
      setJsonTreeData(obj);
    } catch(e){
      alert('JSON 格式错误')
    }
  }
  return (
    <div className="pageBlock">
      <div className="jsonViewPage">
        <textarea
          className="left block"
          placeholder="粘贴JSON数据"
          value={jsonData}
          onChange={(e)=>handleChange(e.target.value)}
        ></textarea>
        <div className="right block">
          <JSONTree
            data={jsonTreeData}
            theme={theme}
            shouldExpandNode={(
              keyName: string,
              data: Object,
              level: number,
            ) => {
              return level < 4;
            }}
            data-invertTheme={false}
          />
        </div>
      </div>
    </div>
  );
};
