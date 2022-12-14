import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>

      <rect width="24" height="24" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.0175439 0.0172414)" />
        </pattern>
        <image id="image0" width="57" height="58" xlinkHref="data:image/png;base64,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" />
      </defs>
    </Svg>
  );
};

export default Icon;
