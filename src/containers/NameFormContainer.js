import NameForm from "../components/NameForm";
import PropTypes from "prop-types";
import initialState from "../store/initialState";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { compose, partial } from "ramda";
import api from '../api/api'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.all
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  // Uses Promises
  const delayedGetGuid = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("https://helloacm.com/api/random/?n=12").then(function(response) {
          resolve(response.json());
        });
      }, 2000);
    });
  };

  const wait = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const delayedGetGuidAwait = async url => {
    await wait(5000);
    let response = await fetch(url);
    return response.json();
  };

  // Uses Promises
  const handleGuidAjax = () => {
    dispatch(actions.fetching(true));
    delayedGetGuid().then(function(json) {
      dispatch(actions.updateGUID(json));
      dispatch(actions.fetching(false));
    });
  };

//   return {
//     updateGUIDAjaxThunk: bindActionCreators(
//       partial(actions.updateGUIDAjax, [
//         "https://helloacm.com/api/random/?n=12"
//       ]),
//       dispatch
//     ) // Logic lives in actions, redux-thunk in action
  return (
    {
      updateGUIDAjaxThunk: () => {
        let t = performance.now();
        dispatch(actions.updateGUIDAjax("https://helloacm.com/api/random/?n=12")) // Non-blokcing, returns immediately
        console.log("actions.updateGUIDAjax " + (performance.now() - t) + " milliseconds.");
      },
      updateRandom: () => dispatch(actions.updateNumber(api.getGuid()))
    }
  );
}
  // Needed state, so using 'mergeProps'. Think about if there is another way...
 function mergeProps(stateProps, dispatchProps, ownProps) {
   const handleSubmit =  (event) => {
    event.preventDefault();
    const {random} = stateProps
    const message = `
      Random: ${random}
    `
    alert(message);
   } 
    
    return {
      ...stateProps,
      ...ownProps,
      ...dispatchProps,
      handleSubmit,
    };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(NameForm);
