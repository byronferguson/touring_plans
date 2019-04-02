var API_KEY = '5d776dcd6a105f3be5b190dda376f80a';
var BASE_URL = 'https://api-v3.igdb.com';
var SEARCH_ENDPOINT = '/search';

// eslint-disable-next-line
jQuery.ajaxPrefilter(function (options) {
  // eslint-disable-next-line
  if (options.crossDomain && jQuery.support.cors) {
    // eslint-disable-next-line
    options.url = `https://cors-anywhere.herokuapp.com/${options.url}`;
  }
});

console.log('testing');

$.ajax({
  method: 'POST',
  url: BASE_URL + SEARCH_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'user-key': API_KEY,
  },
  data: {
    name: 'Final Fantasy',
  },
}).then(function (res) {
  console.log('res :', res);
});
