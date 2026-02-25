import Image from "next/image";

interface ReviewHighlightCommercialCleaningProps {
  location?: string;
}

export default function ReviewHighlightCommercialCleaning({ location }: ReviewHighlightCommercialCleaningProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 bg-white px-4">
      <div className="flex flex-col items-center">
        <div className="relative w-[420px] h-[290px]">
          <Image
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomSeskiJfStHrxLGmPWpE9eUN53FzskB4Kfnwa"
            alt="Happy customer commercial cleaning"
            width={420}
            height={290}
            className="object-contain w-[420px] h-[290px] bg-white rounded-xl"
            priority
          />
          <div className="bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2 w-[210px] absolute right-5 bottom-5 z-20">
            <span className="text-yellow-400 text-base">★★★★★</span>
            <span className="font-semibold text-gray-900 text-sm">4.7/5</span>
            <span className="text-gray-500 text-xs ml-2">Based on Verified Customer Reviews</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            Kyle is very professional and respectful of my residence. It is a pleasure to have his service. In fact, he has cleaned my window for several years. I am completely satisfied with his work and will continue to have him clean my windows.
          </p>
          <div className="font-semibold text-gray-900 leading-tight">Shelah</div>
        </div>
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            The service is awesome — our windows are so clean, they are prompt, and they always make sure we are looking good before they leave.
          </p>
          <div className="font-semibold text-gray-900 leading-tight">Desiree McWilliams</div>
        </div>
      </div>
    </section>
  );
}
