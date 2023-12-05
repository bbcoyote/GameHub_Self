import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);

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
          <PlatformSelector
            selectPlatform={selectPlatform}
            onSelectPlatform={(platform) => setSelectPlatform(platform)}
          />
          <GameGrid
            selectPlatform={selectPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingLeft='10px'>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
