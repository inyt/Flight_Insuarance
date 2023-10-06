import { Form } from "react-router-dom";
import { Input, InputGroup, InputLeftAddon, HStack } from "@chakra-ui/react";

const FlightSearch = () => {
  return (
    <Form>
      <HStack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="出発地" />
          <Input placeholder="成田" width="auto" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="到着地" />
          <Input placeholder="成田" width="auto" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="出発日" />
          <Input placeholder="12月5日" width="auto" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="便名" />
          <Input placeholder="A001" width="auto" />
        </InputGroup>
      </HStack>
    </Form>
  );
};

export default FlightSearch;
