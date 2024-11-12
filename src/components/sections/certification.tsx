import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { certifications } from "../../constants";
import { Header } from "../atoms/Header";
import { TCertification } from "../../types";
import { config } from "../../constants/config";

const CertificationCard: React.FC<{ index: number } & TCertification> = ({
  index,
  title,
  issuer,
  date,
  certificationUrl,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    
    <div className="mt-1">
      <p className="text-[20px] tracking-wider text-white">{title}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[18px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {issuer}
          </p>
          <p className="text-secondary mt-1 text-[14px]">{date}</p>
        </div>

      </div>
        <a href={certificationUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> View Certification </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[250px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.Certifications} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {certifications.map((certification, index) => (
          <CertificationCard
            key={index}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
