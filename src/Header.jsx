import React from 'react';

import { AppQuery as AppQueryType } from "./__generated__/AppQuery.graphql";
import {Header_user$ref} from './__generated__/Header_user.graphql'


export default function Header(props: { user: Header_user$ref  }: Props) {
   
    const data = useFragment(graphql`
    fragment Header_user on User {
        id 
    }
    `, props.todo)

    return (<h1>{data?.user?.id}</h1>);
  }
  