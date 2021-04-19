import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width:" 15vw",
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }

// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };



const BarsSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const AnimationSlider = withStyles({
    root: {
      color: '#FF0084',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);





export default function CustomizedSlider({handleArray,handleSpeed,arrayElements,animationSpeed}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>Array size</Typography>
      <BarsSlider valueLabelDisplay="auto" aria-label="pretto slider" 
      defaultValue={arrayElements}
       onChange={handleArray} 
       value={arrayElements}
       max={200}/>
      <Typography gutterBottom>Animation speed</Typography>
      <AnimationSlider valueLabelDisplay="auto" aria-label="pretto slider"
       defaultValue={20}
       value={animationSpeed}
       onChange={handleSpeed}
       min={1}
       max={1000} />
    </div>
  );
}

