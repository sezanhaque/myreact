/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../../assets/css/Switch.css';
import { Input, Label, Span } from './styles/Switch.styles';

// function Switch({ toggleTheme, isDarkTheme }) {
//     const [isToggled, setIsToggled] = useState(isDarkTheme);

//     const onToggle = () => {
//         setIsToggled(!isToggled);
//         toggleTheme();
//     };

//     return (
//         <Label className="toggle-switch">
//             <Input type="checkbox" checked={isToggled} onChange={onToggle} />
//             <Span className="switch" />
//         </Label>
//     );
// }
function Switch({ toggleTheme, isDarkTheme }) {
    return (
        <Label className="toggle-switch">
            <Input type="checkbox" checked={isDarkTheme} onChange={() => toggleTheme()} />
            <Span className="switch" />
        </Label>
    );
}
export default Switch;
