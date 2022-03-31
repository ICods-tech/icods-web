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
      Authorization: `Bearer ${localStorage.getItem('token')}`
    } : {}
    
    return {
      params,
      headers
    }
  }

  public get(url: string, params: any = {}) { 
    return this.api.get(url, this.fillUrlParams(params));
  }

  public post(url: string, params: any = {}) { 
    return this.api.post(url, this.fillUrlParams(params));
  }

  public put(url: string, params: any = {}) { 
    return this.api.put(url, this.fillUrlParams(params));
  }

  public delete(url: string, params: any = {}) { 
    return this.api.delete(url, this.fillUrlParams(params));
  }
}

export default ApiHandler;