import LevelOptions from "../levelOptions";
import './Character.scss'
import { useState, useEffect } from 'react';

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return rect.left + window.scrollX
}

function detectGroundBlockRange(characterPos, characterWidth) {
  let groundBlocks = document.getElementsByClassName('groundBlock');
  let isInGroundBlockRange = false;

  for (let i = 0; i < groundBlocks.length; i++) {
    let groundBlock = groundBlocks[i];
    
    let groundBlockStart = getOffset(groundBlock);
    let groundBlockEnd = groundBlockStart + groundBlock.offsetWidth;

    if (characterPos + characterWidth >= groundBlockStart && characterPos <= groundBlockEnd) {
      isInGroundBlockRange = true;
      break;
    }
  }
  return isInGroundBlockRange
}

function detectLevel(characterPos) {
  let levelArray = document.getElementsByClassName('level');
  let levels = document.getElementsByClassName('levels')[0]
  let currentLevel = ''
  let charY = 0
    
  for (let i = 0; i < levelArray.length; i++) {
    let level = levelArray[i];

    const levelStart = getOffset(level);
    const levelEnd = levelStart + level.offsetWidth;

    
    if (characterPos >= levelStart && characterPos <= levelEnd) {
      currentLevel = `${level.classList.item(1)}`

      if (LevelOptions[currentLevel].height < 100) {
        levels.scrollTop = 0
        charY = 100 - LevelOptions[currentLevel].height
        
      } else {
        levels.scrollTop = level.scrollHeight
        charY = 150 - LevelOptions[currentLevel].height
      }
      break;
    }

    
  }
  return charY
}

const Character = ( ) => {
    const [movedUp, setMovedUp] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const [level, setLevel] = useState('level1')
    

    useEffect(() => {
      console.log('initial')
      setTimeout(() => {
        let character = document.getElementsByClassName('character')[0];
        let characterPos = getOffset(character)
        setLevel(detectLevel(characterPos))
      }, 30);
    }, [])

    useEffect(() => {
      const handleScroll = () => {
        let character = document.getElementsByClassName('character')[0];
        let characterPos = getOffset(character);
        // LEVEL DEFINITION
        
        setLevel(detectLevel(characterPos))

        // JUMPING OVER BLOCKS

        if (isAnimating) return;
    
        if (detectGroundBlockRange(characterPos, character.offsetWidth)) {
          setMovedUp(true);
          setIsAnimating(true);
          setTimeout(() => {
            setIsAnimating(false);
            if (!detectGroundBlockRange(characterPos, character.offsetWidth)) setMovedUp(false);
          }, 250); 
        } else {
          setMovedUp(false);
        }
      };

      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    });

    return (
        <div  class={`character ${movedUp ? 'movedUp' : ''}`} 
              style={{'bottom' : `${level}vh`}}
        >
        
        </div>
    )
}

export default Character;