import Image from "next/image";
import { Layout } from "@/components/component/layout";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 border-b">
        <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Park Hyonggi
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Graphic Designer & Illustrator
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Crafting visually stunning designs that captivate and inspire.
              </p>
            </div>
          </div>
          <img

            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            height="300"
            src="/placeholder.svg"
            width="1270"
          />
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 md:px-6">
          {[...Array(6)].map((_, i) => (
            <Link
              key={i}
              className="group relative overflow-hidden rounded-lg"
              href="#"
            >
              <img
                alt={`Project ${i + 1}`}
                className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                height="300"
                src="/placeholder.svg"
                width="400"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/70 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-white">{`Project ${
                  i + 1
                }`}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left">
          <div className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Jane Doe
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Jane Doe is a highly skilled graphic designer and illustrator
                with a passion for creating visually stunning and impactful
                designs. With over 10 years of experience, she has honed her
                craft and developed a unique style that combines modern
                aesthetics with timeless elegance.
              </p>
            </div>
            <div className="flex justify-center space-x-4 lg:justify-start">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <img
            alt="About"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </section>
    </main>
  );
}
