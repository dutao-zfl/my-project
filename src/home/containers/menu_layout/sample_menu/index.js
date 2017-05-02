import React from 'react'
import {Link} from 'middle-core/lib/router'
import {Menu} from 'antd'
import paths from '../../../constants/paths'

const items = [{
    name:'基础表单',path:'table'
}]
export default class SampleMenu extends React.Component {
    render(){
        return (
            <Menu>
                {
                    items && items.map((item)=> {
                        return (
                            <Menu.Item>
                                <Link to={item.path}>{item.name}</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }
}