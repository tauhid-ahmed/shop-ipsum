import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CreateProductVariants({
  variants,
  onAddVariant,
  onDeleteVariant,
}) {
  return (
    <fieldset>
      <div className="flex gap-4 justify-between items-center">
        <legend>Product Variants:</legend>
        <Button onClick={onAddVariant} type="button" size="sm">
          Add Variant +
        </Button>
      </div>
      <div className="flex mt-6">
        {variants.map((variant, index) => (
          <div key={index} className="flex-1">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            {index >= 1 && (
              <Button type="button" onClick={onDeleteVariant.bind(null, index)}>
                Delete Variant -
              </Button>
            )}
          </div>
        ))}
      </div>
    </fieldset>
  );
}
