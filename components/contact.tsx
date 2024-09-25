"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [botField, setBotField] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (botField) {
      return;
    }
  };

  return (
    <section
      id="contact"
      className="bg-header bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <div id="contact" className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-6">
            Kontakt
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg">
              <span className="font-bold">Telefonnummer: </span>
              <a
                href="tel:+1234567890"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                +49 176 1111 111
              </a>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg"
          >
            <input
              type="text"
              id="honeypot"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="E-Mail"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Nachricht"
                className="w-full"
              />
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-green-800 hover:bg-green-700">
                Senden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
