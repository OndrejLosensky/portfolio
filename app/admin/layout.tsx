export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
