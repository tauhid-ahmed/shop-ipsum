import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

type TextFieldProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: string;
} & React.ComponentProps<"textarea">;

export function TextArea({
  label,
  name,
  placeholder,
  ...props
}: TextFieldProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder={placeholder} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
