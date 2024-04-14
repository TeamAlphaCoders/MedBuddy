import mongoose from "mongoose";

const TokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
});


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const HospitalsNamesSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        unique: true
    }
});

const PrescriptionsSchema = new mongoose.Schema({
    prescription: { type: String }
})

const FamilyHistorySchema = new mongoose.Schema({
    diseases: { type: Array }
})

const MedicalRecordSchema = new mongoose.Schema({
    addedBy: { type: String },
    userType: { type: String },
    patientUsername: { type: String },
    patientName: { type: String },
    mobile: { type: String },
    email: { type: String },
    hospitalName: { type: String },
 
    diseases: [{
        diseaseName: String
    }],

    organsCondition: {
        heart: Boolean,
        lungs: Boolean,
        kidney: Boolean,
        liver: Boolean
    },
    medicines: [{}],
    remediesRecommended: String,
    familyHistory: [{}],
});

 



const Tokens = mongoose.model("Tokens", TokenSchema);

const UserModel = mongoose.model("UserModel", userSchema);

const MedicalRecord = mongoose.model('MedicalRecord ', MedicalRecordSchema);
 

const HospitalsNames = mongoose.model('HospitalsNames', HospitalsNamesSchema);


const Prescriptions = mongoose.model('Prescriptions', PrescriptionsSchema);

const FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);


export { Tokens, UserModel, MedicalRecord, HospitalsNames, FamilyHistory, Prescriptions };



