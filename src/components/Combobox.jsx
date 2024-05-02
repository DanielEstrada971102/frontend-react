function Combobox(props) {
    return (
        <>
            <input type={props.type} list={props.id + "-list"} id={props.id}
                onChange={props.onChange} />
            <datalist id={props.id + "-list"}>
                {
                    props.options.map(
                        (option, indx) => (<option key={indx} value={option} />)
                    )
                }
            </datalist>
        </>
    )
}

export default Combobox