import { Box, Tabs, Tab } from '@mui/material';
import { useState, ReactNode } from 'react';

type Props = {
  tabs: {
    tabTitle: string;
    children?: ReactNode;
  }[];
};

export const TabComponent = (props: Props) => {
  const { tabs } = props;
  const [value, setValue] = useState(0);
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)}>
            {tabs.map(({ tabTitle }, i) => (
              <Tab key={i} label={tabTitle} />
            ))}
          </Tabs>
        </Box>
        {tabs.map(({ children }, i) => (
          <div role='tabpanel' hidden={i !== value}>
            {children}
          </div>
        ))}
      </Box>
    </>
  );
};
