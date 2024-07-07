function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success'
    };
  }).catch((error) => {
    console.log('Got a response from the API');
    return {
      status: 500,
      body: 'error'
    };
  });
}

export default handleResponseFromAPI;