import joi from "joi";
import skillType from "../types/Skill.trype";

export const skillValidation = (
  payload: skillType
): joi.ValidationResult<skillType> => {
  const schema = joi.object({
    nama: joi.string().trim().required().messages({
      "string.base": "Nama harus berupa string",
      "string.empty": "Nama tidak boleh kosong",
      "any.required": "Nama harus diisi",
    }),
    level: joi.string().trim().allow(null, "").messages({
      "string.base": "Level harus berupa string",
      "string.empty": "Level tidak boleh kosong",
      "any.required": "Level harus diisi",
    }),
    url: joi.string().trim().allow(null, "").messages({
      "string.base": "Url harus berupa string",
      "string.empty": "Url tidak boleh kosong",
      "any.required": "Url harus diisi",
    }),
    imageUrl: joi.string().trim().allow(null, "").messages({
      "string.base": "Image Url harus berupa string",
      "string.empty": "Image Url tidak boleh kosong",
      "any.required": "Image Url harus diisi",
    }),
    deskripsi: joi.string().trim().required().messages({
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
