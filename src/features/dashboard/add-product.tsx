"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowLeft,
  BarChart3,
  Bold,
  Calendar,
  Clock,
  Copy,
  Eye,
  Globe,
  HelpCircle,
  Info,
  Italic,
  Link2,
  ListOrdered,
  Package,
  Percent,
  Plus,
  Save,
  ShoppingBag,
  Star,
  Trash2,
  Underline,
  Upload,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Define the product data structure
interface SizeStock {
  [key: string]: number;
}

interface Variant {
  id: string;
  color: string;
  stockQuantity: number;
  sizes: string[];
  sizeStock: SizeStock;
}

interface ProductData {
  id: string;
  sku: string;
  gtin: {
    upc: string;
    ean: string;
  };
  type: string;
  category: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  brand: {
    name: string;
    manufacturer: string;
  };
  slug: string;
  productDetails: {
    title: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
  };
  media: {
    primaryImage: string;
    images: string[];
  };
  pricing: {
    base: { amount: number; currency: string };
    original: { amount: number; currency: string };
    discount: { type: string; value: number };
  };
  inventory: {
    trackInventory: boolean;
    lowStockThreshold: number;
    stockQuantity: number;
    variants: Variant[];
  };
  ratings: {
    average: number;
    totalReviews: number;
    ratingBreakdown: {
      "5stars": number;
      "4stars": number;
      "3stars": number;
      "2stars": number;
      "1star": number;
    };
  };
  shipping: {
    freeShippingEligible: boolean;
    estimatedDelivery: {
      domestic: string;
      international: string;
    };
  };
  returnPolicy: {
    eligible: boolean;
    period: number;
    conditions: string[];
  };
  targetAudience: string[];
  salesCount: number;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  views: number;
}

