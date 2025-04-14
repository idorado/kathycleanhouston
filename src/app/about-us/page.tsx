import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center text-accent mb-2">About Us</h1>
      <p className="text-center text-lg text-muted mb-8">
        What began with one woman’s vision in Colorado<br />
        is now a mission to create spaces where people thrive, helping families reclaim time for what really matters.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        <div className="space-y-6">
          <p>
            Kathy Clean started over ten years ago in Castle Rock, Colorado, founded by Kathy; whose name still represents everything we stand for. We never had the chance to meet her, but those who did speak highly of her values: a commitment to service and the belief that a cleaning company is only as good as the people doing the work. We still live by that principle today.
          </p>
          <p>
            Later, Jessica and Carl took over and expanded the company into the commercial space. Under their leadership, Kathy Clean began servicing some of the most well-known brands in the U.S., including Starbucks, Whole Foods, IKEA, PetSmart, and many others you probably know. The company moved to Centennial to better serve the Denver area, while staying true to its roots: find the best people and always stand behind the work.
          </p>
          <p>
            During that time, they also acquired C-thru Window Washing, a respected local company known for delivering the best window cleaning service in the area. The same trusted team that has served customers for over a decade continues to provide that same impeccable service; now under the Kathy Clean name.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomNUQbUO28Qqho34HzWAgdjRlcDPJntsL1f2TI" alt="Kathy Clean logo" width={180} height={90} className="mb-2 rounded" />
          <div className="text-center text-sm text-muted">Professional Cleaning Services</div>
          <div className="mt-8 flex flex-col items-center">
            <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomUpJdm8uxbLyY5TVln2vGePNI6BEHMuo4rXcz" alt="C-thru logo" width={180} height={90} className="rounded" />
            <div className="text-center text-sm text-muted mt-1">Cleaning Services</div>
          </div>
        </div>
      </div>
      <div className="space-y-6 mb-8">
        <p>
          Recently, we entered a new chapter. Jessica and Carl decided to move on, and a new team took the baton. More committed than ever to delivering high-quality service and being the easiest company to work with. We stay true to our principles. If something’s not right, we fix it. Not next time, but now. We believe in close communication and clear expectations. Technology should make things easier, not replace the human connection.
        </p>
        <div className="bg-[color:var(--blue-ribbon-light)] border-l-4 border-[color:var(--blue-ribbon)] px-6 py-4 rounded shadow-sm text-accent italic">
          <div className="font-bold mb-2">But most important of all:</div>
          <ul className="list-disc pl-6 space-y-1">
            <li>We don’t see cleaning as “just cleaning.”</li>
            <li>We believe it’s the foundation for everything else.</li>
            <li>A clean home runs better. A clean workplace performs better. A clean store sells more.</li>
            <li>Clean spaces help people shine—families, employees, and customers.</li>
          </ul>
        </div>
        <p>
          What started in Colorado is now reaching more homes and businesses across the country. Today, we proudly serve clients not only in Colorado, but also in Georgia, New Mexico, Florida, and Texas.
        </p>
        <p>
          That’s why we exist. Not just to clean, but to create environments where people thrive.
        </p>
        <p>
          Kathy Clean started with one woman and a mission. Today, we carry that mission forward; serving you with pride, purpose, and the belief that clean spaces create better lives.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <img src="https://r2kd0cre8z.ufs.sh/f/4fYOWO5dAlomaYo5lyrN0W8yorQH6lnDudV4OjgIFLEC2YpM" alt="Kathy Clean logo large" width={200} height={100} className="rounded" />
      </div>
    </section>
  );
}
