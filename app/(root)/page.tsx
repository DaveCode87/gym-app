import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="h-screen relative bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url('/media/work-in-progress-2.png')` }}>
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex items-center h-full mx-auto p-4">
        {/* Contenuto aggiuntivo al centro */}
      </div>
    </div>
  );
};

export default SetupPage;
