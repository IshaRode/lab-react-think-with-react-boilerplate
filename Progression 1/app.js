// const container = document.getElementById('react-container')

// render("WHAT TO RENDER", WHERE TO RENDER)
// ReactDOM.render("Hello! I am CDN.", container); 

// Functional component
// const Container = () => {
//     return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning`, React.createElement(`div`, null, `Let's Rock and Roll`)
//     );
// }

// const container = document.getElementById('react-container')
// ReactDOM.render(React.createElement(Container),container)

//Class Component
class ReactContainer extends React.Component {
    // Constructor

    render() {
        return React.createElement(`div`, null, `Hey Kalvians! Welcome to React Learning!`,
        React.createElement(`div`, null, `Lets Rock and Roll`))
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer),container);