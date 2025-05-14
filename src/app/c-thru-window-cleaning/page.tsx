import { redirect } from 'next/navigation';

export default function CThruWindowCleaning() {
  // Redirigir a la nueva ruta para Denver
  redirect('/window-cleaning-denver');
  
  // Este return nunca se ejecutará debido a la redirección
  return null;
}
