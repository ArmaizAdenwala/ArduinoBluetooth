import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../screens/home';
import * as bluetoothActions from '../actions/bluetoothActions';

const actions = {
  ...bluetoothActions,
};

const mapStateToProps = state => ({
  bluetooth: state.bluetooth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
