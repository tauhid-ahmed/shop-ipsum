"use client";
import { LucideCheck, LucideMail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "./layout/section";
import { Container } from "./layout/container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import newsLetterCoverImage from "@/images/newsletter-cover.webp";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <Section padding="sm">
      <Container>
        <div className="relative rounded-xl overflow-hidden">
          <div className="opacity-20 brightness-150 absolute inset-0 after:absolute after:inset-0 after:bg-gradient-to-br after:from-primary/50 after:to-transparent">
            <Image
              className="size-full object-cover"
              src={newsLetterCoverImage}
              alt="newsletter cover image"
            />
          </div>
          <Card className="bg-transparent z-10 relative brightness-125">
            <CardContent className="p-8 md:p-12">
              <CardHeader className="p-0 mb-4 text-center">
                <LucideMail className="size-10 md:size-14 mx-auto text-emerald-500" />
                <CardTitle className="text-2xl md:text-4xl">
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardDescription className="mb-4 md:text-lg text-center">
                Get the latest news and updates delivered to your inbox.
              </CardDescription>
              <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-h-9"
                />
                <Button
                  onClick={handleSubmit}
                  className="flex items-center gap-1"
                >
                  {subscribed ? (
                    <LucideCheck className="h-4 w-4" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              {subscribed && (
                <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
                  ✓ Successfully subscribed!
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
