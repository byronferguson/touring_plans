var BASE_URL = 'https://touringplans.com/magic-kingdom';

var ATTRACTIONS_BASE_URL = `${BASE_URL}/attractions`;
var DINING_BASE_URL = `${BASE_URL}/dining`;

var ATTRACTIONS_URL = `${ATTRACTIONS_BASE_URL}.json`;
var DINING_URL = `${DINING_BASE_URL}.json`;

var attractionUrl = function (name) {
  return `${ATTRACTIONS_BASE_URL}/${name}.json`;
};

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
  method: 'GET',
  url: ATTRACTIONS_URL,
}).then(function (res) {
  console.log(res);
  $('#attractions').empty().append(createAttractionList(res));
});

function createAttractionList(attractions) {
  return attractions.map(createAttractionListItem);
}

function createAttractionListItem(attraction) {
  return $('<li>').text(attraction.name).addClass('list-group-item');
}


$.ajax({
  url: 'https://trefle.io/api/plants?q=rose&token=aCttaGhBMjlVRjQ4K3dZeDFWRzNvUT09',
  method: 'GET',
  // headers: {
  //   Authorization: 'Bearer aCttaGhBMjlVRjQ4K3dZeDFWRzNvUT09',
  // },
}).then(function (res) {
  console.log(res);
});
