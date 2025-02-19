/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useImperativeHandle } from "react";

const useCommonProperties = <T>(refTarget: any, ref: any, extra?: any) => {
  let attributes: any = {};

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    for (const prop in ref.current) {
      if (typeof ref.current[prop] === "function") {
        attributes[prop] = (...args: any) => {
          return ref?.current[prop]?.(...args);
        };
      } else {
        if (attributes[prop] === undefined) {
          Object.defineProperty(attributes, prop, {
            get: () => ref.current[prop],
            set: (value: any) => (ref.current[prop] = value),
          });
        }
      }
    }

    attributes = {
      ...attributes,
      ...extra,
    };
  }, [ref.current]);

  useImperativeHandle<T, any>(refTarget, () => attributes, [attributes]);
};

export default useCommonProperties;
