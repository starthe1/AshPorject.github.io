const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.breed');  
const dogImg = document.querySelector('dogimg')
//Checkboxes
fetch(BREEDS_URL)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    const breedObj= data.message;
    const breedArr = Object.keys(breedObj)

    for (let i = 0; i < breedArr.length; i++) {
      const option = document.createElement('option');
      option.value = breedArr[i];
      option.innerText = breedArr[i];
      select.appendChild(option)
    }
});
//function to get img
function getImg(link) {
  fetch(link)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    const img = document.createElement('img');
    img.src = data.message;
    img.className = "dogimg"
    img.alt = "Cute doggo";
  

    document.querySelector('.doggos').appendChild(img);  
});
};
//Event to ake link for img and start img function
select.addEventListener('change', function(event) {
 const get = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
 getImg(get)
})