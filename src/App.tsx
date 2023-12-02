import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>
        <GridItem area='main'>
          <GameGrid />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside'>aside</GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
