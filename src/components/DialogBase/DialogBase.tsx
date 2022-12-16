import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

type Props = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};
export const DialogBase = (props: Props) => {
  const { title, content, actions, open, onClose } = props;
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        {title ? <DialogTitle>{title}</DialogTitle> : ''}
        {content ? <DialogContent>{content}</DialogContent> : ''}
        {actions ? <DialogActions>{actions}</DialogActions> : ''}
      </Dialog>
    </>
  );
};
