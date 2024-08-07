// General interfaces

import { IRaffle, IUser } from "./models.interfaces";
import { IRafflesResponse } from "./requests.interfaces";

export interface ILoginBody {
  email: string;
  password: string;
}

/**
 * @interface ILinksList
 * @description This is the interface for the LinksList component of navbar
 */
export interface ILinksList {
  position?: 'left' | 'right' | 'top' | 'bottom';
}

/**
 * @interface INotifications
 * @description This is the interface for the notifications component of navbar
 */
export interface INotifications {
  position?: 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title: string
  label: string;
}

/**
 * @interface IAuthRoute
 * @description This is the interface for the AuthRoute component
 */
export interface IAuthRoute {
  roles: string[]
}

/**
 * @interface IRafflesAccordion
 * @description RafflesAccordion component props interface 
 */
export interface IRafflesAccordion {
  step: number
  data: IRafflesResponse["raffles"]
}

/**
 * @interface IAddRaffleForm
 * @description AddRaffleForm component props interface
 */
export interface IAddRaffleForm {
  onNext?: () => void;
  onBack?: () => void;
}

/**
 * @interface ICardRaffle
 * @description CardRaffle component props interface
 */
export interface ICardRaffle {
  raffle: IRaffle;
}

/**
 * @interface ILoaderBlur
 * @description This is the interface for the LoaderBlur component
 */
export interface ILoaderBlur {
  label?: string;
}

/**
 * @interface IInfoRafflesAccordion
 * @description InfoRafflesAccordion component props interface
 */
export interface IInfoRafflesAccordion {
  title: string;
  init_date: string;
  seller: string;
}

/**
 * @interface IStacksRaffle
 * @description IStacksRaffle component props interface
 */
export interface IStacksRaffle {
  color: string;
  number: number;
  title: string;
} 

/**
 * @interface ITitlesRafflesAccordion
 * @description TitlesRafflesAccordion component props interface
 */
export interface ITitlesRafflesAccordion {
  id: number;
  numbers: number;
}

/**
 * @interface IWoodTitle
 * @description WoodTitle component props interface
 */
export interface IWoodTitle {
  title: string;
  variant: 'dashed' | 'dotted' | 'default'
}

/**
 * @type HttpMethod
 * @description This is the type for the HTTP methods
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

// Redux interfaces

/**
 * @interface TokenState
 * @description This is the interface for the state of the token in userSlice
 */
export interface TokenState {
  token: string | null;
}

/**
 * @interface TrustState
 * @description This is the interface for the state of the trustInDevice in userSlice
 */
export interface TrustState {
  trustInDevice: boolean;
}

/**
 * @interface UserState
 * @description This is the interface for the state of the user in userSlice
 */
export interface UserState {
  user: IUser["user"] | null;
}
