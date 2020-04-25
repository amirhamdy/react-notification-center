import React from 'react';
import cn from 'classnames';

const Tag = props => (
    <span className={cn('notification-tag', props.type)}>
        {props.children}
    </span>
);

Tag.displayName = 'NotificationTagComponent';
Tag.propTypes = {
    type: React.PropTypes.String,
    children: React.PropTypes.node
};
export default Tag;
