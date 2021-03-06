/* React */
import React, { Component } from 'react'

/* Libs */
import { connect } from 'react-redux'
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom';

/* Custom components */
import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';

import BigMessage from '../../components/BigMessage/BigMessage';
import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import TotalizersList from '../../components/Totalizers/TotalizersList/TotalizersList';

class ConfirmationPage extends Component {
  componentDidMount() {
    // If the payment information doesn't exists, the order wasn't placed
    if (
      !this.props.creditCardNumber ||
      !this.props.creditCardHolder ||
      !this.props.creditCardExpDate
    )
      this.props.history.push('/checkout/')
  }

  render() {
    const {
      classes,
      creditCardNumber, // The number is already processed by the reducer, so it will show only the last 4 digits
      creditCardHolder,
      creditCardExpDate,
    } = this.props

    return (
      <div>
        <BigMessage message="COMPRA EFETUADA COM SUCESSO" />

        <div className={classes.containerRow}>
          <div className={classes.leftContainer}>
            <Title>Pagamento</Title>
            <Card>
              <p className={classes.paymentInfo}>{creditCardNumber}</p>
              <p className={classes.paymentInfo}>{creditCardHolder}</p>
              <p className={classes.paymentInfo}>{creditCardExpDate}</p>
            </Card>

            <Title>Produtos</Title>
            <Card>
              <CartItemList />
            </Card>
          </div>

          <div className={classes.rightContainer}>
            <TotalizersList />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  paymentInfo: {
    fontSize: 14,
    lineHeight: '17px',
    margin: { bottom: 0 },
  },
  '@media (min-width: 1024px)': {
    containerRow: {
      display: 'flex',
    },
    leftContainer: {
      width: '55%',
    },
    rightContainer: {
      flex: 'auto',
      padding: { left: 20 },
      margin: { top: 25 },
    },
  }
}

const mapStateToProps = state => ({
  creditCardNumber: state.payment.creditCardNumber,
  creditCardHolder: state.payment.creditCardHolder,
  creditCardExpDate: state.payment.creditCardExpDate
})

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ConfirmationPage)))
