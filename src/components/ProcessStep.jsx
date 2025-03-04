import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProcessLeft from './processLeft';
import ProcessRight from './processRight';

export default function ProcessStep({ 
    header, 
    stepImage, 
    stepAlt, 
    lineImage, 
    lineAlt, 
    linePositionX, 
    linePositionY, 
    lineWidth,
    direction = 'left',
    hoverDescription
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return (
        <div ref={ref} className="my-16">
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="content-container"
            >
                {direction === 'left' ? (
                    <ProcessLeft 
                        header={header}
                        stepImage={stepImage}
                        stepAlt={stepAlt}
                        lineImage={lineImage || ``}
                        lineAlt={lineAlt || ``}
                        linePositionX={linePositionX}
                        linePositionY={linePositionY}
                        lineWidth={lineWidth}
                        hoverDescription={hoverDescription}
                    />
                ) : (
                    <ProcessRight 
                        header={header}
                        stepImage={stepImage}
                        stepAlt={stepAlt}
                        lineImage={lineImage || ``}
                        lineAlt={lineAlt || ``}
                        linePositionX={linePositionX}
                        linePositionY={linePositionY}
                        lineWidth={lineWidth}
                        hoverDescription={hoverDescription}
                    />
                )}
            </motion.div>
        </div>
    );
}
