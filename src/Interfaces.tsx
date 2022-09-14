export type UrlType = {
  [x: string]: string
};

export type GetFunctionType<T extends {}> = (url: string) => Promise<string | T>;

export interface UseRequest<T extends {}> {
  apiGet: GetFunctionType<T>
};