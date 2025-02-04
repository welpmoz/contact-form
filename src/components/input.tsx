import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';
import '../scss/input.scss';

interface Params {
  labelTitle: string;
  inputId: string;
  type: 'text' | 'email';
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

export default function Input({
  labelTitle,
  inputId,
  type,
  register,
  error,
}: Params) {
  return (
    <div className={`Input ${error === undefined ? '' : 'Input--error'}`}>
      <label className='Input__label' htmlFor={inputId}>{labelTitle}</label>
      <input
        aria-describedby={`${inputId}-instructions`}
        aria-invalid={error === undefined ? "false" : "true"}
        autoComplete={inputId}
        className='Input__body'
        type={type}
        id={inputId}
        name={inputId}
        required
        {...register(inputId, {
          required: "This field is required",
          pattern: (type === "email") ? {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address"
          } : null,
        })}
      />
      <span className='Input__error-message' id={`${inputId}-instructions`}>
        {error === undefined ? '' : error.message}
      </span>
    </div>
  );
};