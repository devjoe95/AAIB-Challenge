import React, { useEffect, useState } from "react";
import Ticket from "./components/Ticket";
import "./App.css";
import { getTickets, updateTickets } from "./services/ticketService";

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then((res) => {
      setTickets(res.elements);
    });
  }, []);

  const blockHandler = (id) => {
    updateTickets(id).then(
      (res) =>
        res.ticketState === "CLOSED" &&
        setTickets(tickets.filter((ticket) => ticket.id !== id))
    );
  };

  const resolveHandler = (id) => {
   updateTickets(id).then(
     (res) =>
       res.ticketState === "CLOSED" &&
       setTickets(tickets.filter((ticket) => ticket.id !== id))
   );
  };
  return (
    <React.Fragment>
      <h1>Reports</h1>
      {tickets ? (
        tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            blockHandler={blockHandler}
            resolveHandler={resolveHandler}
          />
        ))
      ) : (
        <p>No tickets available</p>
      )}
    </React.Fragment>
  );
}

export default App;
