import { Dialog, DialogActions, DialogContent, DialogTitle, SxProps } from '@mui/material';
import { Theme } from '@mui/system';

type Props = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  sx?: {
    dialog?: SxProps<Theme>;
    dialogTitle?: SxProps<Theme>;
    dialogContent?: SxProps<Theme>;
    dialogActions?: SxProps<Theme>;
  };
};
export const DialogBase = (props: Props) => {
  const { title, content, actions, open, onClose, sx } = props;
  return (
    <>
      <Dialog open={open} onClose={onClose} sx={sx?.dialog}>
        {title ? <DialogTitle sx={sx?.dialogTitle}>{title}</DialogTitle> : ''}
        {content ? <DialogContent sx={sx?.dialogContent}>{content}</DialogContent> : ''}
        {actions ? <DialogActions sx={sx?.dialogActions}>{actions}</DialogActions> : ''}
      </Dialog>
    </>
  );
};
