import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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
    {
      id: 2,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 3,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 4,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 5,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 6,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 7,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 8,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 9,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2017-12-12T12:12:12.000Z",
      arrival_date: "2017-12-12T12:12:12.000Z",
    },
    {
      id: 10,
      flight_number: "JAL123",
      airline: "JAL",
      from: "Tokyo",
      to: "New York",
      departure_date: "2018-12-12T12:12:12.000Z",
      arrival_date: "2018-12-12T12:12:12.000Z",
    },
  ],
};

const handleClick = (e) => {
  console.log(e.target);
};

const FlightTable = () => {
  return (
    <TableContainer mt="8">
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th fontSize="lg">便名</Th>
            <Th fontSize="lg">出発地</Th>
            <Th fontSize="lg">到着地</Th>
            <Th fontSize="lg">出発日時</Th>
          </Tr>
        </Thead>
        <Tbody onClick={handleClick} cursor>
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
  );
};

export default FlightTable;
