import * as yup from "yup";

const validations = yup.object().shape({
    mail:yup
    .string()
    .email("Geçerli Bir mail adresi giriniz")
    .required("Zorunlu ALAN"),
    mailRepeat:yup
        .string()
        .oneOf([yup.ref("mail"),null],"E-mail eşleşmiyor.")
        .required("ZORUNLU ALAN"),
})

export default validations;