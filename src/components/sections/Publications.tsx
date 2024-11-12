import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { publications } from "../../constants";
import { Header } from "../atoms/Header";
import { TPublications } from "../../types";
import { config } from "../../constants/config";

const PublicationCard: React.FC<{ index: number } & TPublications> = ({
  index,
  title,
  journal,
  date,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <div className="mt-1">
      <p className="text-[20px] font-bold text-white">{title}</p>
      <p className="text-[16px] mt-2 tracking-wider text-secondary">
        Published in: {journal}
      </p>
      <p className="text-[14px] mt-1 text-gray-400">Date: {date}</p>

      <div className="mt-5">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Publication
        </a>
      </div>
    </div>
  </motion.div>
);

const Publications = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.publications} />
      <h1 className="text-l" >{config.sections.publications.content}</h1>
      <br />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {publications.map((publications, index) => (
          <PublicationCard key={publications.title} index={index} {...publications} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
