import LevelOptions from "../levelOptions";
import './Character.scss'
import { useEffect, useRef} from 'react';

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
  const jetpacks = useRef([]);
  
  let currentLevel;
  let moved = false;
  let prevCharPos = 0;
  let charRight = true;
  let timerId = null;
  let height;

  const visualCharacter = () => {

    const characterLeft = getOffset(characterRef.current);
    const charImg = characterRef.current.firstChild;

    

    // pointing character in the right direction
    if (characterLeft > prevCharPos && !charRight) {
      charImg.style.transform = 'none';
      charRight = true;
    } else if (characterLeft < prevCharPos && charRight)  {
      charImg.style.transform = 'scaleX(-1)';
      charRight = false;
    }
    prevCharPos = characterLeft;
    if (characterRef.current.classList.contains('flying')) return;

    charImg.classList.add('walking');
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      charImg.classList.remove('walking');
    }, 150);

    
  }

  const getLevelHeightOld = () => {
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;

    
    
    for (const level of levelElements.current) {
      const levelOffset = getOffset(level);
      const levelWidth = level.offsetWidth;

  
      if (characterRight >= levelOffset && characterLeft <= levelOffset + levelWidth) {
        //if (currentLevel === level.classList.item(1)) return;

        currentLevel = `${level.classList.item(1)}`

        LevelOptions[currentLevel].alignTop ? 
          //levels.current.scrollTop = 0 : 
          //levels.current.scrollTop = 0 :
          levels.current.scrollTop = 0 : 
          levels.current.scrollTop = level.scrollHeight;
  
        height = 100 - LevelOptions[currentLevel].skyHeight
        
        console.log('new level')
        break;
      }
    }
    
  }

  const getLevelHeight = () => {
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;



    console.log(`window.innerHeight: ${window.innerHeight}`)
    
    for (const level of levelElements.current) {
      const levelOffset = getOffset(level);
      const levelWidth = level.offsetWidth;

  
      if (characterRight >= levelOffset && characterLeft <= levelOffset + levelWidth) {
        if (currentLevel === level.classList.item(1)) return;

        currentLevel = `${level.classList.item(1)}`

        LevelOptions[currentLevel].alignTop ? 
          levels.current.style.top = `0px` : 
          levels.current.style.top = `-${150 - LevelOptions[currentLevel].skyHeight}vh`;
          // levels.current.style.top = `-${(150 - LevelOptions[currentLevel].skyHeight) / 100 * window.innerHeight}px`;
  
        height = 100 - LevelOptions[currentLevel].skyHeight
        
        console.log('new level')
        break;
      }
    }
    
  }
  
  const positionCharacter = () => {
    //const scrollOffset = window.scrollX;
    const characterLeft = getOffset(characterRef.current);
    const characterRight = characterLeft + characterRef.current.offsetWidth;
    
    getLevelHeight()


    // PROCESSING JETPACK ITEM
    if (characterLeft < getOffset(jetpacks.current[0])) {
      characterRef.current.classList.remove('flying')
      jetpacks.current[0].style.opacity = 100;
      jetpacks.current[1].style.opacity = 0;
    } else if (characterLeft > getOffset(jetpacks.current[1])) {
      characterRef.current.classList.remove('flying')
      jetpacks.current[0].style.opacity = 0;
      jetpacks.current[1].style.opacity = 100;
    } else {
      characterRef.current.classList.add('flying')
      characterRef.current.classList.remove('movedUp');
      characterRef.current.style.removeProperty('bottom')
      jetpacks.current[0].style.opacity = 0;
      jetpacks.current[1].style.opacity = 0;
      return
    }
    characterRef.current.style.bottom = `${height}vh`
    




    

    //if (isAnimating.current) return;

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
      jetpacks.current = Array.from(document.querySelectorAll('.jetpack'));
      
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