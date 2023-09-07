const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
    },
    password: {
        type: String,
        require: true,
    }
})

// Hash del pasword al guadar
userSchema.pre("save", async function(next){
    const user = this

    if (!user.isModified("password")) return next();

    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(user.password, salt); 
        user.password = hashedPassword;
        next();
    } catch (error) {
        throw new Error("Error al hashear la password");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcryptjs.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;