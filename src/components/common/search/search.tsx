import React from "react";
import {SearchWrapper, StyledInput} from "./styled";
import {SearchTypes} from "./search.types";
import {ReactComponent as SearchIcon} from '../../../assets/search_icon.svg'
import {isMobile} from "react-device-detect";


export const Search: React.FC<SearchTypes> = ({placeholder}) => {


  return (
    <SearchWrapper>
      <SearchIcon/>
      {!isMobile && <StyledInput type="text" placeholder={placeholder}/>}
    </SearchWrapper>
  )
}