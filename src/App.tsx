import { FormProvider, useForm } from "react-hook-form";
import { NumberInput } from "./components/NumberInput";
import { TextInput } from "./components/TextInput";

type FormData = {
  username: string;
  age: number;
};

export const App: React.VFC = () => {
  const methods = useForm<FormData>();
  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <TextInput<FormData> name="username" />
        <NumberInput<FormData> name="age" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};
