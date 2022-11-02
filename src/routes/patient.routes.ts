import { Router } from "express";
import createPatientController from "../controllers/patient/createPatient.controller";
import createUserMiddleware from "../middlewares/createUser.middleware";
import listExamsController from "../controllers/patient/listExams.controller";
import authTokenMiddleware from "../middlewares/ensureToken.middleware";
import validateRequest from "../middlewares/validateRequest.middleware";
import { patientCreateSchema } from "../serializers";
import createMedicineController from "../controllers/patient/createMedicines.controller";
import listMedicinesController from "../controllers/patient/listMedicines.controller";
import createAllergyController from "../controllers/patient/createAllergy.controller";
import listAllergyController from "../controllers/patient/listAllergys.controller";
import createDiseaseController from "../controllers/patient/createDisease.controller";
import listDiseasesController from "../controllers/patient/listDisease.controller";

const router = Router();

const patientRouter = () => {
  router.post(
    "",
    validateRequest(patientCreateSchema),
    createUserMiddleware,
    createPatientController
  );
  router.post("/exam", authTokenMiddleware, listExamsController);
  router.post("/medicine", authTokenMiddleware, createMedicineController);
  router.get("/medicine", authTokenMiddleware, listMedicinesController);
  router.post("/allergy", authTokenMiddleware, createAllergyController);
  router.get("/allergy", authTokenMiddleware, listAllergyController);
  router.post("/disease", authTokenMiddleware, createDiseaseController);
  router.get("/disease", authTokenMiddleware, listDiseasesController);
  
  return router;
};

export default patientRouter;
