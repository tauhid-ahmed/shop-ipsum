"use client";

import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LucideBox,
  LucideSave,
  LucideX,
  LucideClock,
  LucidePlusCircle,
} from "lucide-react";

interface ProductPageHeaderProps {
  pageTitle: string;
  pageDescription: string;
  onMainAction: () => void;
  onCancel: () => void;
  onSaveDraft?: () => void;
  lastSavedTimestamp?: string;
  isLoading?: boolean;
  isEditing?: boolean;
}

export function ProductPageHeader({
  pageTitle,
  pageDescription,
  onMainAction,
  onCancel,
  onSaveDraft,
  lastSavedTimestamp,
  isLoading = false,
  isEditing = false,
}: ProductPageHeaderProps) {
  const MainActionIcon = isEditing ? LucideSave : LucidePlusCircle;
  const mainActionText = isEditing ? "Update Product" : "Publish Product";
  const PageIcon = LucideBox; // Consistent icon for product management pages

  return (
    <Card className="shadow-md rounded-lg overflow-hidden border border-border/20">
      <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-6 gap-y-5 p-6">
        <div className="flex items-center gap-4 flex-grow min-w-0">
          {" "}
          {/* Allow text to shrink and wrap */}
          <div className="bg-primary/10 p-3.5 rounded-lg flex-shrink-0">
            <PageIcon size={32} className="text-primary" />
          </div>
          <div className="min-w-0">
            {" "}
            {/* Allow text to shrink and wrap */}
            <Heading as="h1" size="2xl" weight="semibold" className="mb-1">
              {pageTitle}
            </Heading>
            <p className="text-muted-foreground text-sm max-w-lg">
              {pageDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-stretch md:items-end gap-3 w-full md:w-auto self-stretch md:self-center mt-4 md:mt-0 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:justify-end gap-2.5">
            <Button
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
              className="w-full sm:w-auto justify-center text-sm px-4 py-2"
            >
              <LucideX size={16} className="mr-2" /> Cancel
            </Button>
            {onSaveDraft && (
              <Button
                variant="secondary"
                onClick={onSaveDraft}
                disabled={isLoading}
                className="w-full sm:w-auto justify-center text-sm px-4 py-2"
              >
                <LucideSave size={16} className="mr-2" /> Save Draft
              </Button>
            )}
            <Button
              onClick={onMainAction}
              disabled={isLoading}
              className="w-full sm:w-auto justify-center text-sm px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MainActionIcon size={16} className="mr-2" />
              {mainActionText}
            </Button>
          </div>
          {lastSavedTimestamp && (
            <div className="flex items-center text-xs text-muted-foreground mt-2 self-center sm:self-end">
              <LucideClock size={12} className="mr-1.5" />
              Last saved: {new Date(lastSavedTimestamp).toLocaleString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
