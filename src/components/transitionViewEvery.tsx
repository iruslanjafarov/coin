import type { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

interface ITransitionViewEvery {
	children: ReactNode;
	index: number;
}

const TransitionViewEvery: FC<ITransitionViewEvery> = ({ children, index }) => {
	return (
		<motion.div
			custom={index}
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={{
				hidden: { opacity: 0, y: 10 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.3, ease: 'easeOut', delay: index * 0.1 },
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default TransitionViewEvery;
