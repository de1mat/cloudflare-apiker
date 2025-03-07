import { RequestParams } from "../Request";

export interface Routes {
  [route: string]: any;
}

export interface Controllers {
  [className: string]: Controller;
}

export interface Options {
  routes?: Routes;
  controllers?: Controllers;
  debug?: boolean;
  objectVersion?: string;
  exports?: any;
  objects?: string[];
  env?: any;
  authRoutes?: boolean;
  requestParams?: RequestParams;
  firewall?: Firewall | boolean;
  adminPanel?: boolean;
  name?: string;
  email?: EmailOptions;
}

export interface EmailOptions {
  name?: string;
  senderEmail: string;
}

export interface Firewall {
  limitRequestsPerMinute: number;
}

export type Controller = new (...args: any[]) => any;