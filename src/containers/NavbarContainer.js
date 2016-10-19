import { connect } from 'react-redux'
import NavBarView from '../components/NavBarView'

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps)(NavBarView)
