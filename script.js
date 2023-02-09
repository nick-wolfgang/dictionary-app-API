//Full URL Should be like this : https://api.dictionaryapi.dev/api/v2/entries/en/<word>

getDictionaryData = (word) => {
    const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const FULL_URL = URL + word

    let dictionaryPromise = fetch(FULL_URL)
    console.log(dictionaryPromise)
    return dictionaryPromise.then((response) => {
        return response.json()
    })
}



searchWord = () => {
    const mot = document.getElementById('search-word').value;
    getDictionaryData(mot)
    .then((response) => {
        console.log(response)
        showWordData(response)
    }).catch((error) => {
        console.log('There was an error: ' + error)
        alert('An error occured')
        var win = window.open("", "Error", "height=200,width=400");
        win.document.write("An error occurred: " + error);
    })
}

showWordData = (wordData) => {
    word = wordData[0].word
    definition = wordData[0].meanings[0].definitions[0].definition
    document.getElementById('word').innerText = word;
    document.getElementById('definition').innerText = definition;
    document.getElementById('example').innerText = wordData[0].phonetic;
}

