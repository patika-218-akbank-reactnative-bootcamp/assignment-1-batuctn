import * as yup from "yup";

const validations1 = yup.object().shape({
    password:yup
    .string()
    .required("Zorunlu ALAN"),
    passwordRepeat:yup
        .string()
        .oneOf([yup.ref("password"),null],"Şifre eşleşmiyor.")
        .required("ZORUNLU ALAN"),
})

export default validations1;