"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type React from 'react';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

const CtaButtonWrapper = ({ href, children, className, onClick, id }: CtaButtonProps) => {
  const params = useSearchParams();
  const query = Object.fromEntries(params.entries());
  return (
    <Link
      href={{
        pathname: href,
        query: query,
      }}
      className={cn(
        className
      )}
      onClick={onClick}
      id={id}
    >
      {children}
    </Link>
  )
}

export const CtaButton = ({ href, children, className, onClick, id }: CtaButtonProps) => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
      <CtaButtonWrapper href={href} className={className} onClick={onClick} id={id}>
        {children}
      </CtaButtonWrapper>
    </Suspense>
  );
};
