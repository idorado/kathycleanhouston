import React from "react";
import { Button } from "@/components/ui/button";

export default function ReadyForCleanerWorkspaceSection() {
  return (
    <section className="flex justify-center items-center py-12">
      <div className="bg-[#1b2650] rounded-3xl px-8 py-12 max-w-3xl w-full text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight" style={{fontFamily: 'Quicksand, Arial, sans-serif'}}>
          Ready For a Cleaner, Safer Workspace?
        </h2>
        <p className="text-white text-base md:text-lg mb-8">
          Our Denver-based team provides reliable, high-quality commercial cleaning services tailored to your business needs. We keep your space clean, safe, and presentable, so you can focus on running your business.
        </p>
        <Button size="lg" className="font-bold mt-2">
          REQUEST A SERVICE
        </Button>
      </div>
    </section>
  );
}
