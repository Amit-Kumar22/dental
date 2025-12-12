import BuyingGuideHeader from "../components/BuyingGuideHeader";

export default function BuyingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BuyingGuideHeader />
      {children}
    </>
  );
}