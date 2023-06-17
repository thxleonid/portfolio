import LevelOptions from "../levelOptions";
import './Character.scss'
import { useEffect, useRef} from 'react';
import idle from '../img/character/idle.png'
import walk from '../img/character/walk.png'

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
  let currentLevel;
  let moved = false;
  let prevCharPos = 0;
  let charRight = true;
  let timerId = null;

  const detectLevel = () => {
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;
  
    let height;
    for (const level of levelElements.current) {
      const levelOffset = getOffset(level);
      const levelWidth = level.offsetWidth;
  
      //currentLevel = `${level.classList.item(1)}`
  
      if (characterRight >= levelOffset && characterLeft <= levelOffset + levelWidth) {
        if (currentLevel === level.classList.item(1)) break;

        currentLevel = `${level.classList.item(1)}`
  
        if (LevelOptions[currentLevel].height < 100) {
          console.log('scroll')
          levels.current.scrollTop = 0
          height = 100 - LevelOptions[currentLevel].height
          
        } else {
          console.log('scroll')
          levels.current.scrollTop = level.scrollHeight
          // levels.current.scrollTo({
          //   top: level.scrollHeight,
          //   behavior: 'smooth',
          // });
          height = 150 - LevelOptions[currentLevel].height
        }
        break;
      }
    }
    characterRef.current.style.bottom = `${height}vh`
  }

  const visualCharacter = () => {
    const characterLeft = getOffset(characterRef.current);
    const charImg = characterRef.current.firstChild;

    charImg.classList.add('walking');
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      charImg.classList.remove('walking');
    }, 150);

    // pointing character in the right direction
    if (characterLeft > prevCharPos && !charRight) {
      charImg.style.transform = 'none';
      charRight = true;
    } else if (characterLeft < prevCharPos && charRight)  {
      charImg.style.transform = 'scaleX(-1)';
      charRight = false;
    }
    prevCharPos = characterLeft;
  }
  
  const positionCharacter = () => {
    //const scrollOffset = window.scrollX;
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;

    

    detectLevel()

    //if (isAnimating.current) return;

    // Find the ground element at the current scroll offset
    let targetGroundElement;
    for (const groundBlockElement of groundBlockElements.current) {
      const groundBlockOffset = getOffset(groundBlockElement);
      const groundBlockWidth = groundBlockElement.offsetWidth;

      if (characterRight >= groundBlockOffset && characterLeft <= groundBlockOffset + groundBlockWidth) {
        targetGroundElement = groundBlockElement;
        console.log('found block')
        break;
      }
    }
    if (targetGroundElement) {
      if (!moved) {
        console.log('jump')
        console.log(characterRef.current.style.bottom)
        //characterRef.current.style.transform = 'translateY(-50px)';
        characterRef.current.classList.add('movedUp');
        moved = true;
      }
    } else {
      //characterRef.current.style.transform = 'none';
      characterRef.current.classList.remove('movedUp');
      moved = false;
    }

  };
  

  useEffect(() => {
    setTimeout(() => {
      // Store references to the ground elements when the component mounts
      groundBlockElements.current = Array.from(document.querySelectorAll('.groundBlock'));
      levelElements.current = Array.from(document.querySelectorAll('.level'));
      levels.current = document.querySelectorAll('.levels')[0];
      
      // Position the character initially
      positionCharacter(); 
      
      // Call the positionCharacter function whenever the window is scrolled
      window.addEventListener('wheel', positionCharacter);
      window.addEventListener('scroll', visualCharacter);
      }, 50);

  });

  return (
      <div  ref={characterRef}
            className={`character`} 
      >
        <div className='char-img' ></div>
      </div>
  )
}

export default Character;