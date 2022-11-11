function Comment (props) {
    return (
        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 16.93H12.5L8.04999 19.89C7.38999 20.33 6.5 19.86 6.5 19.06V16.93C3.5 16.93 1.5 14.93 1.5 11.93V5.92993C1.5 2.92993 3.5 0.929932 6.5 0.929932H16.5C19.5 0.929932 21.5 2.92993 21.5 5.92993V11.93C21.5 14.93 19.5 16.93 16.5 16.93Z" stroke={props.color ? props.color : '#292D32'} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Comment;


