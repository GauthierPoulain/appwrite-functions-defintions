
declare type AppwriteRequest = {
  readonly body: any;
  readonly bodyRaw: any;
  readonly bodyText: any;
  readonly bodyJson: any;
  readonly bodyBinary: any;
  headers: {};
  method: any;
  host: any;
  scheme: any;
  query: {};
  queryString: any;
  port: number;
  url: string;
  path: any;
};

declare type AppwriteSendReturn = {
  body: any;
  statusCode: number;
  headers: Object;
};

declare type AppwriteResponse = {
  send: (body: any, statusCode?: number, headers?: {}) => AppwriteSendReturn;
  text: (body: any, statusCode?: number, headers?: {}) => AppwriteSendReturn;
  binary: (bytes: any, statusCode?: number, headers?: {}) => AppwriteSendReturn;
  json: (obj: any, statusCode?: number, headers?: {}) => AppwriteSendReturn;
  empty: () => AppwriteSendReturn;
  redirect: (url: any, statusCode?: number, headers?: {}) => AppwriteSendReturn;
};

declare type AppwriteRuntimeContext = {
  req: AppwriteRequest;
  res: AppwriteResponse;
  log: (...message: any) => void;
  error: (...message: any) => void;
};

export {
  AppwriteRequest,
  AppwriteSendReturn,
  AppwriteResponse,
  AppwriteRuntimeContext,
};
