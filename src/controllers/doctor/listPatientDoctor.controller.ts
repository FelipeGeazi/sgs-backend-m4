import { Request, Response } from "express";
import listPatientDoctorService from "../../services/doctor/listPatientDoctor.service";

const listPatientDoctorController = async (req: Request, res: Response) => {
  const cpf = req.params.cpf;

  const patient = await listPatientDoctorService(cpf);
  delete patient.password

  return res.status(200).json(patient);
};

export default listPatientDoctorController;
