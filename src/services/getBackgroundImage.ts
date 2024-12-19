import {
  DEFAULT_UNSPLASH_PAGE_SIZE,
  UNSPLASH_API_KEY,
  UNSPLASH_BASE_URI,
} from "../utils/constants";

interface SearchParams {
  query: string;
  page?: number;
  limit?: number;
}

export async function getBackgroundImage(params: SearchParams) {
  const { limit, query, page } = params;

  let url = `${UNSPLASH_BASE_URI}/search/photos?query=${query}&per_page=${DEFAULT_UNSPLASH_PAGE_SIZE ?? limit}`;

  try {
    if (page) {
      url += `&page=${page}`;
    }

    const response = await fetch(url, {
      headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return { data: data?.results, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
