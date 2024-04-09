import LightDarkToggle from "@/components/ui/LightDarkToggle";

type Props = {
  children?: React.ReactNode;
};

export default function loggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  );
}
