import joi from "joi";
import pendidikanType from "../types/Pendidikan.type";

export const pendidikanValidation = (
  payload: pendidikanType
): joi.ValidationResult<pendidikanType> => {
  const schema = joi.object({
    perguruan: joi.string().trim().required().messages({
      "string.base": "Perguruan harus berupa string",
      "string.empty": "Perguruan tidak boleh kosong",
      "any.required": "Perguruan harus diisi",
    }),
    tingkat: joi.string().trim().required().messages({
      "string.base": "Tingkat harus berupa string",
      "string.empty": "Tingkat tidak boleh kosong",
      "any.required": "Tingkat harus diisi",
    }),
    bidang: joi.string().trim().required().messages({
      "string.base": "Bidang harus berupa string",
      "string.empty": "Bidang tidak boleh kosong",
      "any.required": "Bidang harus diisi",
    }),
    userId: joi.number().required().messages({
      "number.base": "User Id harus berupa number",
      "number.empty": "User Id tidak boleh kosong",
      "any.required": "User Id harus diisi",
    }),
  });

  return schema.validate(payload);
};
