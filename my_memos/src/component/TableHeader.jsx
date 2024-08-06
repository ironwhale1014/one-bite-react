import "./TableHeader.css"
import TableItemCard from "./TableItemCard.jsx";

const TableHeader = ({colunms, type}) => {
    return (
        <div className="table-header">
            {colunms.map((item, index) => {
                return (<TableItemCard key={index} item={item} index={index} type = {type}
                />);
            })}
        </div>
    );
}

export default TableHeader;