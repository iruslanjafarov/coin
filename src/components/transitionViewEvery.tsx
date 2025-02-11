import type { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

interface ITransitionViewEvery {
	children: ReactNode;
	index: number;
}

/**
 * A motion component that animates its children with a fade and slide effect.
 * The animation applies a delay based on the index of the item to create staggered effects.
 *
 * @param {ITransitionViewEvery} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child elements to be animated.
 * @param {number} props.index - The index used to control the delay of the animation.
 * @returns {JSX.Element} The animated container that wraps the children.
 */

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
