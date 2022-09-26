import { CheckboxGropeDataType } from "../types";

const DATA_CHECKBOX_GROPE: CheckboxGropeDataType[] = [
  {
    id: 0,
    text: "movie",
    disableBuiltInState: false
  },
  {
    id: 1,
    text: "series",
    disableBuiltInState: false
  },
  {
    id: 2,
    text: "episode",
    disableBuiltInState: false
  }
];

export const changeDataCheckboxGrope = (value: string): CheckboxGropeDataType[] => {

  return DATA_CHECKBOX_GROPE.map(({ text, disableBuiltInState, id }, index) => {
    if (text === value) {
      return { ...DATA_CHECKBOX_GROPE[index], disableBuiltInState: true };
    }
    return DATA_CHECKBOX_GROPE[index];
  });

};
