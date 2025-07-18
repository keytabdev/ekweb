'use client';

import { usePathname } from 'next/navigation';
import HeaderWrapper from './HeaderWrapper';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Auth pages where we don't want the header
  const authPages = ['/signup', '/login', '/verify-email', '/welcome'];
  const shouldShowHeader = !authPages.some(page => pathname.startsWith(page));

  if (!shouldShowHeader) {
    return null;
  }

  return <HeaderWrapper />;
} 