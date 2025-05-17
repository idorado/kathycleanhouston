import React from "react";

export interface Industry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface IndustriesSpecializedProps {
  location?: string;
}
