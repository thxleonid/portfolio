import Background from '../Background';
import LevelOptions from '../../levelOptions';

export default function LevelBase({ children, name }) {
    return (
      <div className={`level ${name}`}>
        <div className="levelContainer" style={{"height" : `${LevelOptions[name].height}vh`}}>
            {children}
        </div>
        <Background
          groundImage={require(`../../img/surfaces/${LevelOptions[name].background}`)}
        />
      </div>
    );
  }