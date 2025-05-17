import { Button } from "@/components/ui/button";
import Link from "next/link";
import PhoneButton from "@/components/PhoneButton";

interface CustomPhoneButtonProps {
  linkUrl: string;
  linkText: string;
}

export default function CustomPhoneButton({ linkUrl, linkText }: CustomPhoneButtonProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Button size="lg" className="w-full sm:w-auto">
        <Link href={linkUrl} className="w-full">
          {linkText}
        </Link>
      </Button>
      <div className="w-full sm:w-auto min-w-[180px] h-10">
        <PhoneButton />
      </div>
    </div>
  );
}
