"use client";
import { LucideArrowRight, LucideCheck, LucideMail } from "lucide-react";
import { useState } from "react";
import { Section } from "./layout/section";
import { Container } from "./layout/container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
    <Section>
      <Container>
        <Card>
          <CardContent className="p-12">
            <CardHeader className="p-0 mb-4 text-center">
              <LucideMail className="size-10 md:size-14 text-primary mx-auto" />
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
                {subscribed ? <LucideCheck className="h-4 w-4" /> : "Subscribe"}
              </Button>
            </div>
            {subscribed && (
              <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
                ✓ Successfully subscribed!
              </div>
            )}
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
