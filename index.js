const express = require("express");
const {
  getReports,
  updateTicket,
} = require("./controllers/response.controller");
const app = express();
const router = express.Router();
const cors = require("cors");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/api", router);

router.get("/reports", getReports);
router.put("/reports/:reportId", updateTicket);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
