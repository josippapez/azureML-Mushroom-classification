import {trackPromise} from 'react-promise-tracker';
import config from '../../config';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ config.MY_KEY);
myHeaders.append("Content-Length", "1108");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");


export const fetchResponse = (odor,sporePrintColor,gillColor,ringType,stalkSurfaceAbove,stalkSurfaceBelow,stalkColorAbove,stalkColorBelow,gillSize) =>{
  var raw = JSON.stringify({"Inputs":
    {"input1":
      {"ColumnNames":
        ["class","cap-shape","cap-surface","cap-color","bruises","odor","gill-attachment","gill-spacing","gill-size","gill-color","stalk-shape","stalk-root","stalk-surface-above-ring","stalk-surface-below-ring","stalk-color-above-ring","stalk-color-below-ring","veil-type","veil-color","ring-number","ring-type","spore-print-color","population","habitat"],
      "Values":
      [["",``,``,``,"",`${odor}`,"",``,``,`${gillColor}`,"","",`${stalkSurfaceAbove}`,`${stalkSurfaceBelow}`,`${stalkColorAbove}`,`${stalkColorBelow}`,"","","",`${ringType}`,`${sporePrintColor}`,``,``]]}},"GlobalParameters":{}});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  return (dispatch,getState)=>{
        var proxyUrl = 'https://thingproxy.freeboard.io/fetch/',
        targetUrl = 'https://ussouthcentral.services.azureml.net/workspaces/4d31dfc7580248b6bf894724bf914b41/services/dc20a531b1ad4b66a44bb22ec54649a8/execute?api-version=2.0&details=true'
        trackPromise(
          fetch(proxyUrl + targetUrl, requestOptions)
              .then(response => response.json())
              .then(result => dispatch({type:"FETCH_RESULTS",response:result}))
              .catch(error => dispatch({type:"FETCH_RESPONSE_ERROR",error}))
        );
    }
}