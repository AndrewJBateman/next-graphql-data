import React from "react";
import { dehydrate, useQuery } from "react-query";
import { Grid, Text, Button, Title, Image } from "@mantine/core";

import { queryClient, dataByName } from "../../src/api";

export async function getServerSideProps({ params }) {
  await queryClient.prefetchQuery("data", () =>
    dataByName({ name: params.name })
  );

  return {
    props: {
      name: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DataDetail: React.FunctionComponent<{
  name: string;
}> = ({ name }) => {
  const { data } = useQuery("data", () => dataByName({ name }));

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <Grid>
      <Grid.Col xs={12} md={6} lg={4}>
        <Image src={data.data.image} alt={data.data.name} />
      </Grid.Col>
      <Grid.Col xs={12} md={6} lg={4}>
        <Title order={1}>{data.data.name}</Title>

        <Grid mt={10}>
          <Grid.Col span={4}>
            <Title order={5}>Age</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data.data.ageInWeeks} weeks</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={5}>Breed</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data.data.breed}</Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Title order={5}>Sex</Title>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text>{data.data.sex}</Text>
          </Grid.Col>
          {data.data.color && (
            <>
              <Grid.Col span={4}>
                <Title order={5}>Color</Title>
              </Grid.Col>
              <Grid.Col span={8}>
                <Text>{data.data.color}</Text>
              </Grid.Col>
            </>
          )}
        </Grid>
      </Grid.Col>

      <Grid.Col xs={12} md={6} lg={4}>
        <Button fullWidth>Adopt {data.data.name}</Button>
      </Grid.Col>
    </Grid>
  );
};

export default DataDetail;
