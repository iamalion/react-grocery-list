import ItemList from './ItemList';

const Content = ({items, setItems, handleCheck, handleDelete}) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>No items on your list. Add some!</p>
            )}
        </main>
    )
}

export default Content