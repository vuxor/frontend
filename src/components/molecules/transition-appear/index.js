import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './styles.css';


export default function List(props) {
  const transitionTime = 300;
  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="list"
        transitionAppear
        transitionAppearTimeout={transitionTime}
        transitionEnterTimeout={transitionTime}
        transitionLeaveTimeout={transitionTime}
      >
        {props.children}
      </ReactCSSTransitionGroup>
    </div>
  );
}


List.propTypes = {
  children: React.PropTypes.node,
  cluster: React.PropTypes.string,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};
