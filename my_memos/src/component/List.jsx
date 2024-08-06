import "./List.css"
import MemoCard from "./MemoCard.jsx";

const List = ({values}) => {


    return (
        <div className="list">
            <div className="items">
                {values.map((item) => {
                    return <MemoCard key={item.id} {...item}/>
                    // return <TableItemCard key={item.id} item={item}/>;
                })}
            </div>
        </div>
    );
}
export default List;