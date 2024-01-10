const wordInput = document.getElementById('wordInput');
const sendButton = document.getElementById('sendButton');
const responseDiv = document.getElementById('response');

sendButton.addEventListener('click', () => {
  const word = wordInput.value;
  const apiUrl = 'http://localhost:4555/add-yolo'
  sendPostRequest(apiUrl, word)
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
        responseDiv.innerHTML=`
        ${data}
        `
      });
    }
    catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error for further handling
    };
};
