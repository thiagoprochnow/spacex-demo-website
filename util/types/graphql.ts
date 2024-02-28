/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type BlockApp = {
  __typename?: 'BlockApp';
  message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BlockAppInput = {
  appType?: InputMaybe<Scalars['String']['input']>;
  buildVersion: Scalars['String']['input'];
  deviceBrand: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
};

export type PaginationInput = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  blockApp: BlockApp;
  ships?: Maybe<Array<Ship>>;
  user: User;
};


export type QueryBlockAppArgs = {
  input: BlockAppInput;
};


export type QueryShipsArgs = {
  input: ShipsInput;
};


export type QueryUserArgs = {
  input: UserInput;
};

export type Ship = {
  __typename?: 'Ship';
  active: Scalars['Boolean']['output'];
  class?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ShipsInput = {
  pagination: PaginationInput;
};

export type User = {
  __typename?: 'User';
  block?: Maybe<Scalars['Boolean']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  userId: Scalars['String']['input'];
};

export type ShipsQueryVariables = Exact<{
  input: ShipsInput;
}>;


export type ShipsQuery = { __typename?: 'Query', ships?: Array<{ __typename?: 'Ship', name?: string | null }> | null };


export const ShipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ships"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ShipsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ShipsQuery, ShipsQueryVariables>;