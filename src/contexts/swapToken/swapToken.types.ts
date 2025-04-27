import type { Erc20AssetInfo } from '@funkit/api-base';

import type { Nullable } from '../../types';

/** Which input field is currently controlling the swap calculation */
export type SwapInputField = 'usd' | 'source' | 'target';

/** Which token card is currently in focus */
export type SwapFocusedToken = 'source' | 'target';

/**
 * Minimal definition of a token used for lookup and comparison.
 * Only the chain ID and token symbol are required to identify a token.
 */
export type TokenDefinition = Pick<Erc20AssetInfo, 'chain' | 'symbol'> & {
  logoURI: string;
  chainName: string;
};

/**
 * A token with full metadata including  unit price.
 * This is fetched from the API after a TokenDefinition is selected.
 */
export interface TokenWithPrice extends Erc20AssetInfo {
  /** Current USD price per unit of the token */
  unitPrice: number;
}

export interface Amount {
  value: Nullable<number>;
  display: string;
}

/**
 * The full state shape of the token swap interface.
 * Represents both user input and resolved API data.
 */
export interface SwapContextState {
  /** Selected token as the source of the swap */
  sourceToken: TokenDefinition;
  /** Selected token as the target of the swap */
  targetToken: TokenDefinition;
  /** User-entered amount in USD to be converted */
  usdAmount: Amount;

  /** Resolved metadata and pricing for the source token */
  sourceData: Nullable<TokenWithPrice>;
  /** Resolved metadata and pricing for the target token */
  targetData: Nullable<TokenWithPrice>;

  /** The calculated amount of source token equivalent to the USD input */
  sourceAmount: Amount;
  /** The calculated amount of target token equivalent to the USD input */
  targetAmount: Amount;

  /** Indicates whether token/price data is being fetched */
  loading: boolean;

  /** Indicates the input value type we are basing our swap calculations on */
  inputType: SwapInputField;

  /** Indicates which token is in focus */
  focusedToken: SwapFocusedToken;
}

/**
 * Mutator functions that update the swap context state.
 * These are provided separately from state to avoid rerenders.
 */
export interface SwapContextStateActions {
  /**
   * Sets the currently selected source token.
   * @param token A minimal token reference to fetch metadata + pricing.
   */
  setSourceToken: (token: TokenDefinition) => void;

  /**
   * Sets the currently selected target token.
   * @param token A minimal token reference to fetch metadata + pricing.
   */
  setTargetToken: (token: TokenDefinition) => void;

  /**
   * Sets the USD amount input by the user.
   * @param amount Raw number value (e.g. 100 for $100.00).
   */
  setUsdAmount: (amount: number) => void;

  /**
   * Sets the source token amount manually entered by the user.
   * @param amount Raw number value (e.g. 0.5 for 0.5 ETH).
   */
  setSourceAmount: (amount: number) => void;

  /**
   * Sets the target token amount manually entered by the user.
   * @param amount Raw number value (e.g. 1.2 for 1.2 WBTC).
   */
  setTargetAmount: (amount: number) => void;

  /**
   * Sets the input for which we are basing calculations on.
   * @param type 'usd' | 'source' | 'target
   */
  setInputType: (type: SwapInputField) => void;

  /**
   * Sets the input for which we are basing calculations on.
   * @param type 'usd' | 'source' | 'target
   */
  setFocusedToken: (type: SwapFocusedToken) => void;
}

/**
 * Action types used in the reducer to mutate swap state.
 */
export enum SwapTokenActionTypes {
  'SET_SOURCE_TOKEN',
  'SET_TARGET_TOKEN',
  'SET_SOURCE_DATA',
  'SET_TARGET_DATA',
  'SET_USD_AMOUNT',
  'SET_LOADING',
  'SET_SOURCE_AMOUNT',
  'SET_TARGET_AMOUNT',
  'SET_INPUT_TYPE',
  'SET_FOCUSED_TOKEN',
}

/**
 * Reusable action structure used in the reducer.
 * @template T - Action type
 * @template P - Action payload
 */
export interface ActionSkeleton<T extends SwapTokenActionTypes, P> {
  type: T;
  payload: P;
}

/** Action to update the source token selection */
export type SourceTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_TOKEN,
  TokenDefinition
>;

/** Action to update the target token selection */
export type TargetTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_TOKEN,
  TokenDefinition
>;

/** Action to update the USD amount */
export type USDAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_USD_AMOUNT,
  number
>;

/** Action to update fetched metadata + price for the source token */
export type SourceDataAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_DATA,
  Nullable<TokenWithPrice>
>;

/** Action to update fetched metadata + price for the target token */
export type TargetDataAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_DATA,
  Nullable<TokenWithPrice>
>;

/** Action to set the global loading flag for token/price fetches */
export type LoadingAction = ActionSkeleton<
  SwapTokenActionTypes.SET_LOADING,
  boolean
>;
/** Action to update the source amount */
export type SourceAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_SOURCE_AMOUNT,
  number
>;

/** Action to update the target amount */
export type TargetAmountAction = ActionSkeleton<
  SwapTokenActionTypes.SET_TARGET_AMOUNT,
  number
>;

/** Action to update the input we to be watched when calculating amounts */
export type InputTypeAction = ActionSkeleton<
  SwapTokenActionTypes.SET_INPUT_TYPE,
  SwapInputField
>;

/** Action to update the input we to be watched when calculating amounts */
export type FocusedTokenAction = ActionSkeleton<
  SwapTokenActionTypes.SET_FOCUSED_TOKEN,
  SwapFocusedToken
>;

/**
 * Union of all valid reducer actions for the swap context.
 */
export type SwapTokenReducerActions =
  | SourceTokenAction
  | SourceDataAction
  | TargetTokenAction
  | USDAmountAction
  | SourceDataAction
  | TargetDataAction
  | LoadingAction
  | SourceAmountAction
  | TargetAmountAction
  | InputTypeAction
  | FocusedTokenAction;
