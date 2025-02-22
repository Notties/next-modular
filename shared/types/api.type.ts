/* eslint-disable @typescript-eslint/no-explicit-any */
export interface APIResponse<T = any> {
  errorCode?: string;
  httpsStatus?: number;
  successful?: boolean;
  message?: string;
  data?: T;
}
