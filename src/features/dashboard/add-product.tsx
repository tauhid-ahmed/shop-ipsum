"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowLeft,
  Bold,
  Clock,
  Copy,
  Eye,
  FileText,
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Container } from "@/components/layout/container";

import productImage from "@/images/product-01.webp";

export function AddProduct() {
  // Product form state
  const [formState, setFormState] = useState({
    name: "Premium Half Sleeve T-Shirt - Brooklyn Fleece",
    description:
      "Looking for a little extra warmth? Grab this classic hoodie. Smooth on the outside with unbrushed loops on the inside, our mid weight French terry is comfortable enough to wear year long.",
    shortDescription:
      "Premium cotton blend t-shirt with modern fit and exceptional comfort.",
    sku: "SKU-BB-66-A6",
    price: "12120.00",
    salePrice: "10120.00",
    stock: "10120",
    category: "mens-clothing",
    subcategory: "t-shirts",
    productType: "topwear",
    brand: "adidas",
    tags: "summer, casual, cotton, premium",
    published: true,
    featured: false,
    hasVariants: true,
  });

  // Product images state
  const [productImages, setProductImages] = useState<string[]>([
    "/placeholder.svg?height=200&width=150",
    "/placeholder.svg?height=200&width=150",
    "/placeholder.svg?height=200&width=150",
  ]);

  // Available colors with availability status
  const [colors, setColors] = useState([
    { id: "black", name: "Black", hex: "#000000", available: true },
    { id: "white", name: "White", hex: "#FFFFFF", available: true },
    { id: "red", name: "Red", hex: "#FF0000", available: false },
    { id: "blue", name: "Blue", hex: "#0000FF", available: true },
    { id: "green", name: "Green", hex: "#008000", available: false },
    { id: "gray", name: "Gray", hex: "#808080", available: true },
    { id: "navy", name: "Navy", hex: "#000080", available: true },
  ]);

  // Available sizes with availability per color
  const [sizes, setSizes] = useState([
    { id: "xs", name: "XS", availableFor: ["black", "white"] },
    {
      id: "s",
      name: "S",
      availableFor: ["black", "white", "blue", "gray", "navy"],
    },
    {
      id: "m",
      name: "M",
      availableFor: ["black", "white", "blue", "gray", "navy"],
    },
    {
      id: "l",
      name: "L",
      availableFor: ["black", "white", "blue", "gray", "navy"],
    },
    { id: "xl", name: "XL", availableFor: ["black", "blue", "gray", "navy"] },
    { id: "xxl", name: "XXL", availableFor: ["black", "navy"] },
  ]);

  // Selected color for size availability matrix
  const [selectedColor, setSelectedColor] = useState("black");

  // Toggle size availability for selected color
  const toggleSizeForColor = (sizeId: string) => {
    setSizes(
      sizes.map((size) => {
        if (size.id === sizeId) {
          const availableFor = [...size.availableFor];
          const colorIndex = availableFor.indexOf(selectedColor);

          if (colorIndex >= 0) {
            availableFor.splice(colorIndex, 1);
          } else {
            availableFor.push(selectedColor);
          }

          return { ...size, availableFor };
        }
        return size;
      })
    );
  };

  // Toggle color availability
  const toggleColorAvailability = (colorId: string) => {
    setColors(
      colors.map((color) =>
        color.id === colorId ? { ...color, available: !color.available } : color
      )
    );
  };

  // Handle form input changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormState({
      ...formState,
      [field]: value,
    });
  };

  return (
    <Container size="fluid">
      <Image src={productImage} alt="Product Image" className="size-10" />
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
              Add New Product
            </h1>
            <p className="text-muted-foreground mt-1">
              Create a new product listing for your store
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
            <TabsList className="grid grid-cols-6 mb-6">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
            </TabsList>

            {/* Basic Info Tab */}
            <TabsContent value="basic" className="space-y-6">
              {/* Name and Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Information</CardTitle>
                  <CardDescription>
                    Basic information about your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="product-name">
                      Product Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="product-name"
                      value={formState.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="product-description">
                      Product Description{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="product-description"
                      value={formState.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      className="mt-1 min-h-[120px]"
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
                  <div>
                    <Label htmlFor="short-description">Short Description</Label>
                    <Textarea
                      id="short-description"
                      value={formState.shortDescription}
                      onChange={(e) =>
                        handleInputChange("shortDescription", e.target.value)
                      }
                      className="mt-1"
                      placeholder="Brief description for product listings and search results"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      This description appears in product listings and search
                      results. Keep it concise.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Category */}
              <Card>
                <CardHeader>
                  <CardTitle>Category & Classification</CardTitle>
                  <CardDescription>
                    Categorize your product for better organization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-category">
                        Product Category <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formState.category}
                        onValueChange={(value) =>
                          handleInputChange("category", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mens-clothing">
                            Men's Clothing
                          </SelectItem>
                          <SelectItem value="womens-clothing">
                            Women's Clothing
                          </SelectItem>
                          <SelectItem value="kids-clothing">
                            Kids' Clothing
                          </SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                          <SelectItem value="footwear">Footwear</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="product-subcategory">
                        Product Sub-Category
                      </Label>
                      <Select
                        value={formState.subcategory}
                        onValueChange={(value) =>
                          handleInputChange("subcategory", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select sub-category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="t-shirts">T-Shirts</SelectItem>
                          <SelectItem value="shirts">Shirts</SelectItem>
                          <SelectItem value="polos">Polos</SelectItem>
                          <SelectItem value="hoodies">
                            Hoodies & Sweatshirts
                          </SelectItem>
                          <SelectItem value="jeans">Jeans</SelectItem>
                          <SelectItem value="trousers">Trousers</SelectItem>
                          <SelectItem value="shorts">Shorts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="product-type">Product Type</Label>
                      <Select
                        value={formState.productType}
                        onValueChange={(value) =>
                          handleInputChange("productType", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="topwear">Topwear</SelectItem>
                          <SelectItem value="bottomwear">Bottomwear</SelectItem>
                          <SelectItem value="outerwear">Outerwear</SelectItem>
                          <SelectItem value="innerwear">Innerwear</SelectItem>
                          <SelectItem value="footwear">Footwear</SelectItem>
                          <SelectItem value="accessories">
                            Accessories
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Select
                        value={formState.brand}
                        onValueChange={(value) =>
                          handleInputChange("brand", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adidas">Adidas</SelectItem>
                          <SelectItem value="nike">Nike</SelectItem>
                          <SelectItem value="puma">Puma</SelectItem>
                          <SelectItem value="reebok">Reebok</SelectItem>
                          <SelectItem value="under-armour">
                            Under Armour
                          </SelectItem>
                          <SelectItem value="h-and-m">H&M</SelectItem>
                          <SelectItem value="zara">Zara</SelectItem>
                          <SelectItem value="levis">Levi's</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="product-tags">Tags</Label>
                    <Input
                      id="product-tags"
                      value={formState.tags}
                      onChange={(e) =>
                        handleInputChange("tags", e.target.value)
                      }
                      placeholder="summer, casual, cotton (comma separated)"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Tags help customers find your products through search and
                      filtering
                    </p>
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
                    {productImages.map((image, index) => (
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
                            Featured
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      <span>
                        The first image will be used as the featured image
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-6">
              {/* Product Details */}
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
                        defaultValue="80% cotton/20% polyester"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="style-code">Style Code</Label>
                      <Input
                        id="style-code"
                        defaultValue="FV7283-010"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country-of-origin">
                        Country of Origin
                      </Label>
                      <Select defaultValue="china">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="turkey">Turkey</SelectItem>
                          <SelectItem value="italy">Italy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="warranty">Warranty</Label>
                      <Select defaultValue="none">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select warranty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Warranty</SelectItem>
                          <SelectItem value="30days">30 Days</SelectItem>
                          <SelectItem value="3months">3 Months</SelectItem>
                          <SelectItem value="6months">6 Months</SelectItem>
                          <SelectItem value="1year">1 Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="mb-2 block">Product Attributes</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sleeve-type">Sleeve Type</Label>
                        <Select defaultValue="half">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select sleeve type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half">Half Sleeve</SelectItem>
                            <SelectItem value="full">Full Sleeve</SelectItem>
                            <SelectItem value="sleeveless">
                              Sleeveless
                            </SelectItem>
                            <SelectItem value="three-quarter">
                              Three Quarter
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="neck-type">Neck Type</Label>
                        <Select defaultValue="round">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select neck type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="round">Round Neck</SelectItem>
                            <SelectItem value="v-neck">V-Neck</SelectItem>
                            <SelectItem value="polo">Polo</SelectItem>
                            <SelectItem value="henley">Henley</SelectItem>
                            <SelectItem value="crew">Crew Neck</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="fit-type">Fit Type</Label>
                        <Select defaultValue="regular">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select fit type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Regular Fit</SelectItem>
                            <SelectItem value="slim">Slim Fit</SelectItem>
                            <SelectItem value="relaxed">Relaxed Fit</SelectItem>
                            <SelectItem value="oversized">Oversized</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pattern">Pattern</Label>
                        <Select defaultValue="solid">
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select pattern" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solid">Solid</SelectItem>
                            <SelectItem value="printed">Printed</SelectItem>
                            <SelectItem value="striped">Striped</SelectItem>
                            <SelectItem value="checkered">Checkered</SelectItem>
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
                        <Checkbox id="feature-1" />
                        <label
                          htmlFor="feature-1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Moisture Wicking
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-2" />
                        <label
                          htmlFor="feature-2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Quick Dry
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-3" />
                        <label
                          htmlFor="feature-3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Breathable
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-4" />
                        <label
                          htmlFor="feature-4"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          UV Protection
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-5" />
                        <label
                          htmlFor="feature-5"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Eco-Friendly
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="feature-6" defaultChecked />
                        <label
                          htmlFor="feature-6"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Soft Fabric
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
                      defaultValue="Machine wash cold with like colors. Tumble dry low. Do not iron print."
                    />
                  </div>
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
                      <Switch
                        id="has-variants"
                        checked={formState.hasVariants}
                        onCheckedChange={(checked) =>
                          handleInputChange("hasVariants", checked)
                        }
                      />
                      <Label htmlFor="has-variants">
                        This product has multiple variants
                      </Label>
                    </div>
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
                            Enable this option if your product comes in
                            different colors, sizes, or other variations
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {formState.hasVariants && (
                    <>
                      <Separator />

                      {/* Color Availability */}
                      <div>
                        <h3 className="text-md font-medium mb-3">
                          Color Availability
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select which colors are available for this product
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {colors.map((color) => (
                            <div
                              key={color.id}
                              className="flex items-center justify-between border p-3 rounded-md"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-6 h-6 rounded-full border"
                                  style={{ backgroundColor: color.hex }}
                                />
                                <span>{color.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {!color.available && (
                                  <Badge
                                    variant="outline"
                                    className="text-red-500 border-red-200 bg-red-50"
                                  >
                                    Unavailable
                                  </Badge>
                                )}
                                <Switch
                                  checked={color.available}
                                  onCheckedChange={() =>
                                    toggleColorAvailability(color.id)
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Size Availability Matrix */}
                      <div>
                        <h3 className="text-md font-medium mb-3">
                          Size Availability by Color
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Select which sizes are available for each color
                        </p>

                        <div className="mb-4">
                          <Label htmlFor="color-select">Select Color</Label>
                          <Select
                            value={selectedColor}
                            onValueChange={setSelectedColor}
                          >
                            <SelectTrigger className="mt-1 w-[200px]">
                              <SelectValue placeholder="Select color" />
                            </SelectTrigger>
                            <SelectContent>
                              {colors
                                .filter((c) => c.available)
                                .map((color) => (
                                  <SelectItem key={color.id} value={color.id}>
                                    <div className="flex items-center gap-2">
                                      <div
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: color.hex }}
                                      />
                                      <span>{color.name}</span>
                                    </div>
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-muted p-3 border-b font-medium">
                            Available Sizes for{" "}
                            {colors.find((c) => c.id === selectedColor)?.name}
                          </div>
                          <div className="p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                            {sizes.map((size) => (
                              <div
                                key={size.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`size-${size.id}`}
                                  checked={size.availableFor.includes(
                                    selectedColor
                                  )}
                                  onCheckedChange={() =>
                                    toggleSizeForColor(size.id)
                                  }
                                />
                                <Label htmlFor={`size-${size.id}`}>
                                  {size.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Size Chart */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-md font-medium">Size Chart</h3>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-1" /> Add Size Chart
                          </Button>
                        </div>
                        <div className="border rounded-md p-4 text-center text-muted-foreground">
                          No size chart added yet. Click the button above to add
                          one.
                        </div>
                      </div>
                    </>
                  )}
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
                      <Label htmlFor="price">
                        Regular Price <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex mt-1">
                        <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                          $
                        </div>
                        <Input
                          id="price"
                          value={formState.price}
                          onChange={(e) =>
                            handleInputChange("price", e.target.value)
                          }
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="sale-price">Sale Price</Label>
                      <div className="flex mt-1">
                        <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                          $
                        </div>
                        <Input
                          id="sale-price"
                          value={formState.salePrice}
                          onChange={(e) =>
                            handleInputChange("salePrice", e.target.value)
                          }
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cost-price">Cost Price</Label>
                      <div className="flex mt-1">
                        <div className="flex items-center justify-center px-3 border border-r-0 rounded-l-md bg-muted">
                          $
                        </div>
                        <Input
                          id="cost-price"
                          placeholder="Your cost price"
                          className="rounded-l-none"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        This is for your reference only and won't be shown to
                        customers
                      </p>
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
                      <h3 className="text-md font-medium">
                        Promotional Pricing
                      </h3>
                      <Button variant="outline" size="sm">
                        <Clock className="h-4 w-4 mr-1" /> Schedule Sale
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="discount-type">Discount Type</Label>
                        <Select defaultValue="percentage">
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
                            <Percent className="h-4 w-4" />
                          </div>
                          <Input
                            id="discount-value"
                            defaultValue="15"
                            className="rounded-l-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-md font-medium">Bulk Pricing</h3>
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
                              Set different prices for different quantity ranges
                              to encourage bulk purchases
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
                              defaultValue="10,120.00"
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
                              defaultValue="9,614.00"
                              className="rounded-l-none"
                            />
                          </div>
                          <div>
                            <Input defaultValue="5%" />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border-t">
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-1" /> Add Range
                        </Button>
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
                    <Switch id="track-inventory" defaultChecked />
                    <Label htmlFor="track-inventory">
                      Track inventory for this product
                    </Label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sku">
                        Stock Keeping Unit (SKU){" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="sku"
                        value={formState.sku}
                        onChange={(e) =>
                          handleInputChange("sku", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="barcode">
                        Barcode (ISBN, UPC, GTIN, etc.)
                      </Label>
                      <Input
                        id="barcode"
                        placeholder="Enter barcode"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="product-stock">
                        Current Stock <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="product-stock"
                        value={formState.stock}
                        onChange={(e) =>
                          handleInputChange("stock", e.target.value)
                        }
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="min-stock">Low Stock Threshold</Label>
                      <Input
                        id="min-stock"
                        defaultValue="100"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="min-order">Minimum Order Quantity</Label>
                      <Input id="min-order" defaultValue="1" className="mt-1" />
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
                  </div>

                  <Separator />

                  {formState.hasVariants && (
                    <div>
                      <h3 className="text-md font-medium mb-4">
                        Inventory by Variant
                      </h3>
                      <div className="border rounded-md overflow-hidden">
                        <div className="grid grid-cols-4 bg-muted p-3 border-b font-medium">
                          <div>Color</div>
                          <div>Size</div>
                          <div>Stock</div>
                          <div>SKU</div>
                        </div>
                        <ScrollArea className="h-[300px]">
                          <div className="p-3 space-y-2">
                            {colors
                              .filter((c) => c.available)
                              .map((color) =>
                                sizes
                                  .filter((s) =>
                                    s.availableFor.includes(color.id)
                                  )
                                  .map((size) => (
                                    <div
                                      key={`${color.id}-${size.id}`}
                                      className="grid grid-cols-4 gap-2 items-center py-2 border-b last:border-0"
                                    >
                                      <div className="flex items-center gap-2">
                                        <div
                                          className="w-4 h-4 rounded-full"
                                          style={{ backgroundColor: color.hex }}
                                        />
                                        <span>{color.name}</span>
                                      </div>
                                      <div>{size.name}</div>
                                      <div>
                                        <Input defaultValue="1000" />
                                      </div>
                                      <div>
                                        <Input
                                          defaultValue={`SKU-${color.id.toUpperCase()}-${size.id.toUpperCase()}`}
                                        />
                                      </div>
                                    </div>
                                  ))
                              )}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div>
                    <h3 className="text-md font-medium mb-4">Shipping</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          defaultValue="0.5"
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
                    <div className="mt-4 flex items-center space-x-2">
                      <Checkbox id="free-shipping" />
                      <label
                        htmlFor="free-shipping"
                        className="text-sm font-medium leading-none"
                      >
                        Free shipping
                      </label>
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
                      defaultValue="Premium Half Sleeve T-Shirt - Brooklyn Fleece | SadaxCart"
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
                      defaultValue="Shop our Premium Half Sleeve T-Shirt from Brooklyn Fleece collection. Made with 80% cotton/20% polyester for exceptional comfort and durability."
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Recommended length: 150-160 characters
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="product-url">Product URL Slug</Label>
                    <Input
                      id="product-url"
                      defaultValue="premium-half-sleeve-tshirt-brooklyn-fleece"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="focus-keyword">Focus Keyword</Label>
                    <Input
                      id="focus-keyword"
                      defaultValue="premium t-shirt, half sleeve, brooklyn fleece"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Separate keywords with commas
                    </p>
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
                <Select defaultValue="draft">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
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
                <Switch
                  id="featured-product"
                  checked={formState.featured}
                  onCheckedChange={(checked) =>
                    handleInputChange("featured", checked)
                  }
                />
                <Label htmlFor="featured-product">Featured Product</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="published-product"
                  checked={formState.published}
                  onCheckedChange={(checked) =>
                    handleInputChange("published", checked)
                  }
                />
                <Label htmlFor="published-product">Published</Label>
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

          {/* Product Organization */}
          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="product-collections">Collections</Label>
                <Select defaultValue="summer">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select collection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summer">Summer Collection</SelectItem>
                    <SelectItem value="winter">Winter Collection</SelectItem>
                    <SelectItem value="essentials">Essentials</SelectItem>
                    <SelectItem value="new-arrivals">New Arrivals</SelectItem>
                    <SelectItem value="best-sellers">Best Sellers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="product-vendor">Vendor</Label>
                <Select defaultValue="adidas">
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select vendor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adidas">Adidas</SelectItem>
                    <SelectItem value="nike">Nike</SelectItem>
                    <SelectItem value="puma">Puma</SelectItem>
                    <SelectItem value="reebok">Reebok</SelectItem>
                  </SelectContent>
                </Select>
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
                <FileText className="h-4 w-4" />
                Export as PDF
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
    </Container>
  );
}
