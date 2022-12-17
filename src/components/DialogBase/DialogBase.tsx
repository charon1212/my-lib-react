import {
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
} from '@mui/material';

type Props = {
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  props?: {
    dialog?: DialogProps;
    dialogTitle?: DialogTitleProps;
    dialogContent?: DialogContentProps;
    dialogActions?: DialogActionsProps;
  };
};
export const DialogBase = (props: Props) => {
  const { title, content, actions, open, onClose } = props;
  return (
    <>
      <Dialog open={open} onClose={onClose} {...props.props?.dialog}>
        {title ? <DialogTitle {...props.props?.dialogTitle}>{title}</DialogTitle> : ''}
        {content ? <DialogContent {...props.props?.dialogContent}>{content}</DialogContent> : ''}
        {actions ? <DialogActions {...props.props?.dialogActions}>{actions}</DialogActions> : ''}
      </Dialog>
    </>
  );
};
