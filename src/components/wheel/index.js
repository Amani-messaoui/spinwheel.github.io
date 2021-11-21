import React from 'react'
import './index.css';
import { useState , useRef, useCallback, useEffect} from 'react';
import 'antd/dist/antd.css';
import ModalWheel from './ModalWheel';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}
function getAnimationSettings(angle, originX) {
  return {
    particleCount: 3,
    angle,
    spread: 55,
    origin: { x: originX },
    colors: ["#000", "#fffff"]
  };
}
function Index(props) {
    const [selectedItem, setSelectedItem] =  useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);  
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState(); 

const getInstance = useCallback((instance) => {
  refAnimationInstance.current = instance;
}, []);

const nextTickAnimation = useCallback(() => {
  if (refAnimationInstance.current) {
    refAnimationInstance.current(getAnimationSettings(60, 0));
    refAnimationInstance.current(getAnimationSettings(120, 1));
  }
}, []);

const startAnimation = useCallback(() => {
  if (!intervalId) {
    setIntervalId(setInterval(nextTickAnimation, 16));
  }
}, [nextTickAnimation, intervalId]);

const pauseAnimation = useCallback(() => {
  clearInterval(intervalId);
  setIntervalId(null);
}, [intervalId]);

const showModal = () => {
  setIsModalVisible(true);
  startAnimation()
};
useEffect(() => {
  return () => {
    clearInterval(intervalId);
  };
}, [intervalId]);

    const  selectItem = () => {
        if ( selectedItem === null) {
          const selectedItem = Math.floor(Math.random() * props.items.length) + 1;
          setSelectedItem(selectedItem);
        }
         else {
             if(selectedItem){
                setSelectedItem(null) ;
                setTimeout( Math.floor(Math.random() * props.items.length) + 1);
           
             }
        }
        setTimeout(()=>{
          showModal()
        }, 9000)  
      }
     
      const wheelVars = {
        '--nb-item': props.items.length  ,
        '--selected-item': selectedItem - 1,
      };
      const spinning = selectedItem !== null ? 'spinning' : '';
      const itemobject =selectedItem && props.items && props.items.filter(e=> e.name === selectedItem)
      console.log("props.items", props.items)

      console.log("itemobject", itemobject)
    return (
                 <div className="wheel-container">
        <div style={wheelVars} className={`wheel ${spinning}`} onClick={selectItem}  >
          {props.items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item.name}   
            </div>
          ))}
       
        </div>
        {itemobject ? 
        <div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
       <ModalWheel
      pauseAnimation={pauseAnimation}
       setIsModalVisible={setIsModalVisible}
       isModalVisible={isModalVisible}
       itemobject={itemobject}/> 
            </div>
        : null}
   
      </div>
       
    )
}

export default Index
