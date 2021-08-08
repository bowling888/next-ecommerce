// function to post data
export async function postData(url = '', data = {}) {

  const response = await fetch('https://bfinegroup.com/api-backend/api/Property/getProductList', {
    method: 'GET', 
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json();
}