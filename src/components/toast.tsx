import { useEffect } from "react";

import "../scss/toast.scss";

interface Props {
  isVisible: boolean;
  showToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toast({
  isVisible,
  showToast,
}: Props) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        showToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className={`Toast ${isVisible ? 'Toast--visible' : ''}`}>
      <div className="Toast__wrapper">
        <h1 className="Toast__header">
          Message Sent!
        </h1>
        <p className="Toast__body">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>
    </div>
  );
}