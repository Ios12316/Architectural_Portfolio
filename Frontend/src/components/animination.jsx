
import { motion } from "framer-motion";



export default function Animation({ children }) {
    return (
        <motion.div initial={{ opacity: 0, y: 60}} whileInView={{opacity: 1, y: 0}} transition={{ duration: 0.8, ease: "easeOut"}} viewport={{once: true, amount: 0.1}}>
            {children}
        </motion.div>
    )
}