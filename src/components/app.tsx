import { useState } from 'react';

import ContactForm from './contact-form';
import Toast from './toast';

export default function App() {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <>
      <ContactForm showToast={setToastVisible} />
      <Toast isVisible={toastVisible} showToast={setToastVisible} />
    </>
  );
};