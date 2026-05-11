import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'

import { SkillBox, Title, SkillBar, Tooltip } from './styled'
import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

function SkillBarProgress({ title, porcent, level }) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })
  const [count, setCount] = useState(false)
  const number = porcent.replace('%', '')

  useEffect(() => {
    if (isInView) {
      setCount(true)
    }
  }, [count, isInView])

  return (
    <>
      <SkillBox>
        <Title>{title}</Title>
        <SkillBar>
          <motion.span
            className="SkillPer"
            initial={{ width: 0 }}
            whileInView={{ width: porcent }}
            transition={{ ease: 'linear', duration: 2.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tooltip ref={countRef}>
              {/* {count && (
                <CountUp
                  start={0}
                  end={number}
                  duration={2.7}
                  delay={0.2}
                  useEasing={false}
                  suffix="%"
                />
              )} */}
             
               {level}
            </Tooltip>
          </motion.span>
        </SkillBar>
      </SkillBox>
    </>
  )
}

SkillBarProgress.propTypes = {
  title: PropTypes.string,
  porcent: PropTypes.string,
  level: PropTypes.string
}

export default SkillBarProgress
