import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormInput } from "@/types/types"; // نوع داده فرم شما (باید این رو در اینجا وارد کنید)

type Props = {
  name: keyof IFormInput; // استفاده از کلیدهای IFormInput
  title?: string;
  type: string;
  required?: boolean;
  register: UseFormRegister<IFormInput>; // تایپ دقیق برای register
  errors: FieldErrors<IFormInput>; // تایپ دقیق برای errors
  placeHolder?: string;
};

function InputFiled({
  name,
  title,
  type,
  required,
  register,
  errors,
  placeHolder,
}: Props) {
  return (
    <div className="w-full">
      {title && (
        <label className="flex mb-1 text-sm font-medium text-gray-200">
          {title}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input

        placeholder={placeHolder}
        type={type}
        {...register(name, { required: required })}
        className={`w-full outline-none bg-transparent p-2 border border-gray-600 rounded-full text-white ${
          errors[name] ? "border-red-600" : ""
        }`}

      />
      {errors[name] && (
        <p className="text-white text-xs mt-1">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default InputFiled;
