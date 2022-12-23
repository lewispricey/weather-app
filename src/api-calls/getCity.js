const getCity = (lat, long) => {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

  return fetch(url).then((response) => {
    return response.json();
  });
};

export default getCity;
