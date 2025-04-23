import type { Erc20AssetInfo } from '@funkit/api-base';

export type TokenDefinition = Pick<Erc20AssetInfo, 'chain' | 'symbol'>;

export interface TokenWithPrice extends Erc20AssetInfo {
  unitPrice: number;
}

export interface SwapContextState {
  sourceToken: TokenDefinition;
  targetToken: TokenDefinition;
  usdAmount: number;

  sourceData: TokenWithPrice | null;
  targetData: TokenWithPrice | null;

  sourceAmount: number | null;
  targetAmount: number | null;

  loading: boolean;
}

export interface SwapContextStateActions {
  // eslint-disable-next-line no-unused-vars
  setSourceToken: (token: TokenDefinition) => void;
  // eslint-disable-next-line no-unused-vars
  setTargetToken: (token: TokenDefinition) => void;
  // eslint-disable-next-line no-unused-vars
  setUsdAmount: (amount: number) => void;
}

export enum SwapTokenActionTypes {
  'SET_SOURCE_TOKEN',
  'SET_TARGET_TOKEN',
  'SET_SOURCE_DATA',
  'SET_TARGET_DATA',
  'SET_SOURCE_AMOUNT',
  'SET_TARGET_AMOUNT',
  'SET_USD_AMOUNT',
  'SET_LOADING',
}

export interface ActionSkeleton<T extends SwapTokenActionTypes, P> {
  type: T;
  payload: P;
}

export type SourceTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_TOKEN,
  TokenDefinition
>;
export type TargetTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_TOKEN,
  TokenDefinition
>;
export type USDAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_USD_AMOUNT,
  number
>;
export type SourceDataAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_DATA,
  TokenWithPrice | null
>;
export type TargetDataAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_DATA,
  TokenWithPrice | null
>;
export type LoadingAction = ActionSkeleton<
  SwapTokenActionTypes.SET_LOADING,
  boolean
>;
export type SourceAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_AMOUNT,
  void
>;
export type TargetAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_AMOUNT,
  void
>;

export type SwapTokenReducerActions =
  | SourceTokenAction
  | SourceDataAction
  | TargetTokenAction
  | USDAmountAction
  | SourceDataAction
  | TargetDataAction
  | LoadingAction
  | SourceAmountAction
  | TargetAmountAction;
