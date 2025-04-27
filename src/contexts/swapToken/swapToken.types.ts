import type { Erc20AssetInfo } from '@funkit/api-base';

import type { Nullable } from '../../types';

/** Which input field is currently controlling the swap calculation */
export type SwapInputField = 'usd' | 'source' | 'target';

/** Which token card is currently in focus */
export type SwapFocusedToken = 'source' | 'target';

/**
 * Token used for lookup and comparison.
 * Only the chain ID and token symbol are required to identify a token.
 */
export type TokenDefinition = Pick<Erc20AssetInfo, 'chain' | 'symbol'> & {
  logoURI: string;
  chainName: string;
};

/**
 * A token with full metadata including unit price.
 * This is fetched from the API after a TokenDefinition is selected.
 */
export interface TokenWithPrice extends Erc20AssetInfo {
  /** Current USD price per unit of the token */
  unitPrice: number;
}

/**
 * Represents a numeric amount and its display string.
 */
export interface Amount {
  value: Nullable<number>;
  display: string;
}

/**
 * Full swap context state for the token swap interface.
 * Represents both user input and resolved API data.
 */
export interface SwapContextState {
  sourceToken: TokenDefinition;
  targetToken: TokenDefinition;
  usdAmount: Amount;
  sourceData: Nullable<TokenWithPrice>;
  targetData: Nullable<TokenWithPrice>;
  sourceAmount: Amount;
  targetAmount: Amount;
  loading: boolean;
  inputType: SwapInputField;
  focusedToken: SwapFocusedToken;
  realTime: boolean;
}

/**
 * Functions for mutating the swap context state.
 * Exposed separately to minimize rerenders.
 */
export interface SwapContextStateActions {
  setSourceToken: (token: TokenDefinition) => void;
  setTargetToken: (token: TokenDefinition) => void;
  setUsdAmount: (amount: number) => void;
  setSourceAmount: (amount: number) => void;
  setTargetAmount: (amount: number) => void;
  setInputType: (type: SwapInputField) => void;
  setFocusedToken: (type: SwapFocusedToken) => void;
  setRealTime: (value: boolean) => void;
}

/**
 * Reducer action types for swap context mutations.
 */
export enum SwapTokenActionTypes {
  SET_SOURCE_TOKEN,
  SET_TARGET_TOKEN,
  SET_SOURCE_DATA,
  SET_TARGET_DATA,
  SET_USD_AMOUNT,
  SET_LOADING,
  SET_SOURCE_AMOUNT,
  SET_TARGET_AMOUNT,
  SET_INPUT_TYPE,
  SET_FOCUSED_TOKEN,
  SET_REAL_TIME,
}

/**
 * Generic action shape for the reducer.
 */
export interface ActionSkeleton<T extends SwapTokenActionTypes, P> {
  type: T;
  payload: P;
}

// Action types
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
  Nullable<TokenWithPrice>
>;
export type TargetDataAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_DATA,
  Nullable<TokenWithPrice>
>;
export type LoadingAction = ActionSkeleton<
  SwapTokenActionTypes.SET_LOADING,
  boolean
>;
export type SourceAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_AMOUNT,
  number
>;
export type TargetAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_AMOUNT,
  number
>;
export type InputTypeAction = ActionSkeleton<
  SwapTokenActionTypes.SET_INPUT_TYPE,
  SwapInputField
>;
export type FocusedTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_FOCUSED_TOKEN,
  SwapFocusedToken
>;
export type RealTimeAction = ActionSkeleton<
  SwapTokenActionTypes.SET_REAL_TIME,
  boolean
>;

/**
 * Union type of all reducer actions.
 */
export type SwapTokenReducerActions =
  | SourceTokenAction
  | TargetTokenAction
  | USDAmountAction
  | SourceDataAction
  | TargetDataAction
  | LoadingAction
  | SourceAmountAction
  | TargetAmountAction
  | InputTypeAction
  | FocusedTokenAction
  | RealTimeAction;
