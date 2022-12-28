import { Navigation } from "./Navigation"

export const Wrapper = (props) => {
    return(
        <>
            <Navigation />
            <div className={props.className}>{props.children}</div>
        </>
    )
}