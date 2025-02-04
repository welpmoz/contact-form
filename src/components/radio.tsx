import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export default function Radio({
  id,
  label,
  register,
  error,
}: Props) {
  return (
    <label htmlFor={id} className="Radio">
      <input
        aria-describedby="query-type-instructions"
        aria-invalid={error === undefined ? "false" : "true"}
        className="Radio__body"
        id={id}
        name="query-type"
        type="radio"
        value={id}
        {...register("query-type", {
          required: "Please select a query type"
        })}
      />
      {label}
    </label>
  );
}