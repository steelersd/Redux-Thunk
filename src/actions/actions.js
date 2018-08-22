import * as types from "./actionTypes";
import api from "../api/api";

const wait = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const delayedGetGuidAwait = async url => {
  await wait(7000);
  let response = await fetch(url);
  return response.json();
};

async function handleGuidAjaxAwait(url, dispatch) {
  console.dir(url);
  dispatch(fetching(true));
  let t = performance.now();
  let json = await delayedGetGuidAwait(url).catch(alert); // This code will actually pause...
  console.log("delayedGetGuidAwait " + (performance.now() - t) + " milliseconds.");
  dispatch(updateGUID(json));
  dispatch(fetching(false));
}

export const updateGUID = guid => ({
  type: types.UPDATE_RANDOM_GUID,
  guid
});

export const updateNumber = number => ({
  type: types.UPDATE_RANDOM_NUMBER,
  number
});

export const fetching = isFetching => ({
  type: types.FETCHING,
  isFetching
});

export function updateGUIDAjax(url) {
  return function(dispatch, getState) {
    let {fetching} = getState().all
    console.log(`calling handle..` );
    console.log(getState());
    !fetching && handleGuidAjaxAwait(url, dispatch);

  };
}
