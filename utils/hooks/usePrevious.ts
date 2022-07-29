import { useState } from "react";

export default function usePrevious(state: number) {
  let [tuple, setTuple] = useState([0, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
}
