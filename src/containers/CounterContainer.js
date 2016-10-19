import { connect } from 'react-redux'
import CounterView from '../components/CounterView'
import { incrementCounter } from '../actions'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => {
      dispatch(incrementCounter())  
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)
