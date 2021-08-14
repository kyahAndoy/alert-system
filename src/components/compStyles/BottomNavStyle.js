import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        width: 0,
  },
  
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default useStyle;