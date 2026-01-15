import express from "express";
import cors from "cors";
import { errorHandler } from "./interfaces/middlewares/error.js";
//routes
import authRouter from "./interfaces/routes/authRoutes.js";
import votePlaceRouter from "./interfaces/routes/votePlaceRoutes.js";
import userRouter from "./interfaces/routes/userRoutes.js";
import peopleRouter from "./interfaces/routes/peopleRoutes.js";
import departamentRouter from "./interfaces/routes/departamentRoutes.js";
import municipalityRouter from "./interfaces/routes/municipalityRoutes.js";
import candidateRouter from "./interfaces/routes/candidateRoutes.js";
import campaignRouter from "./interfaces/routes/campaignRoutes.js";

//cors options
import { optionsCors } from "./interfaces/middlewares/cors.js";

const app = express();
app.use(express.json());
app.use(cors(optionsCors));
app.options("*", cors(optionsCors));
app.disable("x-powered-by");
const PORT = process.env.PORT ?? 2020;

import "./utils/auth/index.js";

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/people", peopleRouter);
app.use("/departaments", departamentRouter);
app.use("/municipalities", municipalityRouter);
app.use("/candidates", candidateRouter);
app.use("/vote-places", votePlaceRouter);
app.use("/campaigns", campaignRouter);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
