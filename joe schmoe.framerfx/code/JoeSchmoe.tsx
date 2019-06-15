import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function JoeSchmoe(props) {
    const generatedURL = `https://joeschmoe.io/api/v1/${props.gender}/${
        props.name
    }/`
    return (
        <Frame
            image={generatedURL}
            backgroundColor={props.background}
            border={`${props.borderWidth}px solid ${props.border}`}
            borderRadius={`${props.radius}%`}
            width={props.width}
            height={props.height}
        />
    )
}

JoeSchmoe.defaultProps = {
    width: 100,
    height: 100,
    name: "Joe",
    gender: "male",
    radius: 100,
    border: "rgba(0,0,0,1)",
    borderWidth: 1,
    background: "rgba(255,255,255,1)",
}

addPropertyControls(JoeSchmoe, {
    gender: {
        type: ControlType.SegmentedEnum,
        options: ["female", "male"],
        optionTitles: ["🙋🏻‍♀️ Female", "🙋🏻‍♂️ Male"],
        title: "Gender",
    },
    name: { type: ControlType.String, title: "Name" },
    radius: { type: ControlType.Number, min: 0, title: "Radius" },
    border: { type: ControlType.Color, title: "Border" },
    borderWidth: {
        type: ControlType.Number,
        title: "Border Width",
        min: 0,
        max: 50,
        displayStepper: true,
    },
    background: { type: ControlType.Color, title: "Background" },
})
