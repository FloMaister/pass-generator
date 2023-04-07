import SelectValue from "../selectValue/selectValue";
import IncorrectValue from "../incorrectValue/incorrectValue";

const Message = (props) => {
    const {number} = props;
 
    if (number > 16 || number < 6) {
        return <SelectValue/>
    }

    if(number === '') {
        return <IncorrectValue/>
    }
}

export default Message;