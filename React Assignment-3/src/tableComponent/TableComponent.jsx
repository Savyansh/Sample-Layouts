import './TableComponent.css';

function TableComponent(props) {
    return (
        <div className="content">
            <table className="tbl">
                <tr><th>ID</th><th>Name</th><th>Author</th><th>Publication</th></tr>
                {
                    props.bookDetails.map((book) =>
                        <tr><td>{book.Id}</td><td>{book.Name}</td>
                            <td>{book.Author}</td><td>{book.Publication}</td>
                        </tr>
                    )
                }
            </table>

        </div>
    );
}

export default TableComponent;