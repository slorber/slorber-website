import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { injectGlobal } from 'emotion';

const transitionDefaultDuration = 400;

const transitionName = 'default-mount-animation';

export const transition = {
  easeIn: (property, duration = transitionDefaultDuration) =>
    `${duration}ms ${property} ease-in`,
};

injectGlobal`
.${transitionName}-appear {
  opacity: 0.01;
  transition: ${transition.easeIn('opacity')};
}
.${transitionName}-appear.${transitionName}-appear-active {
  opacity: 1;
}
.${transitionName}-enter {
  opacity: 0.01;
  transition: ${transition.easeIn('opacity')};
}
.${transitionName}-enter.${transitionName}-enter-active {
  opacity: 1;
}
.${transitionName}-leave {
  opacity: 1;
  transition: ${transition.easeIn('opacity')};
}
.${transitionName}-leave.${transitionName}-leave-active {
  opacity: 0.01;
}
`;

export const DefaultMountUnmountAnimation = ({
  className,
  children,
  appear = true,
  enter = true,
  leave = true,
}) => {
  return (
    <ReactCSSTransitionGroup
      className={className}
      transitionName={transitionName}
      transitionAppear={appear}
      transitionAppearTimeout={transitionDefaultDuration}
      transitionEnter={enter}
      transitionEnterTimeout={transitionDefaultDuration}
      transitionLeave={leave}
      transitionLeaveTimeout={transitionDefaultDuration}
    >
      {children}
    </ReactCSSTransitionGroup>
  );
};

export default DefaultMountUnmountAnimation;
