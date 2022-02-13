import { Component } from 'solid-js';
import { TextField } from '@components';
import { useFormHandler, yup } from '@utils';
import { SchemaOf } from 'yup';

type FormSchema = {
  email: string;
};

export const Basic: Component = () => {
  const schema: SchemaOf<FormSchema> = yup.object({
    email: yup.string().required().email(),
  });

  const formHandler = useFormHandler(schema);

  return (
    <div class="p-3">
      <TextField
        name="email"
        label="Email"
        placeholder="mail@example.com"
        helperText="Don't share your email"
        formHandler={formHandler}
      />
    </div>
  );
};
