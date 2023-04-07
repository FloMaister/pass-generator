import SelectValue from "../selectValue/selectValue";
import IncorrectValue from "../incorrectValue/incorrectValue";

const Validator = (props) => {
    const {number} = props;
 
    if (number > 16 || number < 4) {
        return <IncorrectValue/>
    } else {
        return <SelectValue/>
    }
}

export default Validator;