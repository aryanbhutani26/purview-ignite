import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { LogoMarquee } from "../ui/LogoMarquee";

const clientLogos = [
  { src: "https://purviewtech.ai/assets/allied_vehicles-DtIap-iZ.png", alt: "Allied Vehicles" },
  { src: "https://purviewtech.ai/assets/meil-CBKSYvU_.png", alt: "MEIL" },
  { src: "https://purviewtech.ai/assets/ambj-dq1jSbZn.jpg", alt: "AMBJ" },
  { src: "https://purviewtech.ai/assets/bay-CW7x1iRR.jpg", alt: "Bay" },
  { src: "https://purviewtech.ai/assets/jpmorgan-CvV4-N1l.jpg", alt: "JPMorgan" },
  { src: "https://purviewtech.ai/assets/tata-eBm3sJvc.jpg", alt: "Tata" },
  { src: "https://purviewtech.ai/assets/ecomG-Bb9THz7o.jpg", alt: "EcomG" },
  { src: "https://purviewtech.ai/assets/engie2-Dqbz_618.jpg", alt: "Engie" },
  { src: "https://purviewtech.ai/assets/pdc-Ds1hrJyd.png", alt: "PDC" },
  { src: "https://purviewtech.ai/assets/Direx-CtkTu6Sy.png", alt: "Direx" },
  { src: "https://purviewtech.ai/assets/bidairlogo-id7cxNTN.png", alt: "BidAir" },
  { src: "https://purviewtech.ai/assets/bidwest-DHRYnUGa.png", alt: "Bidwest" },
  { src: "https://purviewtech.ai/assets/Agili8-B764EMmT.png", alt: "Agili8" },
];

const partnerLogos = [
  { src: "https://purviewtech.ai/assets/informatica_logo-BEe5oiWO.png", alt: "Informatica" },
  { src: "https://purviewtech.ai/assets/cisco_logo-C2Ui41UB.jpg", alt: "Cisco" },
  { src: "https://purviewtech.ai/assets/appian_logo-CEHs2rKI.png", alt: "Appian" },
  { src: "https://purviewtech.ai/assets/anywhere_logo-vAfgFYSX.png", alt: "Anywhere" },
  { src: "https://purviewtech.ai/assets/UI_path-FFiKS3BQ.jpg", alt: "UiPath" },
  { src: "https://purviewtech.ai/assets/SAP_2-57DhuMoz.png", alt: "SAP" },
  { src: "https://purviewtech.ai/assets/sales-DhonYUZW.png", alt: "Salesforce" },
  { src: "https://purviewtech.ai/assets/power_bi-BvuH4lCZ.png", alt: "Power BI" },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <FadeInText>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                TRUSTED BY
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                Our <span className="text-gradient">Clients</span>
              </h2>
            </FadeInText>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LogoMarquee logos={clientLogos} speed={35} />
          </motion.div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-8 sm:mb-12">
            <FadeInText>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                MSDUK CERTIFIED
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2">
                Certified Diversity-Owned Technology Company
              </h2>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
                Premier member of MSDUK - Technology Partners
              </p>
            </FadeInText>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoMarquee logos={partnerLogos} speed={40} reverse />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
