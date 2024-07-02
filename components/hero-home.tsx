import PageIllustration from "@/components/page-illustration";
import BusinessCategories from "./business-categories";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="xl:grid xl:grid-cols-2 md:gap-6 xl:pt-32">
          <div className="pt-32 xl:pt-20">
            <div className="text-center">
              <h1
                className="text-center xl:text-left mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl leading"
                style={{ letterSpacing: "0.025em" }}
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                Develop AI features with confidence
              </h1>

              <div className="mx-auto max-w-3xl text-center xl:text-left">
                <ul
                  className="mb-8 text-lg text-gray-700 list-none xl:list-disc pl-5"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  <li className="pb-1">Observability, Metrics, Evals</li>

                  <li className="pb-1">
                    Prompt Management, Testing, Prompt Playground
                  </li>

                  <li>Datasets, LLM Evaluations</li>
                </ul>

                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                  <div
                    // className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="#0"
                    >
                      <span className="relative inline-flex items-center">
                        Start Free Trial
                        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </a>
                    <a
                      className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                      href="#0"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12 pb-20 pt-16 xl:pt-8">
            <BusinessCategories />
          </div>
        </div>
        <div
          className="mx-auto max-w-3xl pb-16"
          data-aos="zoom-y-out"
          data-aos-delay={600}
        >
          <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
            <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
              <span className="text-[13px] font-medium text-white">
                cruip.com
              </span>
            </div>
            <div className="font-mono text-gray-500 [&_span]:opacity-0">
              <span className="animate-[code-1_10s_infinite] text-gray-200">
                4 hrs to set up emails
              </span>{" "}
              <span className="animate-[code-2_10s_infinite]">
                + 6 hrs designing a landing page
              </span>
              <br />
              <span className="animate-[code-3_10s_infinite]">
                + 4 hrs to handle Stripe webhooks
              </span>{" "}
              <span className="animate-[code-4_10s_infinite]">
                + 2 hrs for SEO tags
              </span>
              <br />
              <br />
              <span className="animate-[code-5_10s_infinite] text-gray-200">
                + 1 hr applying for Google Oauth
              </span>
              <br />
              <span className="animate-[code-6_10s_infinite]">
                + ∞ hrs overthinking...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
