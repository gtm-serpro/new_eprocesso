import { listMtProps } from "../helpers/listMtProps";

export const useMtProps = (props: any) => {
  let mtProps: any[] = [];
  for (const element of listMtProps) {
    if (typeof props[element] === "boolean" && props[element]) {
      mtProps = [...mtProps, element];
    } else {
      const value = props[element];

      mtProps = [
        ...mtProps,
        value !== null &&
          value !== undefined &&
          `${element}-${+value < 0 ? `n${Math.abs(+value)}` : `${value}`}`,
      ];
    }
  }
  return mtProps;
};
