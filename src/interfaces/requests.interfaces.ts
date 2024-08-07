// API responses interfaces

import { IPrize, IRaffle, IUser } from "./models.interfaces";

/**
 * @interface IRenewTokenResponse
 * @description This is the interface for the response of the renew token endpoint
 */
export interface IRenewTokenResponse {
  token: string;
  exp: string;
  user: IUser["user"];
  header: string;
}

/**
 * @interface ILoginResponse
 * @description This is the interface for the response of the login endpoint
 */
export interface ILoginResponse {
  token: string;
  exp: string;
  user: IUser["user"];
}

/**
 * @interface IRafflesResponse
 * @description This is the interface for the response of the raffles endpoint
 */
export interface IRafflesResponse {
  raffles: IRaffle[],
  metadata: {
    items: number;
    count: number;
    page: number;
    pages: number;
  }
}

/**
 * @interface IGetRaffles
 * @description Interface of getRaffles request function
 */
export interface IGetRaffles {
  token: string;
  queryType?: 'newest' | 'initialized';
  page: number;
  items: number; 
}