import {trackPromise} from 'react-promise-tracker';
import config from '../../config';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer "+ config.MY_KEY);
myHeaders.append("Content-Length", "1108");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");


export const fetchResponse = (input1,input2,input3,input4,input5,input6,input7,input8,input9,input10) =>{ 
  var raw = JSON.stringify({"Inputs":{"input1":{"ColumnNames":["class","cap-shape","cap-surface","cap-color","bruises","odor","gill-attachment","gill-spacing","gill-size","gill-color","stalk-shape","stalk-root","stalk-surface-above-ring","stalk-surface-below-ring","stalk-color-above-ring","stalk-color-below-ring","veil-type","veil-color","ring-number","ring-type","spore-print-color","population","habitat"],"Values":[["",`${input1}`,`${input2}`,`${input3}`,`${input4}`,`${input5}`,"",`${input7}`,`${input10}`,`${input6}`,"","","","","","","","","","","",`${input9}`,`${input8}`]]}},"GlobalParameters":{}});
  console.log(raw);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };  
  return (dispatch,getState)=>{
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://ussouthcentral.services.azureml.net/workspaces/4d31dfc7580248b6bf894724bf914b41/services/762baf005e81497dbcd774b1c397e735/execute?api-version=2.0&details=true'
        trackPromise(
          fetch(proxyUrl + targetUrl, requestOptions)
              .then(response => response.json())
              .then(result => dispatch({type:"FETCH_RESULTS",response:result}))
              .catch(error => dispatch({type:"FETCH_RESPONSE_ERROR",error}))
        );
    }
}