import './Test.css';

function scroll(){
    const element = document.getElementsByClassName('mainCont')[0];
    const scrollAmount = 100; // Adjust the scroll amount as needed

    element.scrollTop = element.scrollHeight; // Scroll down
}

function Test() {
  return (<>
    <div class='mainCont'>
        <div class='el el1'></div>
        <div class='el el2'></div>
        <div class='el el3'></div>
        <div class='el el4'></div>
    </div>
    <button onClick={scroll}>Test</button>
    </>
  );
}

export default Test;
