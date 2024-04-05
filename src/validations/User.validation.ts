import joi from "joi";
import userType from "../types/User.type";

export const registrasiUserValidation = (
  paylod: userType
): joi.ValidationResult<userType> => {
  const schema = joi.object({
    user_id: joi.string().trim().allow(null, ""),
    email: joi.string().trim().required().email().messages({
      "string.base": "Email harus berupa string",
      "string.email": "Email harus valid",
      "string.empty": "Email tidak boleh kosong",
    }),
    nama: joi.string().trim().required().messages({
      "string.base": "Nama harus berupa string",
      "string.empty": "Nama tidak boleh kosong",
      "any.required": "Nama harus diisi",
    }),
    password: joi.string().trim().required().messages({
      "string.base": "Password harus berupa string",
      "string.empty": "Password tidak boleh kosong",
      "any.required": "Password harus diisi",
    }),
    role: joi.string().trim().allow(null, ""),
  });

  return schema.validate(paylod);
};

export const loginUserValidation = (
  paylod: userType
): joi.ValidationResult<userType> => {
  const schema = joi.object({
    email: joi.string().trim().required().email().messages({
      "string.base": "Email harus berupa string",
      "string.email": "Email harus valid",
      "string.empty": "Email tidak boleh kosong",
    }),
    password: joi.string().trim().required().messages({
      "string.base": "Password harus berupa string",
      "string.empty": "Password tidak boleh kosong",
      "any.required": "Password harus diisi",
    }),
  });

  return schema.validate(paylod);
};
