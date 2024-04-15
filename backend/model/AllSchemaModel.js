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

    userType: {
        type: String,
        required: true,
    },

    patientName: {
        type: String,
        required: true,
    },

    patientUsername: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    hospitalName: {
        type: String,
        required: false,
    },

    drName: {
        type: String,
        required: false,
    },

    diseases: { type: String },

    diseaseDescription: {
        type: String
    },

    reports: {
        type: String,
        required: false,
    },

    organsCondition: { type: String },
    
    
    // {
    //     Brain: { type: Number },
    //     heart: { type: Number },
    //     lungs: { type: Number },
    //     kidney: { type: Number },
    //     liver: { type: Number }
    // },

    medicines: { type: String },

    remediesRecommended: { type: String },
  
    createdDate: { type: Date }
});



const Tokens = mongoose.model("Tokens", TokenSchema);

const UserModel = mongoose.model("UserModel", userSchema);

const MedicalRecord = mongoose.model('MedicalRecord ', MedicalRecordSchema);


const HospitalsNames = mongoose.model('HospitalsNames', HospitalsNamesSchema);


const Prescriptions = mongoose.model('Prescriptions', PrescriptionsSchema);

const FamilyHistory = mongoose.model('FamilyHistory', FamilyHistorySchema);


export { Tokens, UserModel, MedicalRecord, HospitalsNames, FamilyHistory, Prescriptions };



