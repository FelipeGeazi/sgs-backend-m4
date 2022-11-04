import { Express } from "express";

import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.routes";
import profileRouter from "./profile.routes";
import sessionRouter from "./session.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
  app.use("/login", sessionRouter());
  app.use("/profile", profileRouter())
};
