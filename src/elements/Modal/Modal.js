import { Component } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const modalRoot = document.getElementById('modal-root')

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.el.className = "modal"
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }

}