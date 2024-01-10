const wordInput1 = document.getElementById('wordInput1');
const sendButton1 = document.getElementById('sendButton1');
const responseDiv1 = document.getElementById('response1');

const wordInput2 = document.getElementById('wordInput2');
const sendButton2 = document.getElementById('sendButton2');
const responseDiv2 = document.getElementById('response2');

sendButton1.addEventListener('click', () => {
  const word = wordInput1.value;
  const apiUrl = 'http://localhost:4099/python-res-only'
  sendPostRequest(apiUrl, word)
});

sendButton2.addEventListener('click', () => {
  const word = wordInput2.value;
  const apiUrl = 'http://localhost:4099/python-to-node-container'
  sendPostRequest2(apiUrl, word)
});

async function sendPostRequest(url, stringData) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "word": stringData })
      });

      response.json().then(data => {
        console.log(data);
        // console.log(JSON.stringify(data));
        responseDiv1.innerHTML=`
        ${data}
        `
      });
    }
    catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error for further handling
    };
};


async function sendPostRequest2(url, stringData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "word": stringData })
    });
    console.log('in post request2 try');
    response.json().then(data => {
      console.log('in post request2 try data');
      console.log(data);
      // console.log(JSON.stringify(data));
      responseDiv2.innerHTML=`
      ${data}
      `
    });
  }
  catch (error) {
      console.log('in post request2 try error');
      console.error('Error:', error);
      throw error; // Re-throw the error for further handling
  };
};