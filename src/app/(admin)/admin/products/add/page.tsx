"use client"; // Add this directive

import { ProductForm, ProductPageHeader } from "../_components";

export default function AddNewProductPage() {
  const handlePublishProduct = () => {
    console.log("Publish Product clicked");
    // Implement actual save logic, e.g., trigger form validation and submission
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Implement navigation, e.g., router.back() or redirect to products list
  };

  const handleSaveDraft = () => {
    console.log("Save Draft clicked");
    // Implement save draft logic
  };

  return (
    <div className="pt-[var(--_sidebar-spacing)] space-y-[var(--_sidebar-spacing)]">
      <ProductPageHeader
        pageTitle="Add New Product"
        pageDescription="Fill in the details to create and publish a new product. Ensure all required fields are completed for best results."
        onMainAction={handlePublishProduct}
        onCancel={handleCancel}
        onSaveDraft={handleSaveDraft}
        isEditing={false} // Explicitly set for clarity on the "add" page
        // Example of providing a timestamp:
        // lastSavedTimestamp={new Date().toISOString()}
      />
      <div className="after:block after:h-[50vh]">
        <ProductForm />
      </div>
    </div>
  );
}
