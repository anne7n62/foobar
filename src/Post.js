export function post() {
    let name = document.querySelector("#name").value;
    let gamertag = document.querySelector("#gamertag").value;
    let mail = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let basketOrder = [];
    let games = document.querySelectorAll(`input[name="game"]:checked`);

    for (let y = 0; y < games.length; y++) {
        let label_name = games[y].nextElementSibling.textContent;
        gamesArray.push(label_name);
    }

    const data = {
        order_id: id,
        order: basketOrder,
        cartholder_name: name,
        cc_number: cc_number,
        expiration_date: date,
        cvv: cvv,
        table_id: table,
    };

    const postData = JSON.stringify(data);

    fetch("https://foobar-bc64.restdb.io/rest/foobarorders", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "05fbad77cd8766182dd7b82e4e0f989c5ee85",
            "cache-control": "no-cache",
        },
        body: postData,
    })
        .then(res => res.json())
        .then(data => console.log(data));

    // Færdig post - send til thank you view
}
