import { Input, InputGroup } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        borderRadius={20}
        placeholder='Search For Games'
        variant='filled'
      />
    </InputGroup>
  );
};

export default SearchInput;
