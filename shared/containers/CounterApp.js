import { connect } from 'react-redux'

import { Counter } from '../components/Counter'
import { increment } from '../reducers/counter'

export const CounterApp = connect(
  state => ({ n: state }),
  { increment }
)(Counter)