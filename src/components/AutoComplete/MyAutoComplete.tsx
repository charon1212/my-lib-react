import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from '@mui/material';

type Props<T extends { label: string }> = {
  options: T[];
  filter?: (options: T[], input: string) => T[];
  autocompleteProps?: Partial<AutocompleteProps<T, undefined, undefined, undefined>>;
  textFieldProps?: TextFieldProps;
};

/**
 * 補完入力機能付きのTextField。
 *
 * @param props.options 補完する候補リスト。
 * @param props.filter 補完入力のフィルター条件。第1引数はprops.optionsと同値、第2引数は現在の入力値。
 * @param props.autocompleteProps AutocompleteのProps。
 * @param props.textFieldParams TextFieldのProps。label等が使える。value,onChangeはautocompleteProps側で指定すること。
 */
export const MyAutoComplete = <T extends { label: string }>(props: Props<T>) => {
  const { options, filter, autocompleteProps, textFieldProps } = props;
  return (
    <Autocomplete
      {...autocompleteProps}
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
      filterOptions={(options, state) => (filter ? filter(options, state.inputValue) : options)}
    />
  );
};
