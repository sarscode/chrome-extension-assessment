import { UNSPLASH_BASE_URI } from "../utils/constants";

class CreateRequestClientInstance {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async post({ ...fetchOptions }) {
    await fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...fetchOptions,
    });
  }
}

export const imageService = new CreateRequestClientInstance(UNSPLASH_BASE_URI);
