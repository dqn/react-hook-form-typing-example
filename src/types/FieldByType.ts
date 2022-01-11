import type { FieldPathValue, Path } from "react-hook-form";

export type FieldByType<T, Excepted> = {
  [P in Path<T>]: FieldPathValue<T, P> extends Excepted ? P : never;
}[Path<T>];
