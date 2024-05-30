import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import styles from '@/styles/Stillonthefence.module.css'


const Stillonthefence = (props) => {

return (

 <>    
{props.col6 ? 
<Col md={6}>
   <div className={styles[props.classnumber]}>
        <h3 className="font20 fw700 text-white font-f" dangerouslySetInnerHTML={{__html: props.title}}/>
        <p className={` ${styles.stilltext} color-white font15  font-f`} dangerouslySetInnerHTML={{__html : props.text}}/>
        <p className={` ${styles.stilltext} color-white font15  font-f`} dangerouslySetInnerHTML={{__html : props.text2}}/>
      
   </div>
</Col>
: 
<Col md={4}>
   <div  className={styles[props.classnumber]}>
        <h3 className="font30 fw500 color-white font-f t-center" dangerouslySetInnerHTML={{__html : props.title}}/>
        <p className={` ${styles.stilltext} color-white font15 fw100 font-f t-center`} dangerouslySetInnerHTML={{__html : props.text}}/>
      
   </div>
</Col>
}
</>
  )
}

export default Stillonthefence