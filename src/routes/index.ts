import { Express } from "express";
import doctorRouter from "./doctor.routes";
import patientRouter from "./patient.route";

export const appRoutes = (app: Express) => {
    app.use("/doctor", doctorRouter())
    app.use("/patient", patientRouter())
};
