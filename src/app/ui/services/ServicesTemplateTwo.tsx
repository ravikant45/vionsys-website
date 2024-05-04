import exp from '/public/assets/services/exp.jpg';
import inno from '/public/assets/services/inno.jpg';
import supp from '/public/assets/services/supp.jpg';
import Image from 'next/image';
import Link from 'next/link';

import { Feature } from './data/CloudComputingServicesData';
import { Button } from '@/components/ui/button';

const ServicesTemplateTwo = ({ data }: { data: any }) => {
  return (
    <main className=''>
      {/* hero section */}
      <section>
        <div data-aos='fade-up' className="flex h-screen justify-center items-center dark:bg-slate-800">
          <div className="mx-auto flex justify-center px-4 sm:mt-6 sm:px-4 md:mt-4 lg:mt-2 lg:px-8">
            <div className="text-center ">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  <span className="mb-1 block">{data?.line1}</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                    {data?.line2}
                  </span>
                </span>
                <div className="mt-2">
                  With the help of
                  <span className="relative mt-3 whitespace-nowrap text-blue-600">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
                      preserveAspectRatio="none"
                    >
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                    </svg>
                    <span className="relative"> Vionsys.</span>
                  </span>
                </div>
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-paragraph dark:text-slate-400 sm:mt-6 md:mt-8">
                {data?.para}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <Button className="shadow">
                  <Link
                    className=""
                    href={"/contact"}
                  >
                    Connect With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* the services section */}
      <section className="container space-y-3 bg-slate-100 py-4 mx-auto md:py-6 lg:py-12">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center">
          <h2 data-aos='fade-left' className="text-MainHeading font-extrabold">
            Our Features
          </h2>
          <p data-aos='fade-right' className="text-SubHeading font-bold">
            Discover the amazing features offered by us to enhance your online
            presence.
          </p>
        </div>
        <div data-aos='zoom-out' className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {data?.features?.map((feat: Feature) => {
            return (
              <div
                key={feat?.id}
                className="relative hover:cursor-pointer hover:scale-105 transition-all overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feat.icon size={30} />
                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl">{feat?.title}</h3>
                    <p className="text-md text-muted-foreground">
                      {feat?.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* why choose us section */}
      <section>
        <div className="flex flex-col justify-center items-center font-bold md:py-5">
          <h1 data-aos='fade-right' className="text-MainHeading font-extrabold">Why Choose Us</h1>
          <p data-aos='fade-left' className="max-w-[50rem] text-SubHeading font-bold text-center">
            Understanding the importance of selecting the right development partner for your business, we present why we're the ideal choice for your development needs.
          </p>
        </div>

        {/* the static section for the why choose us  */}

        <section className='z-0 bg-transparent'>
          {/* First section */}
          <div className='w-[100vw] px-2 grid md:grid-cols-2 gap-4 grid-cols-1 py-2'>
            {/* left side */}
            <div data-aos="fade-left" className='flex flex-col justify-center  gap-2'>
              <h1 className='text-2xl text-black font-bold'>Expertise</h1>
              <p className='text-paragraph'>Our team brings years of collective experience in software
                development across various industries. From startups to
                enterprises.</p>
            </div>

            {/* right side */}
            <div className='flex justify-center items-center'>
              <Image
                src={exp}
                className="rounded-2xl"
                alt="support_image"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Second section */}
          <div className='w-[100vw] px-2 grid md:grid-cols-2 gap-4 grid-cols-1 py-2'>

            {/* left side */}
            <Image
              src={inno}
              className="rounded-2xl"
              alt="support_image"
              width={400}
              height={400}
            />
            <div data-aos="fade-right" className='flex justify-center items-center'>
              {/* right side */}
              <div className='flex flex-col justify-center  gap-2'>
                <h1 className='text-2xl text-black font-bold'>Innovation</h1>
                <p className='text-paragraph'>we constantly update our skills and stay abreast of the latest
                  trends and technologies in software development.</p>
              </div>
            </div>
          </div>

          {/* third section */}
          <div className='w-[100vw] px-2 grid md:grid-cols-2 gap-4 grid-cols-1 py-2'>
            {/* left side */}
            <div data-aos="fade-left" className='flex flex-col justify-center  gap-2'>
              <h1 className='text-2xl text-black font-bold'>On-Time Support</h1>
              <p className='text-paragraph'>Our agile development methodology allows us to adapt to changing
                requirements and deliver incremental updates regularly.</p>
            </div>

            {/* right side */}
            <div className='flex justify-center items-center'>
              <Image
                src={supp}
                className="rounded-2xl"
                alt="support_image"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ServicesTemplateTwo;
