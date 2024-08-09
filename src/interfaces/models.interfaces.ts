/**
 * @interface IUser
 * @description This is a general interface for the user object
 */
export interface IUser {
  user: {
    id: number;
    avatar: string | null;
    name: string;
    email: string;
    dni: string | null;
    influencer_id: number | null;
    is_active: boolean;
    phone: string;
    role: "Admin" | "Taquilla" | "Desarrollador" | "Influencer" | 'Rifero';
    content_code: string | null;
    is_first_entry: boolean;
  }
}

/**
 * @interface IPrize
 * @description This is a general interface for prizes on rifamax module
 */
export interface IPrize {
  award: string;
  plate: string | null;
  year: string | null;
  is_money: boolean;
  wildcard: boolean;
}

/**
 * @interface IRaffle
 * @description This is a general interface for raffles on rifamax module
 */
export interface IRaffle {
  id: number;
  admin_status: string;
  currency: string;
  expired_date: string;
  init_date: string;
  lotery: string;
  numbers: number;
  price: number;
  prizes: IPrize[];
  sell_status: 'active' | 'sent' | 'sold';
  title: string;
  uniq_identifier_serial: string;
  user: IUser["user"];
  seller: IUser["user"];
}