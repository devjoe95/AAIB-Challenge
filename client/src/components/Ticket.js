import React from "react";
import PropTypes from "prop-types";

const Ticket = ({ ticket, blockHandler, resolveHandler }) => {
  const ticketStyles = {
    boxShadow: "1px 1px 10px 1px #DDD",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
    display: "grid",
    gridGap: "50px",
    gridTemplateColumns: "2fr 2fr 1fr",
  };

  const buttonStyles = {
    borderRadius: "5px",
    padding: "7px",
    margin: "7px",
    width: "100px",
    color: "#FFF",
    borderColor: "transparent",
  };

  return (
    <div style={ticketStyles}>
      <div>
        <p>Id: {ticket.id}</p>
        <p>State: {ticket.state}</p>
        <a href="#a">Details</a>
      </div>
      <div>
        <p>Type: {ticket.payload.reportType}</p>
        {ticket.payload.message && <p>Message: {ticket.payload.message}</p>}
      </div>
      <div>
        <div>
          <button
            type="button"
            style={{ ...buttonStyles, backgroundColor: "#CD113B" }}
            onClick={() => blockHandler(ticket.id)}
            >
            Block
          </button>
        </div>
        <div>
          <button
            type="button"
            style={{ ...buttonStyles, backgroundColor: "#185ADB" }}
            onClick={() => resolveHandler(ticket.id)}
          >
            Resolve
          </button>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default Ticket;
