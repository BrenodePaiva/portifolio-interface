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
        
        <motion.li>
            <BoxProject>
                <Skeleton variant="rectangular" animation="wave" width={300} height={191}/>
                <TextProjetc>
                <Skeleton variant="text" animation="wave" width={130} sx={{fontSize: '28px'}} />
                <div>
                <Skeleton variant="text" animation="wave" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" animation="wave" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" animation="wave" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" animation="wave" width={280} sx={{fontSize: '16px'}} />
                <Skeleton variant="text" animation="wave" width={280} sx={{fontSize: '16px'}} />
                </div>
                
                <div style={{margin: '10px 0px'}}>
                    <Skeleton variant="text" animation="wave" width={100} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" animation="wave" width={230} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" animation="wave" width={230} sx={{fontSize: '16px'}}/>
                    <Skeleton variant="text" animation="wave" width={230} sx={{fontSize: '16px'}}/>
                </div>

                <ButtonContent>
                <Skeleton variant="rounded" animation="wave" width={166} height={36}/>
                </ButtonContent>
                </TextProjetc>
            </BoxProject>
        </motion.li>
                    
                          
    )
}

export default SkeletonProject