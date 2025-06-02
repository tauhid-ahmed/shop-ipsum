"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "../../validator-schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/layout/container";
import { BasicInfoForm } from "./basic-info-form";
import { DetailsForm } from "./details-form";

const productTabs = {
  "basic-info": "Basic Info",
  details: "Details",
} as const;

const tabContents = {
  "basic-info": BasicInfoForm,
  details: DetailsForm,
};

type ProductTabKey = keyof typeof productTabs;

export default function ProductForm() {
  const form = useForm({
    defaultValues: {},
    resolver: zodResolver(productFormSchema),
  });

  return (
    <Container>
      <Form {...form}>
        <Tabs defaultValue="basic-info">
          <TabsList>
            {(Object.keys(productTabs) as ProductTabKey[]).map((tabKey) => (
              <TabsTrigger key={tabKey} value={tabKey}>
                {productTabs[tabKey]}
              </TabsTrigger>
            ))}
          </TabsList>

          <form>
            {Object.keys(productTabs).map((productTab) => {
              const ProductTab =
                tabContents[productTab as keyof typeof tabContents];
              return (
                <TabsContent key={productTab} value={productTab}>
                  <ProductTab data={form.getValues()} />
                </TabsContent>
              );
            })}
          </form>
        </Tabs>
      </Form>
    </Container>
  );
}
