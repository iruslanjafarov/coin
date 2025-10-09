import type { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

interface ITransitionViewEvery {
	children: ReactNode;
	index: number;
}

/**
 * Компонент анимации, который плавно отображает детей с эффектом затухания и смещения.
 * Задержка анимации рассчитывается на основе индекса, создавая эффект поочередного появления.
 *
 * @param props - Свойства компонента.
 * @param props.children - Дочерние элементы, которые будут анимированы.
 * @param props.index - Индекс, определяющий задержку анимации.
 * @returns Обёртка с анимацией, содержащая дочерние элементы.
 */

export const TransitionViewEvery: FC<ITransitionViewEvery> = ({ children, index }) => {
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
