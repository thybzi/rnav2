import { memo } from "react";

export const Input = memo(function(props) {
    console.log('Input', props.value);

    return <input {...props} />
})
