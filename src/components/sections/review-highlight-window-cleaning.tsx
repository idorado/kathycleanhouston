import Image from "next/image";

interface ReviewHighlightWindowCleaningProps {
  location?: string;
}

export default function ReviewHighlightWindowCleaning({ location }: ReviewHighlightWindowCleaningProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 bg-white px-4">
      <div className="flex flex-col items-center">
        <div className="relative w-[420px] h-[290px]">
          <Image
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlom0KAm82nznWpD8lt52ycuGbAavdFLke9Ugf7J"
            alt="Happy customer window cleaning"
            width={420}
            height={290}
            className="object-contain w-[420px] h-[290px] bg-white rounded-xl"
            priority
          />
          <div className="absolute bottom-5 right-5 bg-white rounded-lg shadow-md px-5 py-3 flex flex-col items-center gap-1 w-32 z-20">
            <span className="font-bold text-2xl">4.9/5</span>
            <span className="flex text-yellow-400 text-lg">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </span>
            <span className="text-xs text-gray-600 text-center">Based on verified customer reviews</span>
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
            The team is so awesome our window are so clean and they are prompt with their service and always make sure we are looking good before they leave.
          </p>
          <div className="font-semibold text-gray-900 leading-tight">Desiree McWilliams</div>
        </div>
      </div>
    </section>
  );
}
