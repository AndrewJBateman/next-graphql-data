import { Resolver, Query, Arg } from "type-graphql";

import { Data } from "./data-list";
import dataList from "./data-list.json";

@Resolver(Data)
export class DataListResolver {

  // data query for a single data item
  @Query(() => Data, { nullable: true })
  data(@Arg("name", () => String) name: string): Data | undefined {
    const data = dataList.find((data) => data.name === name);
    if (data === undefined) {
      throw new Error("Data not found");
    }
    return data;
  }

  // data query for all data items
  @Query(() => [Data])
  dataList(): Data[] {
    return dataList;
  }
}
