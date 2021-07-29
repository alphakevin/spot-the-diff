import React from 'react';
import { List, ListItem, ListSubheader, ListItemText } from '@material-ui/core';
import { Picture } from './types';
import './Nav.css';

type Props = {
  pics: Picture[];
  selected?: Picture;
  onChange: (selected: Picture) => void;
}

function Nav(props: Props): JSX.Element {
  const { pics, selected, onChange } = props;

  return (
    <div className="Nav-list">
      <List
        subheader={(
          <ListSubheader style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>Pics</ListSubheader>
        )}
      >
        {pics.map((p) => (
          <ListItem
            button
            key={p.url}
            onClick={() => onChange(p)}
            selected={p === selected}
          >
            <ListItemText primary={p.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Nav;
