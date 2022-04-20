import api from './api';

class ApiHandler {
  private api: any;
  private authenticated: boolean;
  private token: string;

  constructor(authenticated?: boolean, token?: string) {
    this.api = api;
    this.token = token;
    this.authenticated = authenticated;
  }

  public fillUrlParams(params: any = {}) {
    const headers = this.authenticated ? {
      Authorization: `Bearer ${this.token}`
    } : {}
    
    return {
      params,
      headers
    }
  }

  public get(url: string, body: any = {}) { 
    const { headers} = this.fillUrlParams(body);
    return this.api.get(url, { headers });
  }

  public post(url: string, body: any = {}) { 
    const { params ,headers} = this.fillUrlParams(body);
    return this.api.post(url, params, { headers });
  }

  public put(url: string, body: any = {}) { 
    const { params ,headers} = this.fillUrlParams(body);
    return this.api.put(url, params, { headers });
  }

  public delete(url: string) { 
    const { headers} = this.fillUrlParams();
    return this.api.delete(url, { headers });
  }
}

export default ApiHandler;