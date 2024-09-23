import './SwitchButton.css';

export default function SwitchButton({ id, checked, onChange }) {
    return (
        <div className="switch-button">
            <input
                type="checkbox"
                id={id}  // Use the custom id
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>
                <span className="slider"></span>
            </label>
        </div>
    );
}