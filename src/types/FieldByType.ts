import type { FieldPathValue, Path } from "react-hook-form";

export type FieldByType<FormData, T> = {
  [P in Path<FormData>]: T extends FieldPathValue<FormData, P> ? P : never;
}[Path<FormData>];
