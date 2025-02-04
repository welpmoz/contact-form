import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

import Radio from "./radio";

import '../scss/radios.scss';

interface Props {
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export default function Radios({
  register,
  error,
}: Props) {
  return (
    <fieldset className={`Radios ${error === undefined ? '' : 'Radios--error'}`}>
      <legend className="Radios__title">Query Type</legend>
      <div className="Radios__body">
        <Radio error={error} register={register} id="general-enquiry" label="General Enquiry" />
        <Radio error={error} register={register} id="support-request" label="Support Request" />
      </div>
      <span className="Radios__error-message" id="query-type-instructions">
        {error === undefined ? '' : error.message}
      </span>
    </fieldset>
  );
}