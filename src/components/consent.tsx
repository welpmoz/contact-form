import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';

import '../scss/consent.scss';

interface Props {
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export default function Consent({
  register,
  error,
}: Props) {
  return (
    <div className={`Consent ${error === undefined ? '' : 'Consent--error'}`}>
      <div className="Consent__header">
        <input
          aria-describedby="consent--instructions"
          aria-invalid={error === undefined ? "false" : "true"}
          className="Consent__body"
          id="consent"
          type="checkbox"
          required
          {...register("consent", {
            required: "To submit this form, please consent to being contacted",
          })}
        />
        <label className="Consent__label" htmlFor="consent">I consent to being contacted by the team</label>
      </div>
      <span className="Consent__error-message" id="consent--instructions">
        {error === undefined ? '' : error.message}
      </span>
    </div>
  );
}