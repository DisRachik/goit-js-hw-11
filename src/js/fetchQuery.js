import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const queryStringParameters = {
  key: '34931866-eb90fd9439f12cd327ebe10e3',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

export default async function fetchPixabayApi(
  userQuery,
  page = queryStringParameters.page
) {
  const response = await axios.get(collectUrl(userQuery, page));
  return response.data;
}

function collectUrl(query, page = queryStringParameters.page) {
  const url = new URL(BASE_URL);
  const param = { ...queryStringParameters, q: query, page };
  Object.entries(param).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );
  return url.toString();
}
