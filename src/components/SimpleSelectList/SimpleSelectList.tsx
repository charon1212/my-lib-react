import { IconButton, List, ListItem, ListItemButton, Paper, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export type PropsSimpleSelectList<T> = {
  list: T[];
  icons?: {
    ui: JSX.Element;
    onClick: (value: T) => void;
  }[];
  setKey?: (value: T) => React.Key;
  selected?: (value: T) => boolean;
  onClick?: (value: T) => void;
  content: (value: T) => JSX.Element;
  sx?: {
    list?: SxProps<Theme>;
    listItem?: SxProps<Theme>;
    listItemButton?: SxProps<Theme>;
  };
};

export const SimpleSelectList = <T extends any>(props: PropsSimpleSelectList<T>) => {
  const { list, icons, selected, onClick, content, setKey } = props;
  const sxList = props.sx?.list;
  const sxListItem = props.sx?.listItem;
  const sxListItemButton = props.sx?.listItemButton;
  return (
    <List sx={sxList}>
      {list.map((v, i) => (
        <ListItem
          key={setKey ? setKey(v) : i}
          secondaryAction={
            icons === undefined ? undefined : (
              <>
                {icons.map(({ ui, onClick }) => (
                  <IconButton edge='end' sx={{ m: '0' }} onClick={() => onClick(v)}>
                    {ui}
                  </IconButton>
                ))}
              </>
            )
          }
          sx={sxListItem}
        >
          <ListItemButton selected={selected && selected(v)} onClick={() => onClick && onClick(v)} sx={sxListItemButton}>
            {content(v)}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
