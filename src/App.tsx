import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}>
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>
        <GridItem area='main'>
          <GameGrid />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingLeft='10px'>
            <GenreList />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
