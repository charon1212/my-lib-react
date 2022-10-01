import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';

type YesNoDialogParam<Context extends any> = {
  title?: string;
  message: string;
  onClickYes?: (closeDialog: () => void, context: Context) => unknown;
  onClickNo?: (closeDialog: () => void, context: Context) => unknown;
};
type YesNoDialogReturn<Context extends any> = {
  openYesNoDialog: [Context] extends [never] ? () => void : (context: Context) => void;
  yesNoDialog: JSX.Element;
};

/**
 * Yes/Noダイアログ
 */
export const useYesNoDialog = <Context extends any = never>(param: YesNoDialogParam<Context>): YesNoDialogReturn<Context> => {
  const { title, message, onClickYes, onClickNo } = param;
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<Context>();
  const openYesNoDialog = (context: Context) => {
    setContext(context);
    setOpen(true);
  };
  const closeYesNoDialog = () => {
    setOpen(false);
  };

  const yesNoDialog = (
    <>
      <Dialog
        open={open}
        onClose={() => {
          if (onClickNo) onClickNo(closeYesNoDialog, context!);
        }}
      >
        {title ? <DialogTitle>{title}</DialogTitle> : ''}
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (onClickYes) onClickYes(closeYesNoDialog, context!);
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              if (onClickNo) onClickNo(closeYesNoDialog, context!);
            }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  return { openYesNoDialog, yesNoDialog } as YesNoDialogReturn<Context>;
};
