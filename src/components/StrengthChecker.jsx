import React from "react";

const StrengthChecker =({password=''}) => {
    const getPasswordStrength = (password) => {
      const passwordLength = password.length;

      if(passwordLength < 1) {
        return "";
      }else if(passwordLength < 4) {
        return "Very Weak";
      }else if(passwordLength < 8) {
        return "Poor";
      }else if(passwordLength < 12) {
        return "Medium";
      }else if(passwordLength <16){
        return "Strong";
      }else{
        return "Very Strong";
      }
    };

    const passwordStrength = getPasswordStrength(password);
    if(!passwordStrength) return <React.Fragment />;

    return (
      <div className="password-strength">
        <p>Password Strength: {passwordStrength}</p>
      </div>
    );
};

export default StrengthChecker
