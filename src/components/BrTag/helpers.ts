import { BrTagType } from ".";

export const formatCount = (value: string) => {
  const count = +value;
  if (value.length <= 3) {
    return count;
  } else if (Number.isInteger(count)) {
    return "999+";
  } else {
    return count.toLocaleString("pt-br").slice(0, 3) + " ...";
  }
};

export const isIconAllowed = (tagType: BrTagType) => {
  const allowedTypes: BrTagType[] = ["text", "icon", "interaction"];

  return allowedTypes.includes(tagType);
};
