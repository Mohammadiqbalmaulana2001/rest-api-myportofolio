import joi from "joi";
import profileType from "../types/profile.type";

export const profileValidation = (
  payload: profileType
): joi.ValidationResult<profileType> => {
  const schema = joi.object({
    userId: joi.number().required().messages({
      "number.base": "User Id harus berupa number",
      "number.empty": "User Id tidak boleh kosong",
      "any.required": "User Id harus diisi",
    }),
    fullName: joi.string().trim().required().messages({
      "string.base": "Full Name harus berupa string",
      "string.empty": "Full Name tidak boleh kosong",
      "any.required": "Full Name harus diisi",
    }),
    bio: joi.string().trim().allow(null, ""),
    avatar: joi.string().trim().allow(null, ""),
  });
  return schema.validate(payload);
};
