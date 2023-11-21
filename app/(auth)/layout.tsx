export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white relative flex items-center justify-center h-[85vh] w-full">
      <div className="absolute sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      {children}
    </div>
  );
};

