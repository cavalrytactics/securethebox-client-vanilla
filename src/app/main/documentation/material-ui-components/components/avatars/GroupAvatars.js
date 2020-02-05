import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';

export default function GroupAvatars() {
  return (
    <AvatarGroup>
      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />
      <Tooltip title="Foo • Bar • Baz">
        <Avatar>+3</Avatar>
      </Tooltip>
    </AvatarGroup>
  );
}
