export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="p-4">{children}</main>
    </div>
  );
}
