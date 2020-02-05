import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

export default function DisabledTooltips() {
  return (
    <Tooltip title="You don't have permission to do this">
      <span>
        <Button disabled>A Disabled Button</Button>
      </span>
    </Tooltip>
  );
}
