import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32898879-9fd6f99f665dcbb95d5335d80';

export const requestImg = async () => {
  const { data } = await axios.get(
    '${BASE_URL}?q=cat&page=1&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12'
  );

  return data;
};
