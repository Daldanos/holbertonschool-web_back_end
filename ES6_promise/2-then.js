function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success'
    };
  }).catch((error) => {
    console.log('Error from the API:', error.message);
    return Promise.reject(new Error('API request failed'));
  });
}

export default handleResponseFromAPI;
