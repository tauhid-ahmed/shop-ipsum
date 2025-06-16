import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxField({
  name,
  id,
}: {
  name: string;
  id: string;
}) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <FormItem>
          <FormControl>
            <Checkbox
              id={id}
              checked={value}
              onCheckedChange={(checked) => onChange(checked)}
              className="border-primary"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
