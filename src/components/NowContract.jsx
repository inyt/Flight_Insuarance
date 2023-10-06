import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Box,
  Stack,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
} from "@chakra-ui/react";

const data = {
  flights: [
    {
      id: 1,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
  ],
};

const NowContract = () => {
  return (
    <Card
      mx={250}
      my={30}
      bg="gray.100"
      textAlign="center"
      border="2px"
      borderColor="gray.500"
    >
      <CardHeader>
        <Heading size="lg">現在の保険内容</Heading>
      </CardHeader>

      <CardBody>
        <Stack spacing="1">
          <Box border="1px" borderRadius="5px" borderColor="gray.500">
            <TableContainer mt="2">
              <Table variant="simple" size="md">
                <Thead>
                  <Tr>
                    <Th fontSize="lg">便名</Th>
                    <Th fontSize="lg">出発地</Th>
                    <Th fontSize="lg">到着地</Th>
                    <Th fontSize="lg">出発日時</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.flights.map((flight) => (
                    <Tr key={flight.id}>
                      <Td>{flight.flight_number}</Td>
                      <Td>{flight.from}</Td>
                      <Td>{flight.to}</Td>
                      <Td>{flight.departure_date}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box mt="12px">
            <HStack spacing={8} align="center">
              <Heading size="md">低補償タイプ</Heading>
              <Text fontSize="xl">最大補償金額 1,000円</Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default NowContract;
