import "./StartScreen.css"; 

type StartScreenProps = {
    onStart: () => void; 
}; 

export default function StartScreen ({ onStart }: StartScreenProps) {
    return (
        <div className="start-screen">
            <h1> 🕹️ Retro Portfolio </h1>
            <button onClick={onStart}> ▶️ Play </button>
        </div>
    );
}