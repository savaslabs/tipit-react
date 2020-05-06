import React, { useContext } from 'react';
import { Title } from './Title';
import { Footer } from './Footer';
import { Dashes } from './Dashes';
import useModal from '../hooks/useModal.js'
import AppContext from './AppContext';
import styles from '../theme/appstyles.module.css';
import Modal from 'react-modal';

export const InfoModal = () => {
   const context = useContext(AppContext)
   const theme = context.theme
   const { colors } = context.useTheme()
   //const { isShowing, toggle } = useModal();

   const [modalIsOpen,setIsOpen] = React.useState(false);
   function openModal() {
     setIsOpen(true);
   }
  
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
   }
  
   function closeModal(){
     setIsOpen(false);
   }

   const customStyles = {
      content : {
        top                   : '25%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

   return (
      <div>
         <Modal 
            isOpen = {modalIsOpen}
            onAfterOpen = {afterOpenModal}
            onRequestClose = {closeModal}
            style={customStyles}
            >
            <div>
               <div className={styles.modal}>
                  <div className={styles.inputRow} style={{alignContent: 'center', justifyContent: 'space-between'}}>
                     <button className={styles.clearButton} style={{padding: 5, border: 'none', alignSelf: 'flex-start'}} onClick = {closeModal}> 
                           X
                     </button>
                     <Title style={{alignSelf: 'flex-center'}}/>
                     <div></div>
                  </div>
                  <Dashes />
                  <div className={styles.normalText}>What is this app?</div>
                  <div className={styles.normalText}>A means to enhance palindromic whimsy.</div>
                  <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: 30}}>
                     <div style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <div style = {{textAlign: 'left'}}>(c) Savas Labs 2020</div>
                        <div style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'}}>
                           <img src={require('../assets/ava-blue.png')} />
                        </div>
                        
                     </div>
                     <div style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                        <div>
                           Learn more about our #labs initiative.
                        </div>
                        <div>
                           <img src={require('../assets/labs.png')}/>
                        </div>
                     </div>
                  </div>
                  <Footer />
               </div>
            </div>  
         </Modal>
         <button style={{padding: 5, border: 'none'}} onClick = {openModal}>
            <img 
               src={(theme == 'light') ? require('../assets/info.svg') : require('../assets/info-white.png')}
               />
            </button>
      </div>
)}

export default InfoModal

// const styles = StyleSheet.create ({
//     container: {
//        padding: 10,
//     },
//     modal: {
//       flex: 1,
//       marginHorizontal: 8,
//     },
//     normalText: {
//       fontFamily: 'JetBrainsMono-Regular', 
//       fontSize: 14,
//       lineHeight: 20,
//       marginTop: 10,
//       textAlign: 'center',
//     },
//     description: {
//       fontFamily: 'JetBrainsMono-Regular', 
//       fontSize: 20,
//       lineHeight: 28,
//       marginTop: 10,
//       textAlign: 'center',
//       padding: 20,
//     },
//     clear: {
//        fontFamily: 'JetBrainsMono-Bold',
//        padding: 10,
//        fontSize: 18,
//     }
// })

