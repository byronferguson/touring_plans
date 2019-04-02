var BASE_URL = 'https://touringplans.com/magic-kingdom';
var ATTRACTIONS_URL = `${BASE_URL}/attractions.json`;
var ATTRACTIONS_BASE_URL = `${BASE_URL}/attractions`;

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
  $('#attractions').empty().append(createAttractionList(res));
});

function createAttractionList(attractions) {
  return attractions.map(createAttractionListItem);
}

function createAttractionListItem(attraction) {
  return $('<li>').text(attraction.name).addClass('list-group-item');
}
