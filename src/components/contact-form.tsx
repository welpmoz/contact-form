import * as React from 'react';
import { useForm } from 'react-hook-form';

import '../scss/contact-form.scss';

import Button from "./button";
import Consent from "./consent";
import Input from "./input";
import Radios from "./radios";
import Textarea from "./textarea";

interface Props {
  showToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactForm({
  showToast,
}: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // retrieve data and save
    // clear form
    reset();
    // show toast
    showToast(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="Contact-form Screen__content">
      <div className="Contact-form__body">
        <span className="Contact-form__title">Contact Us</span>

        <div className="Contact-form__content">
          <div className="Contact-form__input-wrapper Contact-form__input-wrapper--double">
            <Input error={errors.name} register={register} inputId="name" labelTitle="Name" type="text" />
            <Input error={errors['last-name']} register={register} inputId="last-name" labelTitle="Last Name" type="text" />
          </div>

          <Input error={errors.email} register={register} inputId="email" labelTitle="Email Address" type="email" />

          <Radios
            error={errors['query-type']}
            register={register}
          />

          <Textarea
            error={errors.message}
            register={register}
            label="Message"
            nameId="message"
          />
        </div>
      </div>

      <Consent error={errors.consent} register={register} />

      <Button text="Submit" type="submit" />
    </form>
  );
}