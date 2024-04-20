import joi from "joi";
import workExperienceType from "../types/WorkExperience.type";

export const workExperienceValidation = (
  payload: workExperienceType
): joi.ValidationResult<workExperienceType> => {
  const schema = joi.object({
    perusahaan: joi.string().trim().required().messages({
      "string.base": "Perusahaan harus berupa string",
      "string.empty": "Perusahaan tidak boleh kosong",
      "any.required": "Perusahaan harus diisi",
    }),
    position: joi.string().trim().allow(null, "").messages({
      "string.base": "Position harus berupa string",
      "string.empty": "Position tidak boleh kosong",
      "any.required": "Position harus diisi",
    }),
    deskripsi: joi.string().trim().allow(null, "").messages({
      "string.base": "Deskripsi harus berupa string",
      "string.empty": "Deskripsi tidak boleh kosong",
      "any.required": "Deskripsi harus diisi",
    }),
    userId: joi.number().required().messages({
      "number.base": "User Id harus berupa number",
      "number.empty": "User Id tidak boleh kosong",
      "any.required": "User Id harus diisi",
    }),
  });

  return schema.validate(payload);
};
