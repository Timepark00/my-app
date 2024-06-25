import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-gray-50 py-4 px-6 md:px-8 flex items-center justify-between dark:bg-gray-50 dark:text-gray-900">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <LogInIcon className="w-8 h-8" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#id1"
              className="text-sm font-medium hover:text-gray-50/80 dark:hover:text-gray-900/80"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#FeaturedWork"
              className="text-sm font-medium hover:text-gray-50/80 dark:hover:text-gray-900/80"
              prefetch={false}
            >
              Portfolio
            </Link>
            <Link
              href="https://www.instagram.com/h.key_park_00/"
              target="_blank"
              className="text-sm font-medium hover:text-gray-50/80 dark:hover:text-gray-900/80"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="https://www.instagram.com/h.key_park_00/"
              target="_blank"
              className="text-sm font-medium hover:text-gray-50/80 dark:hover:text-gray-900/80"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="id1"
          className="bg-gray-900/10 py-12 md:py-20 dark:bg-gray-50/10"
        >
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="grid gap-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                Welcome to my Portfolio Park hyeonggi
              </h1>
              <p className="text-gray-500 text-lg dark:text-gray-400">
                Explore my latest graphic design projects and learn more about
                me.
              </p>
              <div className="flex gap-4">
                <Button>
                  <a
                    href="https://www.instagram.com/h.key_park_00/"
                    target="_blank"
                  >
                    View Portfolio
                  </a>
                </Button>
                <Button>
                  <a
                    href="https://www.instagram.com/h.key_park_00/"
                    target="_blank"
                  >
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/Background_title_cloud.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2]"
              />
              <img
                src="/Santis_Background.png"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2]"
              />
            </div>
          </div>
        </section>
        <section id="FeaturedWork" className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 grid gap-12">
            <div className="grid gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Work</h2>
              <p className="text-gray-500 text-lg dark:text-gray-400">
                Check out some of my latest graphic design projects.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="https://www.instagram.com/p/C8nql5IP9J8/?img_index=5"
                target="_blank"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <img
                  src="/Santis_Background.png"
                  alt="Project 1"
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-50/80">
                  <h3 className="text-xl font-semibold text-gray-50 dark:text-gray-900">
                    Project 1
                  </h3>
                  <p className="text-gray-50/80 text-sm dark:text-gray-900/80">
                    Illustration
                  </p>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/p/C8nql5IP9J8/?img_index=6"
                target="_blank"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <img
                  src="/ChapterCG_Ending.png"
                  alt="Project 2"
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-50/80">
                  <h3 className="text-xl font-semibold text-gray-50 dark:text-gray-900">
                    Project 2
                  </h3>
                  <p className="text-gray-50/80 text-sm dark:text-gray-900/80">
                    Background
                  </p>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/p/CQhMT-jFidH/"
                target="_blank"
                className="group relative overflow-hidden rounded-lg"
                prefetch={false}
              >
                <img
                  src="/빛의 감시자 이렐리아.jpg"
                  alt="Project 3"
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-50/80">
                  <h3 className="text-xl font-semibold text-gray-50 dark:text-gray-900">
                    Project 3
                  </h3>
                  <p className="text-gray-50/80 text-sm dark:text-gray-900/80">
                    Charactor
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-gray-900/10 py-12 md:py-20 dark:bg-gray-50/10">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="grid gap-4">
              <img
                src="/Background_title_cloud.png"
                alt="About Image"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2]"
              />
            </div>
            <div className="grid gap-6">
              <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
              <p className="text-gray-500 text-lg dark:text-gray-400">
                I am a passionate graphic designer with over 5 years of
                experience. I specialize in charactor, background and
                illustration. My goal is to give people different experiences
                with my graphic style.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-50 py-6 px-4 md:px-6 flex items-center justify-between dark:bg-gray-50 dark:text-gray-900">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <LogInIcon className="w-8 h-8" />
          </Link>
          <p className="text-sm">&copy; since 2024.06.25</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/h.key_park_00/"
            target="_blank"
            className="hover:text-gray-50/80 dark:hover:text-gray-900/80"
            prefetch={false}
          >
            <InstagramIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.instagram.com/h.key_park_00/"
            className="hover:text-gray-50/80 dark:hover:text-gray-900/80"
            prefetch={false}
          ></Link>
        </div>
      </footer>
    </div>
  );
}

function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LogInIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
