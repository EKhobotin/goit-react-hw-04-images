export async function getImages(query, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '40783621-48111ea33d2baaaa5d03de19e';
  const PER_PAGE = 3;
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&per_page=${PER_PAGE}&page=${page}`
  );
  const data = await response.json();
  // console.log(response);
  // console.log(data);
  return data;
}
