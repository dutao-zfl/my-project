import *as React from 'react'
import { Layout } from 'antd'
import { Header,Footer } from 'basics-widget/lib/containers/index'
import DefaultLayout from 'basics-widget/lib/containers/layout/index'
const { Sider,Content } = Layout

export default class ContentLayout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <DefaultLayout>
            <div>
                <Layout style={{minHeight:600}}>
                    <Content>{this.props.children}</Content>
                </Layout>
            </div>
        </DefaultLayout>
        )
    }
}