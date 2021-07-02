let data = require("../data/reports.json");

const getReports = (req, res) => {
  if (data) {
    res.json(data).status(200);
  } else {
    res.status(404);
    throw new Error("resources not found");
  }
};

const updateTicket = (req, res) => {
  const body = req.body;
  const index = data.elements.findIndex(
    (ticket) => ticket.id === req.params.reportId
  );
  if (index === -1) {
    res.status(404).json("resources not found");
  } else {
    if (body.ticketState === "CLOSED") {
      elements = data.elements.filter(
        (ticket) => ticket.id !== req.params.reportId
      );
      data = { ...data, elements };
      res.json({
        data: elements,
        ticketState: "CLOSED",
      });
    }
  }
};

module.exports = { getReports, updateTicket };
