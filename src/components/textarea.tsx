import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';

import '../scss/textarea.scss';

interface Props {
  nameId: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export default function Textarea({
  nameId,
  label,
  register,
  error,
}: Props) {
  return (
    <div className={`Textarea ${error === undefined ? '' : 'Textarea--error'}`}>
      <label className="Textarea__label" htmlFor={nameId}>{label}</label>
      <textarea
        aria-describedby={`${nameId}-instructions`}
        aria-invalid={error === undefined ? "false" : "true"}
        autoComplete={nameId}
        className="Textarea__body"
        id={nameId}
        name={nameId}
        required
        {...register("message", {
          required: "This field is required",
        })}
      >
      </textarea>
      <span className="Textarea__error-message" id={`${nameId}-instructions`}>
        {error === undefined ? '' : error.message}
      </span>
    </div>
  );
}