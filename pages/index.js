import { dehydrate, useQuery } from "react-query";
import Head from "next/head";
import Link from "next/link";
import { Grid, Card, Image, Text, Title } from "@mantine/core";

import { queryClient, getDataList } from "../src/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("dataList", () => getDataList());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery(["dataList"], () => getDataList());

  return (
    <Grid>
      {data?.dataList.map((f, i) => (
        <Grid.Col xs={12} md={6} lg={4} key={[f.name, i].join(":")} p={5}>
          <Link href={`/data/${f.name}`} passHref>
            <Card>
              <Card.Section>
                <Image height={350} src={f.image} alt={f.name} />
              </Card.Section>
              <Title order={3}>{f.name}</Title>
              <Text>
                {f.weight} pound {f.ageInWeeks} weeks old {f.sex.toLowerCase()}{" "}
                {f.breed.toLowerCase()}
              </Text>
            </Card>
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
}
