import {ImageWithPreviewTypes} from "./imageWithPreview.types";
import React, {useState} from "react";
import { CardImg } from "../card/styled";
import {Image} from "antd";

export const ImageWithPreview: React.FC<ImageWithPreviewTypes> = ({url, width, height}) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <CardImg style={{width, height}} image={url} onClick={() => setVisible(true)}/>
      <Image
        style={{
          display: 'none',
        }}
        src={url}
        preview={{
          visible,
          src: url,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </>
  );
}
