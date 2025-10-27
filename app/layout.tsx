export const metadata = {
  title: 'Agentic App',
  description: 'Deployed via autonomous assistant'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial',margin:0}}>
        {children}
      </body>
    </html>
  );
}
