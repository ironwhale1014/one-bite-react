import "./TableItemCard.css";

const TableItemCard = ({item, index, type}) => {
    return (
        <div className={`table-item-card item_${type}_${index}`}>
            {item}
        </div>
    );
}

export default TableItemCard;