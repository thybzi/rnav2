import { memo } from "react";

export const ArrayBlock = memo(function({values}) {
    console.log('ArrayBlock');

    return <div>{values.join(' ')}</div>
})
