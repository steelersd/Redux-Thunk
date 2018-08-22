import React from "react";
import { branch, renderComponent } from "recompose";

const Spinner = props => {
  return (
    <div>
      <i className="fa fa-spinner fa-spin fa-fw" aria-hidden="true" />
      <span> Fetching...</span>
    </div>
  );
};

const DetailItem = ({ label, value }) => {
  return (
    <div>
      {label}: {value}
    </div>
  );
};

// showSpinner is a function. Per recompose Doc, showSpinner will return a HOC
const showSpinner = showSpinner =>
  branch(showSpinner, renderComponent(Spinner));

// Define 'isFetching' function to be used to determine what it means to spin
const isFetching = showSpinner(props => props.fetching);
const SpinningDetailItem = isFetching(DetailItem);

const SimpleDisplay = props => {
  //    console.log('SimpleDisplay')
  //    console.log(props)
  return (
    <div>
      <SpinningDetailItem
        fetching={props.fetching}
        label="GUID"
        value={props.guid}
      />
      <DetailItem 
        label="RANDOM"
        value={props.random}
       />
    </div>
  );
};

const SpinningDisplay = isFetching(SimpleDisplay);

const Display = props => {
  //   console.log(`props:`)
  //   console.log(props)
  return (
    <React.Fragment>
      {props.groupSpin ? (
        <SpinningDisplay {...props} />
      ) : (
        <SimpleDisplay {...props} />
      )}
    </React.Fragment>
  );
};

export default Display;
