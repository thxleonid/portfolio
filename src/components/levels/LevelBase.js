import Ground from '../Ground';
import LevelOptions from '../../levelOptions';

export default function LevelBase({ children, name }) {
    return (
      <div className={`level ${name}`} style={{'justifyContent': LevelOptions[name].alignTop ? 'flex-start' : 'flex-end'}}>
        <div className="levelContainer" style={{"height" : `${LevelOptions[name].skyHeight}vh`}}>
            {children}
        </div>
        <Ground
          groundImage={require(`../../img/surfaces/${LevelOptions[name].background}`)} 
          height={LevelOptions[name].alignTop ? 160-LevelOptions[name].skyHeight : 100-LevelOptions[name].skyHeight}
        />
      </div>
    );
  }