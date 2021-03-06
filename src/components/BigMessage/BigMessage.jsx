/* React */
import React from 'react'

/* Libs */
import withStyles from 'react-jss'

import success from '../../assets/images/success-icon.png'

const BigMessage = ({
  classes,
  message,
}) =>
  <div className={classes.container}>
    <img src={success} className={classes.icon} alt="Success" />
    <span className={classes.text}>{message}</span>
  </div>

const styles = {
  container: {
    margin: { bottom: 20 },
  },
  icon: {
    display: 'block',
    margin: {
      top: 0,
      left: 'auto',
      right: 'auto',
      bottom: 10,
    },
  },
  text: {
    display: 'block',
    color: '#FF7800',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '17px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}

export default withStyles(styles)(BigMessage)
