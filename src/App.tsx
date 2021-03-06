import React, { useRef } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Flickity from "react-flickity-component";

function App() {
  const ref = useRef<Flickity>(null);
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Heading>Damn that error!</Heading>
          <Flex as={Flickity} ref={ref}>
            <Box>item1</Box>
            <Box>item2</Box>
            <Box>item3</Box>
            <Box>item4</Box>
            <Box>item5</Box>
          </Flex>
        </Box>
      </header>
    </div>
  );
}

export default App;
