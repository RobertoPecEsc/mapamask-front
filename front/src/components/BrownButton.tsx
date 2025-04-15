interface BrownButtonProps {
    text:string;
    onClick?: () => void;
    className?: string;
}

const BrownButton: React.FC<BrownButtonProps> = ({ text, onClick, className }) => {
    
    const buttonStyles = {
        backgroundColor: '#804517',
        fontWeight: 'bold',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
    }

    const buttonHoverStyles = {
        backgroundColor: '#411d00',
    };
    
    
    return (
        <button
            onClick={onClick}
            className={className}
            style={buttonStyles}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor)}
        >
            {text}
        </button>
    );
};

export default BrownButton;
