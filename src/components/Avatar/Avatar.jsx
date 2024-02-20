

const Avatar = (props) => {
    return (
        <div class={`flex flex-row max-w-48 h-full group cursor-pointer ${props.class}`} >
            <i class="bi bi-person-circle flex justify-center items-center my-auto mx-2 shadow-md text-opacity-80 group-hover:ring-1 group-hover:ring-info transition-all rounded-full text-4xl size-9"></i>
            <div class="flex flex-col flex-grow m-auto text-center overflow-hidden">
                <div class="font-bold text-sm break-all">{props.name}</div>
                <div class=" font-semibold text-xs truncate">{props.company}</div>
            </div>
            <div class="flex items-center mx-4">
                <i class="bi bi-caret-down-fill text-xs"></i>
            </div>
        </div>
    )
};

export default Avatar;