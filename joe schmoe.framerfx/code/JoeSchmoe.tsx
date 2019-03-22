import * as React from "react"
import { PropertyControls, ControlType } from "framer"


type Props = {
  name: string
  gender: string
  width: number
  height: number
  radius: number
  border: string
  borderWidth: number
  background: string
}

type State = {
  gender: string
  genderFromProps: string
}

export class JoeSchmoe extends React.Component<Partial<Props>, State> {
  render() {
    const { name, radius, border, borderWidth, background } = this.props
    const { gender } = this.state
    const namePart = name.length > 0 ? name : "random"
    const generatedURL = `https://joeschmoe.io/api/v1/${gender}/${namePart}/`
    return (
      <div
        style={{
          width:"100%",
          height: "100%",
          background: `${background} url(${generatedURL}) no-repeat center center`,
          borderRadius: `${radius}px`,
          border: `${borderWidth}px solid ${border}`,
        }}
      />
    )
  }

  state = {
    gender: this.props.gender,
    genderFromProps: this.props.gender,
  }

  // Allow setting the gender from within the property panel.
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.gender !== state.genderFromProps) {
      return { gender: props.gender, genderFromProps: props.gender };
    }
  }

  static defaultProps: Props = {
    name: "Pamela",
    gender: "female",
    width: 200,
    height: 200,
    radius: 100,
    border: "rgba(0,0,0,1)",
    borderWidth: 1,
    background: "rgba(255,255,255,1)"
  }

  static propertyControls: PropertyControls<Props> = {
    gender: {
      type: ControlType.SegmentedEnum,
      options: ["female","male"],
      optionTitles: ["🙋🏻‍♀️ Female","🙋🏻‍♂️ Male"],
      title: "Gender"
    },
    name: { type: ControlType.String, title: "Name" },
    radius: { type: ControlType.Number, min: 0, title: "Radius"},
    border: { type: ControlType.Color, title: "Border" },
    borderWidth: {
      type: ControlType.Number,
      title: " ",
      min: 1,
      max: 5,
      displayStepper: true
    },
    background: { type: ControlType.Color, title: "Background"},
  }

}
