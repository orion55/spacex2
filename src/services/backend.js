import config from '../config/config';

class BackendService {
  async getLaunches() {
    const response = await fetch(config.API, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 0,
    });
    if (!response.ok) {
      throw new Error(
        `Error loading data, HTTP status ${response.status}`,
      );
    }

    return await response.json();
  }
}

export default new BackendService();
