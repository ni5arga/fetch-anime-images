const waifuTypeSelect = document.getElementById('waifu-type');
const waifuImage = document.getElementById('waifu-image');

// Fetch a random neko photo from waifu.api when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchImage('neko');
});

waifuTypeSelect.addEventListener('change', () => {
  const selectedWaifuType = waifuTypeSelect.value;
  fetchImage(selectedWaifuType);
});

function fetchImage(waifuType) {
  let apiUrl;
  if (waifuType === 'neko' || waifuType === 'nekoGif' || waifuType === 'meow' || waifuType === 'foxGirl') {
    apiUrl = `https://nekos.life/api/v2/img/${waifuType}`;
  } else {
    apiUrl = `https://api.waifu.pics/sfw/${waifuType}`;
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      waifuImage.src = data.url;
    })
    .catch(error => {
      console.error('Error fetching waifu image:', error);
    });
}
