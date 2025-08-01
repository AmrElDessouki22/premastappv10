import '../globals.css';

export const metadata = {
  title: 'Premastes | Professional Presentation Templates',
  description: 'Professional Presentation Templates at Your Fingertips',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
