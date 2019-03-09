import * as React from "react";
import {SvgIcon} from "@material-ui/core";

import LocationOn from '@material-ui/icons/LocationOn';

export function HomeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export function PriceIcon(props:any) {
  return (
    <SvgIcon {...props}>

    </SvgIcon>
  )
}

export function AddressIcon(props:any) {
  return (
    <SvgIcon {...props}>
      LocationOn
    </SvgIcon>
  )
}

export function RatingIcon(props:any) {
  return (
    <SvgIcon {...props}>
      
    </SvgIcon>
  )
}