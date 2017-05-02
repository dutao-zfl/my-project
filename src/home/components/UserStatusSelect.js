import React from 'react'
import {Select} from 'antd'
import { userStatusMap } from '../constants/user-status'

export default class UserStatusSelect extends React.Component{
    render(){
        return (
            <Select {...this.props}>
                {Array.from(userStatusMap).map(([value , text]) => {
                    return (
                        <Select.Option key={value} value={value.toString()}>{text}</Select.Option>
                    )
                })}
            </Select>
        )
    }
}