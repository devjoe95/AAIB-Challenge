const ENDPOINT_URL = "http://localhost:3000/api";

export const getTickets = async () => {
  return await fetch(`${ENDPOINT_URL}/reports`).then((res) => res.json());
};

export const updateTickets = async (id) => {
  const response = await fetch(`${ENDPOINT_URL}/reports/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ticketState: "CLOSED" }),
  });
  return response.json();
};
