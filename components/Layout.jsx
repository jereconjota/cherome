import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </>
  );
}