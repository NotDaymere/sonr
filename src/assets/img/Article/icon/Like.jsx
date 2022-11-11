function Like (props) {
    return (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.62 19.3101C11.28 19.4301 10.72 19.4301 10.38 19.3101C7.48 18.3201 1 14.1901 1 7.1901C1 4.1001 3.49 1.6001 6.56 1.6001C8.38 1.6001 9.99 2.4801 11 3.8401C12.01 2.4801 13.63 1.6001 15.44 1.6001C18.51 1.6001 21 4.1001 21 7.1901C21 14.1901 14.52 18.3201 11.62 19.3101Z" stroke={props.color ? props.color : '#292D32'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Like;


