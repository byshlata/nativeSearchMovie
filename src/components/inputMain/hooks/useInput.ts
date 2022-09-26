import { useState } from "react";

export const useInputMain = (initializationValue: string) => {
  const [value, setValue] = useState<string>(initializationValue)

  return { value, setValue }
}
