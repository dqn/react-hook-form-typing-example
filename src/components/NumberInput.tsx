import { useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import type { FieldByType } from "../types/FieldByType";

type Props<T> = {
  name: FieldByType<T, number>;
};

export const NumberInput = <T extends FieldValues = never>({
  name,
}: Props<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext();
  return <input type="number" {...register(name, { valueAsNumber: true })} />;
};
