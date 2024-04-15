import { Mongoose } from "mongoose";
import { HospitalsNames } from "../model/AllSchemaModel.js"



export const RegisteredHospitalName = async (request, response) => {
    try {
        const { hospitalName } = request.body;
        await HospitalsNames.create({ hospitalName });
        response.status(200).json({ msg: `${hospitalName} registered successfully` });
    } catch (error) {
        response.status(400).json({ msg: "Something went wrong with the registration" });
    }
};

export const ShowdHospitalName = async (request, response) => {
    try {
        const hospitalNames = await HospitalsNames.find({}); 

        response.json({
            msg: "These are the hospital names",
             hospitalNames
        });

    } catch (error) {
        response.status(400).json({ msg: "Something went wrong" });
    }
};
