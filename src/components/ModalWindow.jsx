import React from 'react';
import PropTypes from 'prop-types';

class ModalWindow extends React.Component {
    state = {
        isLoading: false,
    }
    componentDidMount() {
        this.loadImage(this.props.url)
    }
    loadImage = src => {
        this.setState({ isLoading: true })
        let img = new Image()
        img.onload = () => {
            this.setState({ isLoading: false })
        }
        img.src = src
    }
    render() {
        const { isLoading } = this.state
        const { url } = this.props
        return isLoading ? <p>Загружаю...</p> : <img src={url} alt="big vk" />
    }
}
export default ModalWindow;

ModalWindow.propTypes = {
    url: PropTypes.string.isRequired,
}