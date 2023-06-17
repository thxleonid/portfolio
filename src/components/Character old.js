import LevelOptions from "../levelOptions";
import './Character.scss'
import { useState, useEffect, useRef} from 'react';

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return rect.left + window.scrollX
}

const Character = () => {
  console.log('Draw character')
  const characterRef = useRef(null);
  const groundBlockElements = useRef([]);
  const levelElements = useRef([]);
  const levels = useRef();
  
  const [movedUp, setMovedUp] = useState(false);
  const isAnimating = useRef(false);

  const detectLevel = () => {
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;
  
    let height, currentLevel;
    for (const level of levelElements.current) {
      const levelOffset = getOffset(level);
      const levelWidth = level.offsetWidth;
  
      currentLevel = `${level.classList.item(1)}`
  
      if (characterRight >= levelOffset && characterLeft <= levelOffset + levelWidth) {
        currentLevel = `${level.classList.item(1)}`
  
        if (LevelOptions[currentLevel].height < 100) {
          levels.current.scrollTop = 0
          height = 100 - LevelOptions[currentLevel].height
          
        } else {
          levels.current.scrollTop = level.scrollHeight
          height = 150 - LevelOptions[currentLevel].height
        }
        break;
      }
    }
    characterRef.current.style.bottom = `${height}vh`
  }
  
  

  useEffect(() => {
    const positionCharacter = () => {
      //const scrollOffset = window.scrollX;
      const characterLeft = getOffset(characterRef.current);
      const characterRight = characterLeft + characterRef.current.offsetWidth;
  
      detectLevel()
  
      if (isAnimating.current) return;
  
      // Find the ground element at the current scroll offset
      let targetGroundElement;
      for (const groundBlockElement of groundBlockElements.current) {
        const groundBlockOffset = getOffset(groundBlockElement);
        const groundBlockWidth = groundBlockElement.offsetWidth;
  
        if (characterRight >= groundBlockOffset && characterLeft <= groundBlockOffset + groundBlockWidth) {
          targetGroundElement = groundBlockElement;
          break;
        }
      }
      if (targetGroundElement) {
        setMovedUp(true)
        isAnimating.current = true;
        setTimeout(() => {
          isAnimating.current = false;
        }, 250); 
      } else { 
        setMovedUp(false)
      }
    };

    setTimeout(() => {
      // Store references to the ground elements when the component mounts
      groundBlockElements.current = Array.from(document.querySelectorAll('.groundBlock'));
      levelElements.current = Array.from(document.querySelectorAll('.level'));
      levels.current = document.querySelectorAll('.levels')[0];
      
      // Position the character initially
      positionCharacter(); 
      
      // Call the positionCharacter function whenever the window is scrolled
      window.addEventListener('scroll', positionCharacter);
      }, 50);

  }, []);

  return (
      <div  ref={characterRef}
            class={`character ${movedUp ? 'movedUp' : ''}`} 
      >
      
      </div>
  )
}

export default Character;