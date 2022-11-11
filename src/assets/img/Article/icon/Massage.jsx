function Massage (props) {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.89969 4.81991L14.3897 1.98991C18.1997 0.71991 20.2697 2.79991 19.0097 6.60991L16.1797 15.0999C14.2797 20.8099 11.1597 20.8099 9.25969 15.0999L8.41969 12.5799L5.89969 11.7399C0.189688 9.83991 0.189688 6.72991 5.89969 4.81991Z" stroke={props.color ? props.color : '#292D32'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.61035 12.1501L12.1904 8.56006" stroke={props.color ? props.color : '#292D32'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Massage;


