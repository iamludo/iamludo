import React from 'react';
import { Icon, Icons } from './icons.js';

const TableElement = ({
  elementName, elementLabel, elementLetter, elementColour, elementNumber, elementScore }) => {
  return (

    <div className="element">
          <div className="uk-card uk-card-default ">
            <div className="element-header uk-flex uk-flex-between"><el-num>{elementNumber}</el-num><el-score>{elementScore}/10</el-score></div>
            <div className="element-icon"><Icon iconName={elementName}/></div>
            <div className="element-letter"><p style={{ color: elementColour }} >{elementLetter}</p></div>
            <div className="element-name"><p>{elementLabel}</p></div>
            <div className="element-bar"><el-bar style={{ width: elementScore*10 +"%", backgroundColor: elementColour }}></el-bar></div>
          </div>
    </div>

  )
};

export default TableElement;
