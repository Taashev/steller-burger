export interface ILocationState {
  hash: string;
  key: string | undefined;
  pathname: string;
  search: string;
  state: ILocationState | null;
  background?: ILocationState | undefined;
  from?: ILocationState | undefined;
}
