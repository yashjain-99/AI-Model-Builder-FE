import { Bell, ChevronDown, Heart } from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-8">
      <div className="flex gap-4">
        <div className="relative p-3 border rounded-full">
          <Bell className="w-5 h-5 aspect-square" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
            2
          </div>
        </div>
        <div className="p-3 border rounded-full">
          <Heart className="w-5 h-5 aspect-square" />
        </div>
      </div>
      <div className="flex items-center gap-2 border-l-2 px-8">
        <div className="w-10 h-10 rounded-full bg-slate-500" />
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-semibold">Neurotic Spy</span>
            <span className="font-extralight text-slate-400">
              neurotic@taildo.com
            </span>
          </div>
          <ChevronDown className="text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Social;
