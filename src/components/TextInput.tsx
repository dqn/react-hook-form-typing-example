import { useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import type { FieldByType } from "../types/FieldByType";

type Props<T> = {
  name: FieldByType<T, string>;
};

export const TextInput = <T extends FieldValues = never>({
  name,
}: Props<T>): ReturnType<React.VFC> => {
  const { register } = useFormContext();
  return <input type="text" {...register(name)} />;
};
