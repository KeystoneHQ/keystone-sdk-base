import React from 'react';
import { Button } from './Button'

type Props = {
    title: string
    description: string
    items: {
        header: string
        detail: string
    }[]
}


export const InfoBox = (props: Props) => {
    <div>
        <div style={{color:'#'}}>{props.title}</div>
        <div>{props.description}</div>
        <div>
            {props.items.map(each => <div>
                <div>{each.header}</div>
                <div>{each.detail}</div>
            </div>)}
        </div>
    </div>
}