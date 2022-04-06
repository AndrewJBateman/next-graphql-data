import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Data = {
  __typename?: "Data";
  ageInWeeks: Scalars["Float"];
  attributes: Array<DataAttribute>;
  availableDate: Scalars["String"];
  breed: Scalars["String"];
  color: Scalars["String"];
  description: Array<Scalars["String"]>;
  fee: Scalars["Float"];
  image: Scalars["String"];
  name: Scalars["ID"];
  sex: Scalars["String"];
  weight: Scalars["Float"];
};

export type DataAttribute = {
  __typename?: "DataAttribute";
  key: Scalars["ID"];
  value: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  data?: Maybe<Data>;
  dataList: Array<Data>;
};

export type QueryDataArgs = {
  name: Scalars["String"];
};

export type GetDataListQueryVariables = Exact<{ [key: string]: never }>;

export type GetDataListQuery = {
  __typename?: "Query";
  dataList: Array<{
    __typename?: "Data";
    name: string;
    breed: string;
    ageInWeeks: number;
    image: string;
    sex: string;
    weight: number;
    fee: number;
  }>;
};

export type DataByNameQueryVariables = Exact<{
  name: Scalars["String"];
}>;

export type DataByNameQuery = {
  __typename?: "Query";
  data?: {
    __typename?: "Data";
    name: string;
    breed: string;
    ageInWeeks: number;
    image: string;
    sex: string;
    description: Array<string>;
    color: string;
    attributes: Array<{
      __typename?: "DataAttribute";
      key: string;
      value: string;
    }>;
  } | null;
};

export const GetDataListDocument = gql`
  query getDataList {
    dataList {
      name
      breed
      ageInWeeks
      image
      sex
      weight
      fee
    }
  }
`;
export const DataByNameDocument = gql`
  query dataByName($name: String!) {
    data(name: $name) {
      name
      breed
      ageInWeeks
      image
      sex
      description
      color
      attributes {
        key
        value
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getDataList(
      variables?: GetDataListQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetDataListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDataListQuery>(GetDataListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getDataList",
        "query"
      );
    },
    dataByName(
      variables: DataByNameQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<DataByNameQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DataByNameQuery>(DataByNameDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "dataByName",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
