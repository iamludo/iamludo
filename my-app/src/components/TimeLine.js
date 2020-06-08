import React from 'react';
import { Icon, Icons } from './icons.js';
import data from '../data/TimeLineData.json';
import '../styles/TimeLine.css';



const TimeLineItems = () => {

  let timeLineItems = data.map( (item) =>
    <div key={"time-line-item-" + item.id.toString()} data-year-start={item.yearStart} data-year-end={item.yearEnd}  className="item uk-grid uk-child-width-expand@s uk-text-center">
      <div className="year uk-flex-center@s"><p>{item.yearStart} - {item.yearEnd} </p></div>
      <div className="title uk-flex-left@s">
        <h5 >{item.description}</h5>
        <hr/>
      </div>
      <div className="knoledge title uk-flex-right@s uk-flex-center">
      <Icons listPrefix={""}  icons={item.icons} listKey={"timeline-" + item.id.toString()}/>
      </div>
    </div>
  )
  return timeLineItems
}


const TimeLine = () => {
  return (
    <div className="txt-centered" uk-filter="target: .js-filter">
      < Icon iconClass="AboutIcon"iconName = "about-active" />
      <ul className="SortingPanel uk-subnav uk-subnav-pill uk-flex-center">
        <li className="uk-active" uk-filter-control="sort: data-year-end; order: desc"><a>Descending</a></li>
        <li  uk-filter-control="sort: data-year-start; order: asc"><a>Ascending</a></li>
      </ul>
      <div className="experience-grid js-filter" uk-scrollspy="cls: uk-animation-slide-left; target: .item; delay: 300; repeat: true">
        <TimeLineItems />
      </div>
    </div>
  )
}

export default TimeLine;
