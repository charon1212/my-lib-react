import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export const useCheckBox = (label: string, init: boolean = false, checkBoxProps?: CheckboxProps) => {
  const [checked, setChecked] = useState(init);
  const checkBox = <FormControlLabel label={label} control={<Checkbox value={checked} onChange={(_, c) => setChecked(c)} {...checkBoxProps} />} />;
  return [checkBox, checked, setChecked] as const;
};
