import React from "react";
import Tab from "./Tab";
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {console.log(props.tabs)}
        {props.tabs.map(tab => {
          return(
            <div>
          <Tab
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
          </div>
        )})}
        
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.func.isRequired
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
