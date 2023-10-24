import Header from "@/components/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
