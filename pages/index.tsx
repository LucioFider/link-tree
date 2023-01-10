import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="">
      <div className="md:w-1/2 h-full flex flex-col items-center mx-auto mt-16 p-10 justify-center">
        <Image
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />
        <h1 className="font-semibold text-gray-200 mt-4 text-xl">
          {data.name}
        </h1>
        <p className="text-sm font-extralight mb-8 text-gray-300">
          {data.desc}
        </p>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

function LinkCard({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="flex items-center w-full p-4 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-300 mb-3"
    >
      <div className="flex flex-col text-center w-full">
        <h2 className="text-gray-500 text-lg text-center"> {title}</h2>
      </div>
    </a>
  );
}
