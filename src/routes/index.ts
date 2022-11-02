import { Express } from "express";

import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.routes";
import medicinesRouter from "./medicines.routes";
import sessionRouter from "./session.routes";

export const appRoutes = (app: Express) => {
  app.use("/patient", patientRouter());
  app.use("/doctor", doctorRouter());
  app.use("/medicines", medicinesRouter());
  app.use("/login", sessionRouter());
};
