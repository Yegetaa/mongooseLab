import mongoose from "mongoose";

const gradeSchema = {
    class_id : {
        type: Number,
        required: true,
    },
    learner_id : { type: Number, required: true },
    scores: [{score_type: String, score: Number }]
};

export default mongoose.model("Grade", gradeSchema);