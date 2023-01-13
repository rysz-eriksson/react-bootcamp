import styled from 'styled-components'

const Button = styled.button`
font-size: 20px;
margin: 10px;
padding: 10px 20px;
width: auto;
border-radius: 5%;
cursor: pointer;

${props => {
  if (props.primary) {
    return `
    background-color: #F65261;
    border-color: #F65261;
    color: white;
    `
  } else if (props.secondary) {
    return `
    background-color: transparent;
    border-color: #F65261;
    color: #F65261;
    `
  }
}
}
`

export default Button

// export const Button = ({ onClick, btnClassName, children, type = 'button' }) => {
//   return (
//       <button type={type} onClick={onClick} className={btnClassName}>
//         {children}
//       </button>
//     );
//   };

//   Button.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
//     type: PropTypes.string,
// }
  