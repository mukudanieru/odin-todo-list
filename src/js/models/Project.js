export default function Project({ id = crypto.randomUUID(), name }) {
    let _name = name;

    return {
        getID: () => id,
        getName: () => _name,

        setTitle(newTitle) {
            _title = newTitle;
        },
    };
}
