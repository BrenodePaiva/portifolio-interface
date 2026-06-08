import { motion } from 'framer-motion'
import { fadeIn } from '../../services/framerMotion'
import {
  BoxProject,
  ButtonContent,
  TextProjetc
} from './styled'
import { Skeleton } from '@mui/material'

function SkeletonProject() {
    return (
        
        <motion.li
            variants={fadeIn('right', 0.5, 0)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
        >
            <BoxProject>
                <Skeleton variant="rectangular" width={300} height={191}/>
                <TextProjetc>
                <Skeleton variant="text" width={130} sx={{fontSize: '28px'}} />
                <div>
                <Skeleton variant="text" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" width={280} sx={{fontSize: '16px'}} />
                </div>
                
                <div style={{margin: '10px 0px'}}>
                    <Skeleton variant="text" width={100} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" width={230} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" width={230} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" width={230} sx={{fontSize: '16px'}}/>
                </div>

                <ButtonContent>
                <Skeleton variant="rounded" width={166} height={36}/>
                </ButtonContent>
                </TextProjetc>
            </BoxProject>
        </motion.li>
                    
                          
    )
}

export default SkeletonProject