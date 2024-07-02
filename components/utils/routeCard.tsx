import Image from "next/image";
import TargetImage from "@/public/images/Prompt Without.png";
export default function RouteCard() {
  return (
    <section className="mb-0 relative before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-features-home]"
            >
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.00),transparent)]">
                <Image
                  className="md:max-w-none rounded-md"
                  src={TargetImage}
                  width={600}
                  height={520}
                  alt="Features illustration"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="max-w-xl text-center lg:text-start md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
              data-aos-anchor="[data-aos-id-features-home]"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="mx-auto max-w-3xl pb-6">
                  <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Build and deploy effective prompts
                  </h2>
                </div>
                <p className="text-xl text-gray-900 mb-4">
                  Get insights from 40+ metrics and debug with detailed logs and
                  traces.
                </p>

                <div className="flex items-start justify-center lg:justify-start mt-8">
                  <div>
                    <div className="text-gray-700 font-medium">
                      <a
                        className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Observability Suit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
