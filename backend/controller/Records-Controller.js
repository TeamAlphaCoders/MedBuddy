import { Mongoose } from "mongoose";
import {  MedicalRecord, UserModel } from "../model/AllSchemaModel.js"


export const MedRecords = async (request, response) => {
    try {
        const { userType,
            patientName,
            patientUsername,
            number,
            email,
            hospitalName,
            drName,
            diseases,
            diseaseDescription,
            // reports,
            organsCondition,
            medicines,
            remediesRecommended,
            createdDate     
        } = request.body;

    console.log(request.body);

        const newMedicalRecord = new MedicalRecord({
            userType,
            patientName,
            patientUsername,
            number,
            email,
            hospitalName,
            drName,
            diseases,
            diseaseDescription,
            // reports,
            organsCondition,
            medicines,
            remediesRecommended,
            createdDate  
        });

        await newMedicalRecord.save();

        return response.status(200).json({ message: 'User-added medical record stored successfully', medicalRecord: newMedicalRecord });
    }
    catch (error) {
        console.error('Error storing medical records:', error);

        response.status(500).json({ error: 'Failed to store hospital-added medical record' });
    }
};



export const getAllRecords = async (request, response) => {
    try {
        const username = request.query.username; // Retrieve username from query parameters

        if (!username) {
            return response.status(400).json({ error: 'Username parameter is missing' });
        }

        const user = await UserModel.findOne({ username });

        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }

        // Assuming MedicalRecord is your model for storing medical records
        const medicalRecords = await MedicalRecord.find({ patientUsername: username });

        return response.status(200).json({ medicalRecords });

    } catch (error) {
        console.error('Error retrieving medical records:', error);
        response.status(500).json({ error: 'Failed to retrieve medical records' });
    }
};

// export const getPost = async (request, response) => {
//     try {
//         const post = await Post.findById(request.params.id);

//         return response.status(200).json(post);
//     } catch (error) {
//         return response.status(500).json({ msg: error.message })
//     }
// }