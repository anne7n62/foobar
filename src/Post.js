function postData(data, url, callback) {

    const postData = JSON.stringify(data);
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "x-apikey": "05fbad77cd8766182dd7b82e4e0f989c5ee85",
            "cache-control": "no-cache"
        },
        body: postData,
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            callback(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export default postData;
