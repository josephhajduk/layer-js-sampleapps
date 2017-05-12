import React from 'react';
import { render } from 'react-dom';

import * as Layer from 'layer-websdk';
import configureStore from './store/configureStore';
import { ownerSet } from './actions/messenger';
import ChatView from './ChatView'

let appId = window.layerSample.appId;

/**
 * Initialize Layer Client with `appId`
 */
let client = new Layer.Client({
  appId: window.layerSample.appId
});

/**
 * Client authentication challenge.
 * Sign in to Layer sample identity provider service.
 */
client.once('challenge', e => {
  window.layerSample.getIdentityToken(appId, e.nonce, e.callback);
});

console.log('listening for onUserSelection');
window.layerSample.onUserSelection((userId) => {
  /**
   * Start authentication
   */
  client.connect(userId);
});

/**
 * Share the client with the middleware layer
 */
const store = configureStore(client);

/**
 * validate that the sample data has been properly set up
 */
//window.layerSample.validateSetup(client);

render(
  <ChatView client={client} store={store} />,
  document.getElementById('root')
);
