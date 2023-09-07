const axios = require("axios");
const { validationResult, body, param } = require("express-validator");

const validationResultExpress = (req, res, next) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

const bodyLoginValidator = [
    body('email', "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
    validationResultExpress
];

const bodyRegisterValidator = [
    body('email', "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Mínimo 6 carácteres").trim().isLength({ min: 6 }),
    body("password", "No coinciden las contraseñas")
        .custom((value, { req }) => {
            if (value !== req.body.repassword) {
                throw new Error("No coinciden las passwords")
            }
            return value
        }),
    validationResultExpress
];

const bodyLinkValidator = [
    body('longLink', "Formato de link incorrecto").trim().notEmpty()
    .custom(async value => {
        try {

            if(!value.startsWith("https://")){
                value = "http://" + value;
            }
            await axios.get(value);
            return value;
        } catch (error) {
            //console.log(error);
            throw new Error("not found lonLink 404");
        }
    })
    , validationResultExpress
];

const paramLinkValidator = [
    param("id", "Formato no válido (expressValidator)")
        .trim()
        .notEmpty()
        .escape(),
        validationResultExpress


];


module.exports = {
    validationResultExpress,
    bodyLoginValidator,
    bodyRegisterValidator,
    bodyLinkValidator,
    paramLinkValidator


};