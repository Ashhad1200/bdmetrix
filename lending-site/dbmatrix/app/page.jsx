import { redirect } from 'next/navigation';

// Root page - redirects to home-one layout
export default function RootPage() {
  // Redirect to the main home page
  redirect('/home-one');
}

// Optional: You can also export metadata
export const metadata = {
  title: 'DBMatrix - IT Services & Solutions',
  description: 'Professional IT services and digital solutions',
};
