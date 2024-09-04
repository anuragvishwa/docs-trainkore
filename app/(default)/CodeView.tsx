// import Image from "next/image";
// import PageIllustration from "@/components/page-illustration";
// import Avatar01 from "@/public/images/avatar-01.jpg";
// import Avatar02 from "@/public/images/avatar-02.jpg";
// import Avatar03 from "@/public/images/avatar-03.jpg";
// import Avatar04 from "@/public/images/avatar-04.jpg";
// import Avatar05 from "@/public/images/avatar-05.jpg";
// import Avatar06 from "@/public/images/avatar-06.jpg";
// import traincoreImage from "@/public/images/Dashboard Cache Page SS.png";
// import BusinessCategories from "./CodeTabs";

// export default function CodeView() {
//   return (
//     <section className="relative">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="md:grid md:grid-cols-2 md:gap-6 items-center h-screen">
//           <div className="pb-12 md:pb-20">
//             <div className="pb-12 text-center md:pb-16">
//               <h1
//                 className="text-center lg:text-left mb-6 text-5xl font-bold md:text-5xl leading"
//                 data-aos="zoom-y-out"
//                 data-aos-delay={150}
//               >
//                 Integrate in a minute
//               </h1>

//               <div className="mx-auto max-w-3xl text-center lg:text-left">
//                 <ul
//                   className="mb-8 text-lg text-gray-700"
//                   data-aos="zoom-y-out"
//                   data-aos-delay={300}
//                 >
//                   Works with OpenAI and other AI providers out of the box.
//                   Natively integrated with Langchain, LlamaIndex and more.
//                 </ul>

//                 <div className="flex items-start justify-center lg:justify-start mt-8">
//                   <div>
//                     <div className="text-gray-700 font-medium">
//                       <a
//                         className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out"
//                         href="#0"
//                       >
//                         View Integration Docs
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="pb-12 md:pb-20">
//             <BusinessCategories />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import TargetImage from "@/public/images/Prompt Without.png";
import CodeTabs from "./CodeTabs";
export default function CodeView() {
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
              <div className="relative lg:inline-flex rounded-full before:absolute before:inset-0  before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.00),transparent)]">
                <CodeTabs />
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
                    Integrate in a minute
                  </h2>
                </div>
                <p className="text-xl text-gray-900 mb-4">
                  Works with OpenAI and other AI providers out of the box.
                  Natively integrated with Langchain, LlamaIndex and more.
                </p>

                <div className="flex items-start justify-center lg:justify-start mt-8">
                  <div>
                    <div className="text-gray-700 font-medium">
                      {/* <a
                        className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        View Integration Docs
                      </a> */}
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
