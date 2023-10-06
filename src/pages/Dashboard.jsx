import { Form, Link } from "react-router-dom";

import NowContract from "../components/NowContract";
import FlightSearch from "../components/FlightSearch";
import FlightTable from "../components/FlightTable";

const Dashboard = () => {
  return (
    <>
      <NowContract />
      <FlightSearch />
      <FlightTable />
      <Link to="about">About</Link>
    </>
  );
};

export default Dashboard;