export function AddProduct() {
  // Sample product data
  const [productData, setProductData] = useState<ProductData>({
    id: "p123456789",
    sku: "AC-TK-BLU-001",
    gtin: {
      upc: "843956789123",
      ean: "5901234123457",
    },
    type: "Apparel",
    category: {
      primary: "Outdoor",
      secondary: "Hiking",
      tertiary: "Jackets",
    },
    brand: {
      name: "AlpineCore",
      manufacturer: "Alpine Outdoor Gear Co.",
    },
    slug: "alpine-core-trek-shell-waterproof-jacket",
    productDetails: {
      title: "AlpineCore TrekShell Waterproof Jacket",
      shortDescription:
        "Lightweight waterproof shell for hiking and outdoor activities",
      longDescription:
        "The TrekShell Jacket is a premium 3-layer waterproof outer shell designed for dedicated hikers and outdoor enthusiasts who demand high performance. Engineered with our advanced HydroGuard technology, it provides exceptional waterproof protection while allowing for breathability, ensuring you stay dry and comfortable even during high-energy activities. The jacket features reinforced stitching at key stress points for added durability, making it tough enough to handle challenging environments and rough conditions.\n\nDesigned for versatility, the TrekShell includes an adjustable hood and cuffs, offering a customizable fit to protect against wind, rain, and snow. Whether you're hiking through wet terrain, braving strong winds, or navigating snow-covered paths, this jacket provides reliable, all-weather protection. Lightweight yet durable, it's an essential companion for any outdoor adventure, combining comfort, performance, and long-lasting reliability to keep you moving forward no matter the elements.",
      features: [
        "100% waterproof HydroGuard membrane",
        "Fully taped seams",
        "Adjustable storm hood",
        "Ventilation zips under arms",
        "Reflective safety details",
        "Packs into own pocket for easy storage",
      ],
    },
    media: {
      primaryImage: "/placeholder.svg?height=400&width=300",
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
    },
    pricing: {
      base: { amount: 149.99, currency: "USD" },
      original: { amount: 199.99, currency: "USD" },
      discount: { type: "percentage", value: 25 },
    },
    inventory: {
      trackInventory: true,
      lowStockThreshold: 5,
      stockQuantity: 87,
      variants: [
        {
          id: "v78901",
          color: "Blue",
          stockQuantity: 42,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 15,
            M: 12,
            L: 10,
            XL: 5,
          },
        },
        {
          id: "v78902",
          color: "Black",
          stockQuantity: 35,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 8,
            M: 12,
            L: 10,
            XL: 5,
          },
        },
        {
          id: "v78903",
          color: "Red",
          stockQuantity: 10,
          sizes: ["S", "M", "L"],
          sizeStock: {
            S: 0,
            M: 3,
            L: 7,
          },
        },
        {
          id: "v78904",
          color: "Orange",
          stockQuantity: 0,
          sizes: ["S", "M", "L", "XL"],
          sizeStock: {
            S: 0,
            M: 0,
            L: 0,
            XL: 0,
          },
        },
      ],
    },
    ratings: {
      average: 4.7,
      totalReviews: 253,
      ratingBreakdown: {
        "5stars": 198,
        "4stars": 37,
        "3stars": 12,
        "2stars": 4,
        "1star": 2,
      },
    },
    shipping: {
      freeShippingEligible: true,
      estimatedDelivery: {
        domestic: "3-5 business days",
        international: "7-14 business days",
      },
    },
    returnPolicy: {
      eligible: true,
      period: 30,
      conditions: [
        "Item must be unworn with original tags",
        "Original packaging required",
        "Return shipping paid by customer",
      ],
    },
    targetAudience: ["men"],
    salesCount: 1278,
    createdAt: new Date("2023-03-15T08:30:00Z"),
    updatedAt: new Date("2023-03-12T14:45:00Z"),
    status: "active",
    views: 15689,
  });

  // Handle nested field updates
  const updateField = (path: string, value: any) => {
    const pathArray = path.split(".");
    setProductData((prevData) => {
      const newData = { ...prevData };
      let current: any = newData;

      // Navigate to the nested property
      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]];
      }

      // Update the value
      current[pathArray[pathArray.length - 1]] = value;
      return newData;
    });
  };

  // Handle array updates
  const updateArrayItem = (path: string, index: number, value: any) => {
    const pathArray = path.split(".");
    setProductData((prevData) => {
      const newData = { ...prevData };
      let current: any = newData;

      // Navigate to the array
      for (let i = 0; i < pathArray.length; i++) {
        current = current[pathArray[i]];
      }

      // Update the array item
      const newArray = [...current];
      newArray[index] = value;

      // Set the new array back
      let target = newData;
      for (let i = 0; i < pathArray.length - 1; i++) {
        target = target[pathArray[i]];
      }
      target[pathArray[pathArray.length - 1]] = newArray;

      return newData;
    });
  };

  // Add item to array
  const addArrayItem = (path: string, item: any) => {
    const pathArray = path.split(".");
    setProductData((prevData) => {
      const newData = { ...prevData };
      let current: any = newData;

      // Navigate to the array
      for (let i = 0; i < pathArray.length; i++) {
        current = current[pathArray[i]];
      }

      // Add item to array
      const newArray = [...current, item];

      // Set the new array back
      let target = newData;
      for (let i = 0; i < pathArray.length - 1; i++) {
        target = target[pathArray[i]];
      }
      target[pathArray[pathArray.length - 1]] = newArray;

      return newData;
    });
  };

  // Remove item from array
  const removeArrayItem = (path: string, index: number) => {
    const pathArray = path.split(".");
    setProductData((prevData) => {
      const newData = { ...prevData };
      let current: any = newData;

      // Navigate to the array
      for (let i = 0; i < pathArray.length; i++) {
        current = current[pathArray[i]];
      }

      // Remove item from array
      const newArray = [...current];
      newArray.splice(index, 1);

      // Set the new array back
      let target = newData;
      for (let i = 0; i < pathArray.length - 1; i++) {
        target = target[pathArray[i]];
      }
      target[pathArray[pathArray.length - 1]] = newArray;

      return newData;
    });
  };

  // Handle variant updates
  const updateVariant = (variantIndex: number, field: string, value: any) => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      const variants = [...newData.inventory.variants];
      variants[variantIndex] = { ...variants[variantIndex], [field]: value };
      newData.inventory.variants = variants;
      return newData;
    });
  };

  // Handle size stock updates
  const updateSizeStock = (
    variantIndex: number,
    size: string,
    value: number
  ) => {
    setProductData((prevData) => {
      const newData = { ...prevData };
      const variants = [...newData.inventory.variants];
      variants[variantIndex] = {
        ...variants[variantIndex],
        sizeStock: {
          ...variants[variantIndex].sizeStock,
          [size]: value,
        },
      };
      newData.inventory.variants = variants;
      return newData;
    });
  };

  // Add new feature
  const addFeature = () => {
    const newFeature = "";
    addArrayItem("productDetails.features", newFeature);
  };

  // Add new return policy condition
  const addReturnCondition = () => {
    const newCondition = "";
    addArrayItem("returnPolicy.conditions", newCondition);
  };

  // Add new variant
  const addVariant = () => {
    const newVariant: Variant = {
      id: `v${Date.now().toString().slice(-5)}`,
      color: "",
      stockQuantity: 0,
      sizes: ["S", "M", "L", "XL"],
      sizeStock: {
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
      },
    };
    addArrayItem("inventory.variants", newVariant);
  };

  // Calculate total stock from variants
  const calculateTotalStock = () => {
    return productData.inventory.variants.reduce(
      (total, variant) => total + variant.stockQuantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      {/* Header with breadcrumb */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-sm">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">Products</span>
          <span className="text-muted-foreground">/</span>
          <span>Add New Product</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {productData.productDetails.title || "New Product"}
            </h1>
            <p className="text-muted-foreground mt-1">
              Create or edit product details
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button size="sm" className="gap-1">
              <Save className="h-4 w-4" />
              Save Product
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Content */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-7 mb-6">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            {/* Basic Info Tab */}
            <TabsContent value="basic" className="space-y-6">
              {/* Product Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                  <CardDescription>
                    Basic information about your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="product-title">
                      Product Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="product-title"
                      value={productData.productDetails.title}
                      onChange={(e) =>
                        updateField("productDetails.title", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-id">Product ID</Label>
                      <Input
                        id="product-id"
                        value={productData.id}
                        onChange={(e) => updateField("id", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="product-sku">
                        SKU <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="product-sku"
                        value={productData.sku}
                        onChange={(e) => updateField("sku", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-upc">UPC</Label>
                      <Input
                        id="product-upc"
                        value={productData.gtin.upc}
                        onChange={(e) =>
                          updateField("gtin.upc", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="product-ean">EAN</Label>
                      <Input
                        id="product-ean"
                        value={productData.gtin.ean}
                        onChange={(e) =>
                          updateField("gtin.ean", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="product-slug">
                      Product Slug <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="product-slug"
                      value={productData.slug}
                      onChange={(e) => updateField("slug", e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This will be used in the product URL:
                      https://example.com/products/{productData.slug}
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="short-description">Short Description</Label>
                    <Textarea
                      id="short-description"
                      value={productData.productDetails.shortDescription}
                      onChange={(e) =>
                        updateField(
                          "productDetails.shortDescription",
                          e.target.value
                        )
                      }
                      className="mt-1"
                      placeholder="Brief description for product listings and search results"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This description appears in product listings and search
                      results. Keep it concise.
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="long-description">
                      Long Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="long-description"
                      value={productData.productDetails.longDescription}
                      onChange={(e) =>
                        updateField(
                          "productDetails.longDescription",
                          e.target.value
                        )
                      }
                      className="mt-1 min-h-[200px]"
                    />
                    <div className="flex items-center gap-2 mt-2 border-t pt-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Underline className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Link2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Category & Classification */}
              <Card>
                <CardHeader>
                  <CardTitle>Category & Classification</CardTitle>
                  <CardDescription>
                    Categorize your product for better organization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="product-type">
                        Product Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={productData.type}
                        onValueChange={(value) => updateField("type", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Apparel">Apparel</SelectItem>
                          <SelectItem value="Footwear">Footwear</SelectItem>
                          <SelectItem value="Equipment">Equipment</SelectItem>
                          <SelectItem value="Accessories">
                            Accessories
                          </SelectItem>
                          <SelectItem value="Electronics">
                            Electronics
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="target-audience">Target Audience</Label>
                      <Select
                        value={productData.targetAudience[0]}
                        onValueChange={(value) =>
                          updateArrayItem("targetAudience", 0, value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select target audience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="men">Men</SelectItem>
                          <SelectItem value="women">Women</SelectItem>
                          <SelectItem value="unisex">Unisex</SelectItem>
                          <SelectItem value="kids">Kids</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="product-status">Status</Label>
                      <Select
                        value={productData.status}
                        onValueChange={(value) => updateField("status", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                          <SelectItem value="out_of_stock">
                            Out of Stock
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="primary-category">
                        Primary Category <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={productData.category.primary}
                        onValueChange={(value) =>
                          updateField("category.primary", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select primary category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Outdoor">Outdoor</SelectItem>
                          <SelectItem value="Indoor">Indoor</SelectItem>
                          <SelectItem value="Casual">Casual</SelectItem>
                          <SelectItem value="Athletic">Athletic</SelectItem>
                          <SelectItem value="Formal">Formal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="secondary-category">
                        Secondary Category
                      </Label>
                      <Select
                        value={productData.category.secondary}
                        onValueChange={(value) =>
                          updateField("category.secondary", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select secondary category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Hiking">Hiking</SelectItem>
                          <SelectItem value="Running">Running</SelectItem>
                          <SelectItem value="Climbing">Climbing</SelectItem>
                          <SelectItem value="Camping">Camping</SelectItem>
                          <SelectItem value="Skiing">Skiing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="tertiary-category">
                        Tertiary Category
                      </Label>
                      <Select
                        value={productData.category.tertiary}
                        onValueChange={(value) =>
                          updateField("category.tertiary", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select tertiary category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Jackets">Jackets</SelectItem>
                          <SelectItem value="Pants">Pants</SelectItem>
                          <SelectItem value="Shirts">Shirts</SelectItem>
                          <SelectItem value="Shoes">Shoes</SelectItem>
                          <SelectItem value="Accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand-name">
                        Brand Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="brand-name"
                        value={productData.brand.name}
                        onChange={(e) =>
                          updateField("brand.name", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="manufacturer">Manufacturer</Label>
                      <Input
                        id="manufacturer"
                        value={productData.brand.manufacturer}
                        onChange={(e) =>
                          updateField("brand.manufacturer", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Features</CardTitle>
                  <CardDescription>
                    Key features and selling points
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productData.productDetails.features.map(
                      (feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={feature}
                            onChange={(e) =>
                              updateArrayItem(
                                "productDetails.features",
                                index,
                                e.target.value
                              )
                            }
                            placeholder={`Feature ${index + 1}`}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              removeArrayItem("productDetails.features", index)
                            }
                            className="shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addFeature}
                      className="mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" /> Add Feature
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Product Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Upload high-quality images of your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center h-[180px] border-primary/20 bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
                      <Upload className="h-8 w-8 text-primary mb-2" />
                      <p className="text-sm font-medium text-primary">
                        Click to Upload
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        SVG, PNG, JPG or GIF (Max. 2MB)
                      </p>
                    </div>
                    {productData.media.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative border rounded-lg overflow-hidden h-[180px] group"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Product image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white/80 hover:bg-white"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                        {index === 0 && (
                          <Badge className="absolute top-2 left-2 bg-primary">
                            Primary
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      <span>
                        The first image will be used as the primary image
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-6">
              {/* Product Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>
                    Detailed information about your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="material">Material</Label>
                      <Input
                        id="material"
                        defaultValue="100% Nylon with HydroGuard membrane"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="style-code">Style Code</Label>
                      <Input
                        id="style-code"
                        defaultValue="AC-TS-2023"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country-of-origin">
                        Country of Origin
                      </Label>
                      <Select defaultValue="vietnam">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">USA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="warranty">Warranty</Label>
                      <Select defaultValue="1year">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select warranty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Warranty</SelectItem>
                          <SelectItem value="30days">30 Days</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                          <SelectItem value="1year">1 Year</SelectItem>
                          <SelectItem value="2years">2 Years</SelectItem>
                          <SelectItem value="lifetime">Lifetime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="mb-2 block">Product Attributes</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="weight">Weight (g)</Label>
                        <Input
                          id="weight"
                          defaultValue="450"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="waterproof-rating">
                          Waterproof Rating
                        </Label>
                        <Select defaultValue="20000mm">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select rating" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000mm">
                              5,000mm (Light Rain)
                            </SelectItem>
                            <SelectItem value="10000mm">
                              10,000mm (Moderate Rain)
                            </SelectItem>
                            <SelectItem value="20000mm">
                              20,000mm (Heavy Rain)
                            </SelectItem>
                            <SelectItem value="30000mm">
                              30,000mm+ (Extreme Conditions)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="breathability">Breathability</Label>
                        <Select defaultValue="15000g">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select breathability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000g">
                              5,000g (Basic)
                            </SelectItem>
                            <SelectItem value="10000g">
                              10,000g (Good)
                            </SelectItem>
                            <SelectItem value="15000g">
                              15,000g (Very Good)
                            </SelectItem>
                            <SelectItem value="20000g">
                              20,000g+ (Excellent)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="season">Season</Label>
                        <Select defaultValue="all_season">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select season" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="spring">Spring</SelectItem>
                            <SelectItem value="summer">Summer</SelectItem>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="winter">Winter</SelectItem>
                            <SelectItem value="all_season">
                              All Season
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="mb-2 block">Features</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-1" defaultChecked />
                        <label
                          htmlFor="feature-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Waterproof
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-2" defaultChecked />
                        <label
                          htmlFor="feature-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Windproof
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-3" defaultChecked />
                        <label
                          htmlFor="feature-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Breathable
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-4" defaultChecked />
                        <label
                          htmlFor="feature-4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Lightweight
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-5" />
                        <label
                          htmlFor="feature-5"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Insulated
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-6" defaultChecked />
                        <label
                          htmlFor="feature-6"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Packable
                        </label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label htmlFor="care-instructions">Care Instructions</Label>
                    <Textarea
                      id="care-instructions"
                      className="mt-1"
                      defaultValue="Machine wash cold with like colors. Do not bleach. Do not iron. Do not dry clean. Hang to dry."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Return Policy */}
              <Card>
                <CardHeader>
                  <CardTitle>Return Policy</CardTitle>
                  <CardDescription>
                    Set return policy for this product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="return-eligible"
                      checked={productData.returnPolicy.eligible}
                      onCheckedChange={(checked) =>
                        updateField("returnPolicy.eligible", checked)
                      }
                    />
                    <Label htmlFor="return-eligible">Returns eligible</Label>
                  </div>

                  {productData.returnPolicy.eligible && (
                    <>
                      <div>
                        <Label htmlFor="return-period">
                          Return Period (days)
                        </Label>
                        <Input
                          id="return-period"
                          type="number"
                          value={productData.returnPolicy.period}
                          onChange={(e) =>
                            updateField(
                              "returnPolicy.period",
                              Number.parseInt(e.target.value)
                            )
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label className="mb-2 block">Return Conditions</Label>
                        <div className="space-y-2">
                          {productData.returnPolicy.conditions.map(
                            (condition, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Input
                                  value={condition}
                                  onChange={(e) =>
                                    updateArrayItem(
                                      "returnPolicy.conditions",
                                      index,
                                      e.target.value
                                    )
                                  }
                                  placeholder={`Condition ${index + 1}`}
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    removeArrayItem(
                                      "returnPolicy.conditions",
                                      index
                                    )
                                  }
                                  className="shrink-0"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            )
                          )}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={addReturnCondition}
                            className="mt-2"
                          >
                            <Plus className="h-4 w-4 mr-2" /> Add Condition
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Variants Tab */}
            <TabsContent value="variants" className="space-y-6">
              {/* Variants Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                  <CardDescription>
                    Manage color and size variants for your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Switch id="has-variants" defaultChecked />
                      <Label htmlFor="has-variants">
                        This product has multiple variants
                      </Label>
                    </div>
                    <Button variant="outline" size="sm" onClick={addVariant}>
                      <Plus className="h-4 w-4 mr-2" /> Add Variant
                    </Button>
                  </div>

                  <Separator />

                  {/* Variants List */}
                  <div className="space-y-6">
                    {productData.inventory.variants.map(
                      (variant, variantIndex) => (
                        <div
                          key={variant.id}
                          className="border rounded-md overflow-hidden"
                        >
                          <div className="bg-muted p-3 border-b flex items-center justify-between">
                            <div className="font-medium flex items-center gap-2">
                              <div
                                className="w-4 h-4 rounded-full border"
                                style={{
                                  backgroundColor: variant.color.toLowerCase(),
                                }}
                              />
                              <span>{variant.color || "New Variant"}</span>
                              <Badge
                                variant={
                                  variant.stockQuantity > 0
                                    ? "outline"
                                    : "destructive"
                                }
                                className="ml-2"
                              >
                                {variant.stockQuantity > 0
                                  ? `${variant.stockQuantity} in stock`
                                  : "Out of stock"}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                removeArrayItem(
                                  "inventory.variants",
                                  variantIndex
                                )
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="p-4 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label
                                  htmlFor={`variant-${variantIndex}-color`}
                                >
                                  Color Name
                                </Label>
                                <Input
                                  id={`variant-${variantIndex}-color`}
                                  value={variant.color}
                                  onChange={(e) =>
                                    updateVariant(
                                      variantIndex,
                                      "color",
                                      e.target.value
                                    )
                                  }
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label
                                  htmlFor={`variant-${variantIndex}-stock`}
                                >
                                  Total Stock
                                </Label>
                                <Input
                                  id={`variant-${variantIndex}-stock`}
                                  type="number"
                                  value={variant.stockQuantity}
                                  onChange={(e) =>
                                    updateVariant(
                                      variantIndex,
                                      "stockQuantity",
                                      Number.parseInt(e.target.value)
                                    )
                                  }
                                  className="mt-1"
                                />
                              </div>
                            </div>

                            <div>
                              <Label className="mb-2 block">
                                Size Availability
                              </Label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {variant.sizes.map((size) => (
                                  <div
                                    key={size}
                                    className="border rounded-md p-3"
                                  >
                                    <div className="flex items-center justify-between mb-2">
                                      <Label
                                        htmlFor={`variant-${variantIndex}-size-${size}`}
                                      >
                                        {size}
                                      </Label>
                                      <div className="flex items-center gap-1">
                                        {variant.sizeStock[size] <= 0 && (
                                          <Badge
                                            variant="destructive"
                                            className="text-xs"
                                          >
                                            Out of stock
                                          </Badge>
                                        )}
                                        {variant.sizeStock[size] > 0 &&
                                          variant.sizeStock[size] <= 5 && (
                                            <Badge
                                              variant="outline"
                                              className="text-xs text-amber-500 border-amber-200 bg-amber-50"
                                            >
                                              Low stock
                                            </Badge>
                                          )}
                                      </div>
                                    </div>
                                    <Input
                                      id={`variant-${variantIndex}-size-${size}`}
                                      type="number"
                                      value={variant.sizeStock[size]}
                                      onChange={(e) =>
                                        updateSizeStock(
                                          variantIndex,
                                          size,
                                          Number.parseInt(e.target.value)
                                        )
                                      }
                                      className="mt-1"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="space-y-6">
              {/* Product Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Pricing</CardTitle>
                  <CardDescription>
                    Set pricing information for your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="base-price">
                        Base Price <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex mt-1">
                        <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                          $
                        </div>
                        <Input
                          id="base-price"
                          type="number"
                          step="0.01"
                          value={productData.pricing.base.amount}
                          onChange={(e) =>
                            updateField(
                              "pricing.base.amount",
                              Number.parseFloat(e.target.value)
                            )
                          }
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="original-price">Original Price</Label>
                      <div className="flex mt-1">
                        <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                          $
                        </div>
                        <Input
                          id="original-price"
                          type="number"
                          step="0.01"
                          value={productData.pricing.original.amount}
                          onChange={(e) =>
                            updateField(
                              "pricing.original.amount",
                              Number.parseFloat(e.target.value)
                            )
                          }
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="currency">Currency</Label>
                      <Select
                        value={productData.pricing.base.currency}
                        onValueChange={(value) => {
                          updateField("pricing.base.currency", value);
                          updateField("pricing.original.currency", value);
                        }}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD ($)</SelectItem>
                          <SelectItem value="EUR">EUR (€)</SelectItem>
                          <SelectItem value="GBP">GBP (£)</SelectItem>
                          <SelectItem value="CAD">CAD (C$)</SelectItem>
                          <SelectItem value="AUD">AUD (A$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="tax-class">Tax Class</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select tax class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">
                            Standard Rate
                          </SelectItem>
                          <SelectItem value="reduced">Reduced Rate</SelectItem>
                          <SelectItem value="zero">Zero Rate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-md font-medium">Discount</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <HelpCircle className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Set a discount for this product. The discount will
                              be applied to the base price.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="discount-type">Discount Type</Label>
                        <Select
                          value={productData.pricing.discount.type}
                          onValueChange={(value) =>
                            updateField("pricing.discount.type", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select discount type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="percentage">
                              Percentage
                            </SelectItem>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="discount-value">Discount Value</Label>
                        <div className="flex mt-1">
                          <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                            {productData.pricing.discount.type ===
                            "percentage" ? (
                              <Percent className="h-4 w-4" />
                            ) : (
                              <span>$</span>
                            )}
                          </div>
                          <Input
                            id="discount-value"
                            type="number"
                            step={
                              productData.pricing.discount.type === "percentage"
                                ? "1"
                                : "0.01"
                            }
                            value={productData.pricing.discount.value}
                            onChange={(e) =>
                              updateField(
                                "pricing.discount.value",
                                Number.parseFloat(e.target.value)
                              )
                            }
                            className="rounded-l-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-muted/50 rounded-md">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Final Price:</span>
                        <span className="font-bold text-lg">
                          $
                          {productData.pricing.discount.type === "percentage"
                            ? (
                                productData.pricing.base.amount *
                                (1 - productData.pricing.discount.value / 100)
                              ).toFixed(2)
                            : (
                                productData.pricing.base.amount -
                                productData.pricing.discount.value
                              ).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Savings:</span>
                        <span>
                          $
                          {productData.pricing.discount.type === "percentage"
                            ? (
                                productData.pricing.base.amount *
                                (productData.pricing.discount.value / 100)
                              ).toFixed(2)
                            : productData.pricing.discount.value.toFixed(
                                2
                              )}{" "}
                          (
                          {productData.pricing.discount.type === "percentage"
                            ? productData.pricing.discount.value
                            : (
                                (productData.pricing.discount.value /
                                  productData.pricing.base.amount) *
                                100
                              ).toFixed(0)}
                          %)
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-md font-medium">Bulk Pricing</h3>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" /> Add Tier
                      </Button>
                    </div>
                    <div className="border rounded-md overflow-hidden">
                      <div className="grid grid-cols-3 bg-muted p-3 border-b font-medium">
                        <div>Quantity Range</div>
                        <div>Price</div>
                        <div>Discount</div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="grid grid-cols-3 gap-2 items-center">
                          <div className="flex items-center gap-2">
                            <Input
                              placeholder="1"
                              className="w-20"
                              defaultValue="1"
                            />
                            <span>-</span>
                            <Input
                              placeholder="9"
                              className="w-20"
                              defaultValue="9"
                            />
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                              $
                            </div>
                            <Input
                              defaultValue={productData.pricing.base.amount.toFixed(
                                2
                              )}
                              className="rounded-l-none"
                            />
                          </div>
                          <div>
                            <Input defaultValue="0%" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 items-center">
                          <div className="flex items-center gap-2">
                            <Input
                              placeholder="10"
                              className="w-20"
                              defaultValue="10"
                            />
                            <span>-</span>
                            <Input
                              placeholder="49"
                              className="w-20"
                              defaultValue="49"
                            />
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                              $
                            </div>
                            <Input
                              defaultValue={(
                                productData.pricing.base.amount * 0.95
                              ).toFixed(2)}
                              className="rounded-l-none"
                            />
                          </div>
                          <div>
                            <Input defaultValue="5%" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 items-center">
                          <div className="flex items-center gap-2">
                            <Input
                              placeholder="50"
                              className="w-20"
                              defaultValue="50"
                            />
                            <span>-</span>
                            <Input
                              placeholder="+"
                              className="w-20"
                              defaultValue="+"
                            />
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                              $
                            </div>
                            <Input
                              defaultValue={(
                                productData.pricing.base.amount * 0.9
                              ).toFixed(2)}
                              className="rounded-l-none"
                            />
                          </div>
                          <div>
                            <Input defaultValue="10%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Inventory Tab */}
            <TabsContent value="inventory" className="space-y-6">
              {/* Inventory Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>
                    Manage stock and inventory settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="track-inventory"
                      checked={productData.inventory.trackInventory}
                      onCheckedChange={(checked) =>
                        updateField("inventory.trackInventory", checked)
                      }
                    />
                    <Label htmlFor="track-inventory">
                      Track inventory for this product
                    </Label>
                  </div>

                  {productData.inventory.trackInventory && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="total-stock">Total Stock</Label>
                          <Input
                            id="total-stock"
                            value={calculateTotalStock()}
                            disabled
                            className="mt-1 bg-muted"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Sum of all variant stock quantities
                          </p>
                        </div>
                        <div>
                          <Label htmlFor="low-stock-threshold">
                            Low Stock Threshold
                          </Label>
                          <Input
                            id="low-stock-threshold"
                            type="number"
                            value={productData.inventory.lowStockThreshold}
                            onChange={(e) =>
                              updateField(
                                "inventory.lowStockThreshold",
                                Number.parseInt(e.target.value)
                              )
                            }
                            className="mt-1"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            You'll be notified when stock falls below this
                            number
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="allow-backorders" />
                          <label
                            htmlFor="allow-backorders"
                            className="text-sm font-medium leading-none"
                          >
                            Allow backorders when out of stock
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notify-low-stock" defaultChecked />
                          <label
                            htmlFor="notify-low-stock"
                            className="text-sm font-medium leading-none"
                          >
                            Notify when stock is low
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hide-out-of-stock" />
                          <label
                            htmlFor="hide-out-of-stock"
                            className="text-sm font-medium leading-none"
                          >
                            Hide product when out of stock
                          </label>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-md font-medium mb-4">
                          Inventory Summary
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card>
                            <CardContent className="pt-6">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-muted-foreground">
                                  Total Stock
                                </div>
                                <Badge variant="outline" className="ml-auto">
                                  {calculateTotalStock()} units
                                </Badge>
                              </div>
                              <div className="text-2xl font-bold mt-2">
                                {calculateTotalStock()}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Across all variants
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-6">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-muted-foreground">
                                  Low Stock Items
                                </div>
                                <Badge
                                  variant="outline"
                                  className="ml-auto bg-amber-50 text-amber-500 border-amber-200"
                                >
                                  Warning
                                </Badge>
                              </div>
                              <div className="text-2xl font-bold mt-2">
                                {/* {productData.inventory.variants.reduce((count, variant) => {
                                  return count + Object.values(variant.sizeStock).filter(stock  => {
                                  return count + Object.values(variant.sizeStock).filter(stock => stock > 0 && stock <= productData.inventory.lowStockThreshold).length;
                                }, 0)} */}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Items with stock below threshold
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="pt-6">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-muted-foreground">
                                  Out of Stock Items
                                </div>
                                <Badge
                                  variant="destructive"
                                  className="ml-auto"
                                >
                                  Alert
                                </Badge>
                              </div>
                              <div className="text-2xl font-bold mt-2">
                                {productData.inventory.variants.reduce(
                                  (count, variant) => {
                                    return (
                                      count +
                                      Object.values(variant.sizeStock).filter(
                                        (stock) => stock <= 0
                                      ).length
                                    );
                                  },
                                  0
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Items with zero stock
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shipping Tab */}
            <TabsContent value="shipping" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>
                    Configure shipping settings for this product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="free-shipping"
                      checked={productData.shipping.freeShippingEligible}
                      onCheckedChange={(checked) =>
                        updateField("shipping.freeShippingEligible", checked)
                      }
                    />
                    <Label htmlFor="free-shipping">
                      Eligible for free shipping
                    </Label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="domestic-delivery">
                        Estimated Domestic Delivery
                      </Label>
                      <Input
                        id="domestic-delivery"
                        value={productData.shipping.estimatedDelivery.domestic}
                        onChange={(e) =>
                          updateField(
                            "shipping.estimatedDelivery.domestic",
                            e.target.value
                          )
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="international-delivery">
                        Estimated International Delivery
                      </Label>
                      <Input
                        id="international-delivery"
                        value={
                          productData.shipping.estimatedDelivery.international
                        }
                        onChange={(e) =>
                          updateField(
                            "shipping.estimatedDelivery.international",
                            e.target.value
                          )
                        }
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-md font-medium mb-4">
                      Product Dimensions & Weight
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="weight">Weight (g)</Label>
                        <Input
                          id="weight"
                          defaultValue="450"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dimensions">Dimensions (cm)</Label>
                        <div className="grid grid-cols-3 gap-2 mt-1">
                          <Input placeholder="Length" defaultValue="30" />
                          <Input placeholder="Width" defaultValue="20" />
                          <Input placeholder="Height" defaultValue="5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-md font-medium mb-4">
                      Shipping Restrictions
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hazardous" />
                        <label
                          htmlFor="hazardous"
                          className="text-sm font-medium leading-none"
                        >
                          Contains hazardous materials
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="restricted" />
                        <label
                          htmlFor="restricted"
                          className="text-sm font-medium leading-none"
                        >
                          Shipping restricted in certain countries
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="special-handling" />
                        <label
                          htmlFor="special-handling"
                          className="text-sm font-medium leading-none"
                        >
                          Requires special handling
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* SEO Tab */}
            <TabsContent value="seo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search Engine Optimization</CardTitle>
                  <CardDescription>
                    Optimize your product for search engines
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input
                      id="meta-title"
                      defaultValue={`${productData.productDetails.title} | SadaxCart`}
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Recommended length: 50-60 characters
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea
                      id="meta-description"
                      className="mt-1"
                      defaultValue={productData.productDetails.shortDescription}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Recommended length: 150-160 characters
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="focus-keyword">Focus Keywords</Label>
                    <Input
                      id="focus-keyword"
                      defaultValue="waterproof jacket, hiking jacket, outdoor gear, rain jacket"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Separate keywords with commas
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-md font-medium mb-2">
                      Social Media Preview
                    </h3>
                    <div className="border rounded-md p-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="og-title">Open Graph Title</Label>
                          <Input
                            id="og-title"
                            defaultValue={productData.productDetails.title}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="og-description">
                            Open Graph Description
                          </Label>
                          <Textarea
                            id="og-description"
                            className="mt-1"
                            defaultValue={
                              productData.productDetails.shortDescription
                            }
                          />
                        </div>
                        <div>
                          <Label htmlFor="og-image">Open Graph Image</Label>
                          <div className="mt-1 border-2 border-dashed rounded-md p-4 text-center">
                            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Recommended size: 1200 x 630 pixels
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Product Status */}
          <Card>
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="product-status">Status</Label>
                <Select
                  value={productData.status}
                  onValueChange={(value) => updateField("status", value)}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                    <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="product-visibility">Visibility</Label>
                <Select defaultValue="public">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="password">Password Protected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="featured-product" />
                <Label htmlFor="featured-product">Featured Product</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline" size="sm" className="gap-1">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Clock className="h-4 w-4" />
                Schedule
              </Button>
            </CardFooter>
          </Card>

          {/* Product Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Product Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Sales</span>
                </div>
                <span className="font-medium">
                  {productData.salesCount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Views</span>
                </div>
                <span className="font-medium">
                  {productData.views.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Rating</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">
                    {productData.ratings.average}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">
                    ({productData.ratings.totalReviews})
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Created</span>
                </div>
                <span className="text-sm">
                  {productData.createdAt.toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Updated</span>
                </div>
                <span className="text-sm">
                  {productData.updatedAt.toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Rating Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Rating Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-16 text-sm">5 stars</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${
                        (productData.ratings.ratingBreakdown["5stars"] /
                          productData.ratings.totalReviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-10 text-sm text-right">
                  {productData.ratings.ratingBreakdown["5stars"]}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-sm">4 stars</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${
                        (productData.ratings.ratingBreakdown["4stars"] /
                          productData.ratings.totalReviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-10 text-sm text-right">
                  {productData.ratings.ratingBreakdown["4stars"]}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-sm">3 stars</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${
                        (productData.ratings.ratingBreakdown["3stars"] /
                          productData.ratings.totalReviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-10 text-sm text-right">
                  {productData.ratings.ratingBreakdown["3stars"]}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-sm">2 stars</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${
                        (productData.ratings.ratingBreakdown["2stars"] /
                          productData.ratings.totalReviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-10 text-sm text-right">
                  {productData.ratings.ratingBreakdown["2stars"]}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 text-sm">1 star</div>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${
                        (productData.ratings.ratingBreakdown["1star"] /
                          productData.ratings.totalReviews) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <div className="w-10 text-sm text-right">
                  {productData.ratings.ratingBreakdown["1star"]}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Copy className="h-4 w-4" />
                Duplicate Product
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Globe className="h-4 w-4" />
                View on Store
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete Product
              </Button>
            </CardContent>
          </Card>

          {/* Form Validation */}
          <Alert className="bg-amber-50 text-amber-800 border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              Please fill in all required fields marked with{" "}
              <span className="text-red-500">*</span> before submitting.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t">
        <Button variant="outline" className="gap-2">
          <X className="h-4 w-4" />
          Cancel
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="outline" className="gap-2">
            <Clock className="h-4 w-4" />
            Schedule
          </Button>
          <Button className="gap-2 bg-teal-600 hover:bg-teal-700">
            <Package className="h-4 w-4" />
            Publish Product
          </Button>
        </div>
      </div>
    </div>
  );
}
