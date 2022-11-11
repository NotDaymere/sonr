function Comment (props) {
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4668 12.5154H9.53346L6.27012 14.686C5.78612 15.0087 5.13346 14.664 5.13346 14.0774V12.5154C2.93346 12.5154 1.4668 11.0487 1.4668 8.84869V4.44865C1.4668 2.24865 2.93346 0.781982 5.13346 0.781982H12.4668C14.6668 0.781982 16.1335 2.24865 16.1335 4.44865V8.84869C16.1335 11.0487 14.6668 12.5154 12.4668 12.5154Z" stroke={props.color} stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Comment;