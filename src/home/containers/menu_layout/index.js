import React from 'react'
import {Header,Footer} from 'basics-widget/lib/containers/index'
import DefaultLayout from 'basics-widget/lib/containers/layout/index'
import {Layout} from 'antd'
import SampleMenu from './sample_menu/index'
const {Sider , Content } = Layout

export default class MenuLayout extends React.Component {
    render(){
        return (
            <DefaultLayout>
                <div>
                    <Header/>
                    <Layout style={{minHeight:600}}>
                        <Sider>
                            <SampleMenu/>
                        </Sider>
                        <Content>{this.props.children}</Content>
                    </Layout>
                    <Footer/>
                </div>
            </DefaultLayout>
        )
    }
}