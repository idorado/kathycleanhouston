import Image from "next/image";

interface ReviewHighlightHouseCleaningProps {
  location?: string;
}

export default function ReviewHighlightHouseCleaning({ location }: ReviewHighlightHouseCleaningProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 bg-white px-4">
      <div className="flex flex-col items-center">
        <div className="relative w-[420px] h-[290px]">
          <Image
            src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomjyyfCNAyYTp8SqzaWwGxQ39EhfU4AniVHOgs"
            alt="Happy customer house cleaning"
            width={420}
            height={290}
            className="object-contain w-[420px] h-[290px] bg-white rounded-xl"
            priority
          />
          <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center w-[220px] absolute right-5 bottom-5 z-20">
            <span className="font-bold text-2xl text-gray-900">4.8/5</span>
            <span className="text-yellow-400 text-lg mb-1">★★★★★</span>
            <span className="text-gray-500 text-xs text-center">Based on Verified Customer Reviews</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-xl">
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            The house smelled wonderfully clean and it was meticulously cleaned. I highly recommend Kathy Clean Houston if you are looking for reliable service. The cleaner showed up when scheduled and did a great job! Thanks for making my long day at work end in such a positive way.
          </p>
          <div className="font-semibold text-gray-900 leading-tight">Becky</div>
        </div>
        <div className="bg-white rounded-lg shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
          </div>
          <p className="text-gray-800 text-base mb-4">
            Kathy Clean Houston does a really nice job. It's a very reliable service. If you don't like something you tell them and they will correct it. They're really easy to work with. We really like the person who cleans for us and Beverly is delightful to work with!! My dad also uses the service and he really likes his person. I don't think you can go wrong with any of the people that work for them!
          </p>
          <div className="font-semibold text-gray-900 leading-tight">Kathy</div>
        </div>
      </div>
    </section>
  );
}
