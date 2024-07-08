import Image from "next/image";
import TargetImage from "@/public/images/new ss.png";

export default function Feedback() {
  return (
    // <section className="mb-12 relative before:absolute before:inset-0 before:-z-20">
    //   <div className="mx-auto max-w-6xl px-4 sm:px-6">
    //     <div className="">
    //       <div className="md:grid md:grid-cols-12 md:gap-6 items-center py-12 md:py-20">
    //         <div
    //           className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
    //           data-aos="fade-up"
    //           data-aos-anchor="[data-aos-id-features-home]"
    //         >
    //           <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
    //             <Image
    //               className="md:max-w-none rounded-md"
    //               src={TargetImage}
    //               width={600}
    //               height={520}
    //               alt="Features illustration"
    //             />
    //           </div>
    //         </div>

    //         {/* Content */}
    //         <div
    //           className="text-center lg:text-left max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
    //           data-aos="fade-right"
    //           data-aos-anchor="[data-aos-id-features-home]"
    //         >
    //           <div className="md:pr-4 lg:pr-12 xl:pr-16">
    //             <div className="mx-auto max-w-3xl pb-6">
    //               <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
    //                 Evaluate outputs with AI and human feedback
    //               </h2>
    //             </div>
    //             <p className="text-xl text-gray-900 mb-4">
    //               Collect and track feedback from users. Setup tests to auto
    //               judge outputs and find what's not working — in realtime
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative mb-0 before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
            {/* Image */}
            <div
              className="max-w-full md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rounded-md"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-features-home]"
              style={{
                borderRadius: "8px",
                border: "65px solid transparent",
                borderImage:
                  "linear-gradient(to bottom right, rgba(0, 153, 255, 0.4), rgba(0, 102, 204, 0.4)) 0.5",
              }}
            >
              <div className="relative inline-flex overflow-hidden">
                <Image
                  className="w-full h-[520px] object-cover rounded-md"
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
                    Evaluate outputs with AI and human feedback
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-4">
                  Collect and track feedback from users. Setup tests to auto
                  judge outputs and find what's not working — in realtime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
