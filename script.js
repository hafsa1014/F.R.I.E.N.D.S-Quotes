const getStuff = 'https://friends-quotes-api.herokuapp.com/quotes';
const showStuff = (data) => {
    console.log(data);
    console.log(data.length);
    console.log(data[0]);
    for (i = 0; i < data.length; i++) {
        let template = `<div class="movie">
<div class="character">${data[i].character}</div>  
<div class="quote">(<span>${data[i].quote}</span>) </div>
</div>
`;
$('#app').append(template);

    }

};
$.getJSON(getStuff, showStuff);