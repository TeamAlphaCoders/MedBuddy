import { Mongoose } from "mongoose";
import { HospitalsNames, UserModel, UserAddedMedicalRecord } from "../model/AllSchemaModel.js"


export const UserAddedMedRecords = async (request, response) => {
    try {
        const { hospitalName, addedBy, userType, diseases, remediesRecommended, organsCondition, familyHistory, prescription } = request.body;

        const hospital = await HospitalsNames.findOne({ hospitalName: hospitalName });
        
        console.log(hospital);
        if (!hospital) {
            return response.status(404).json({ error: 'Hospital Not Registered' });
        }

        const newMedicalRecord = new UserAddedMedicalRecord({
            hospitalName: hospitalName,
            addedBy,
            userType,
            diseases,
            remediesRecommended,
            organsCondition,
            familyHistory,
            prescription
        });

        await newMedicalRecord.save();

        response.status(200).json({ message: 'User-added medical record stored successfully', medicalRecord: newMedicalRecord });
    }
    catch (error) {
        console.error('Error storing hospital-added medical record:', error);

        response.status(500).json({ error: 'Failed to store hospital-added medical record' });
    }
};