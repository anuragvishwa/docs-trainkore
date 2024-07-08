import Image from "next/image";
import TargetImage from "@/public/images/Prompt Without.png";

export default function RouteCard() {
  return (
    <section className="relative mb-0 before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="max-w-full md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-features-home]"
              style={{
                border: "45px solid",
                borderRadius: "8px",
                borderColor: "transparent",
                borderImage:
                  "linear-gradient(to bottom right, #FFD8B3, #FFB37C) 1",
                borderBottom: "none",
                borderRight: "none",
                borderTopLeftRadius: "10px",
              }}
            >
              <div className="relative inline-flex rounded-md overflow-hidden">
                <Image
                  className="w-full h-auto rounded-md"
                  src={TargetImage}
                  width={600}
                  height={520}
                  alt="Features illustration"
                  layout="responsive"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="max-w-xl text-center md:text-left md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
              data-aos-anchor="[data-aos-id-features-home]"
            >
              <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="mx-auto max-w-3xl pb-6">
                  <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
                    Build and deploy effective prompts
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-4">
                  Get insights from 40+ metrics and debug with detailed logs and
                  traces.
                </p>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start mt-8">
                  <div>
                    <div className="text-gray-700 font-medium">
                      <a
                        className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Observability Suite
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
