"use client";

import { ProductPageHeader } from "../products/_components"; // Assuming ProductPageHeader is exported from here
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TextField, SelectField } from "@/components"; // Assuming these are general form components
import {
  // LucidePlusCircle,
  LucideTrash2,
  LucideMapPin,
  LucidePackage,
  LucideGlobe,
  LucidePlusCircle,
} from "lucide-react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";

// Dummy data - replace with actual data sources or i18n
const countryOptions = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  { label: "United Kingdom", value: "GB" },
  // Add more countries
];

const shippingMethodTypeOptions = [
  { label: "Flat Rate", value: "flat_rate" },
  { label: "Free Shipping", value: "free_shipping" },
  // { label: "Local Pickup", value: "local_pickup" },
];

export default function ShippingSettingsPage() {
  // In a real app, defaultValues would come from fetched settings
  const methods = useForm({
    defaultValues: {
      shippingOrigin: {
        addressLine1: "",
        city: "",
        postalCode: "",
        country: "US",
      },
      shippingZones: [
        {
          name: "Domestic",
          countries: ["US"],
          methods: [
            { type: "flat_rate", name: "Standard Shipping", cost: "5.00" },
          ],
        },
      ],
      defaultPackage: {
        weight: "1",
        length: "10",
        width: "10",
        height: "10",
      },
    },
  });

  const {
    fields: zoneFields,
    append: appendZone,
    remove: removeZone,
  } = useFieldArray({
    control: methods.control,
    name: "shippingZones",
  });

  const handleSaveSettings = (data: unknown) => {
    console.log("Saving Shipping Settings:", data);
    // API call to save settings
  };

  const handleCancel = () => {
    console.log("Cancel shipping settings");
    // Navigation logic
  };

  return (
    <FormProvider {...methods}>
      <div className="pt-[var(--_sidebar-spacing)] space-y-[var(--_sidebar-spacing)]">
        <ProductPageHeader
          pageTitle="Shipping Settings"
          pageDescription="Configure your store's shipping origin, zones, rates, and package preferences."
          onMainAction={methods.handleSubmit(handleSaveSettings)}
          onCancel={handleCancel}
          isEditing={true} // To show "Update" or "Save"
          // mainActionText="Save Settings"
        />

        <form
          onSubmit={methods.handleSubmit(handleSaveSettings)}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LucideMapPin className="text-primary" /> Shipping Origin
              </CardTitle>
              <CardDescription>
                Set the primary address from where you ship your products.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                name="shippingOrigin.addressLine1"
                label="Address Line 1"
              />
              <TextField name="shippingOrigin.city" label="City" />
              <TextField
                name="shippingOrigin.postalCode"
                label="ZIP / Postal Code"
              />
              <SelectField
                name="shippingOrigin.country"
                label="Country"
                options={countryOptions}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LucideGlobe className="text-primary" /> Shipping Zones
              </CardTitle>
              <CardDescription>
                Define geographical regions and assign specific shipping methods
                and rates.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {zoneFields.map((zone, zoneIndex) => (
                <Card key={zone.id} className="bg-muted/30 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-4">
                    <TextField
                      name={`shippingZones.${zoneIndex}.name`}
                      label={`Zone ${zoneIndex + 1} Name`}
                      className="flex-grow mr-4"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeZone(zoneIndex)}
                    >
                      <LucideTrash2 className="text-destructive" />
                    </Button>
                  </div>
                  {/* In a real app, countries would be a multi-select or tag input */}
                  <SelectField
                    name={`shippingZones.${zoneIndex}.countries`}
                    label="Countries/Regions"
                    options={countryOptions}
                    // multiple // This would require a multi-select component
                    placeholder="Select countries for this zone"
                  />
                  {/* TODO: Add field array for shipping methods within each zone */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">
                      Shipping Methods for this Zone
                    </h4>
                    <SelectField
                      name={`shippingZones.${zoneIndex}.methods.0.type`}
                      label="Method Type"
                      options={shippingMethodTypeOptions}
                    />
                    <TextField
                      name={`shippingZones.${zoneIndex}.methods.0.name`}
                      label="Method Name"
                      placeholder="e.g., Standard Ground"
                    />
                    <TextField
                      name={`shippingZones.${zoneIndex}.methods.0.cost`}
                      label="Cost ($)"
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                </Card>
              ))}
              <Button
                variant="outline"
                onClick={() =>
                  appendZone({ name: "", countries: [], methods: [] })
                }
              >
                <LucidePlusCircle size={16} className="mr-2" /> Add Shipping
                Zone
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LucidePackage className="text-primary" /> Default Package
                Settings
              </CardTitle>
              <CardDescription>
                Set default package dimensions and weight for rate calculations
                if not specified per product.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <TextField
                name="defaultPackage.weight"
                label="Weight (kg)"
                type="number"
              />
              <TextField
                name="defaultPackage.length"
                label="Length (cm)"
                type="number"
              />
              <TextField
                name="defaultPackage.width"
                label="Width (cm)"
                type="number"
              />
              <TextField
                name="defaultPackage.height"
                label="Height (cm)"
                type="number"
              />
            </CardContent>
          </Card>

          {/* The main save button is in the ProductPageHeader */}
        </form>
      </div>
    </FormProvider>
  );
}
