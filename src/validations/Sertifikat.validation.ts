import SertifikatType from "../types/Sertifikat.type";
import joi from "joi";

export const sertifikatValidation = (
  payload: SertifikatType
): joi.ValidationResult<SertifikatType> => {
  const schema = joi.object({
    title: joi.string().trim().required().messages({
      "string.base": "Title harus berupa string",
      "string.empty": "Title tidak boleh kosong",
      "any.required": "Title harus diisi",
    }),
    penerbit: joi.string().trim().required().messages({
      "string.base": "Penerbit harus berupa string",
      "string.empty": "Penerbit tidak boleh kosong",
      "any.required": "Penerbit harus diisi",
    }),
    deskrispsi: joi.string().trim().allow(null, "").messages({
      "string.base": "Deskripsi harus berupa string",
      "string.empty": "Deskripsi tidak boleh kosong",
      "any.required": "Deskripsi harus diisi",
    }),
    imageUrl: joi.string().trim().allow(null, "").messages({
      "string.base": "Image Url harus berupa string",
      "string.empty": "Image Url tidak boleh kosong",
      "any.required": "Image Url harus diisi",
    }),
    url: joi.string().trim().allow(null, "").messages({
      "string.base": "Url harus berupa string",
      "string.empty": "Url tidak boleh kosong",
      "any.required": "Url harus diisi",
    }),
    userId: joi.number().required().messages({
      "number.base": "User Id harus berupa number",
      "number.empty": "User Id tidak boleh kosong",
      "any.required": "User Id harus diisi",
    }),
  });

  return schema.validate(payload);
};
