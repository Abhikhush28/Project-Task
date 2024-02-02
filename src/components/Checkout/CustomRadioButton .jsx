const CustomRadioButton = ({ label, value, checked, onChange }) => { 
    
    return (
      <label className="custom-radio-button">
        <input type="checkbox" value={value} checked={checked} onChange={onChange} />
        <div className="radio-button-text">{label}</div>
      </label>
    );
  };
  
  export default CustomRadioButton;