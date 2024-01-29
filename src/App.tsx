import { Grid, GridItem, Show } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}
