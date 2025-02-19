import { useEffect } from "react";

let callers = 0;

const handleOverflowHidden = () => {
  callers++;
  document.body.classList.add("overflow-hidden");
};

const handleOverflowAuto = () => {
  if (callers > 0) {
    callers--;
  }

  if (callers === 0) {
    document.body.classList.remove("overflow-hidden");
  }
};

export const useBodyOverflowHidden = (mustBeHidden: boolean) => {
  useEffect(() => {
    if (mustBeHidden) {
      handleOverflowHidden();
    } else {
      handleOverflowAuto();
    }

    return handleOverflowAuto;
  }, [mustBeHidden]);
};
