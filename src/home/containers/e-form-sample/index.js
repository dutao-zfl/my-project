import React from 'react'
import EForm from 'basics-widget/lib/components/e-form/index'
import {Button,Col,Input} from 'antd'
import { observer,bind } from 'middle-core/lib/store-react'
import LinkTestStore from '../../stores/linkTestStore'
import UserStatusSelect from '../../components/UserStatusSelect'
import {Link} from 'middle-core/lib/router'

export default class EFromPage extends React.Component {
    state = {
        value :{loginName: ''}
    }
    handleValueChange(){
        this.setState({
            value:{...this.state.value , ...value}
        })
    }
    render(){
        return (
            <EFormSample vlaue={this.state.value} onVaulesChange = {this.handleValueChange}/>
        )
    }
}
const defaultItemProps = {
    labelCol: {span:5},
    wrapperCol: {span:19},
    colon: true
}

function Test(props){
    return(
        <span>Test</span>
    )
}

@bind({store:LinkTestStore})
@observer
class EFormSample extends React.Component {
    static defaultProps = {
        items: [
            {id:'LoginName',label: '登录名',component:Input,placeholder:'请填写用户名',...defaultItemProps},
            {id:'RealName',label: '姓名',component:Test,...defaultItemProps},
            {id:'Status',label: '状态',component:UserStatusSelect,...defaultItemProps},
        ]
    }
    onSubmit = () => {
        console.log(123)
    }
    render(){
        console.log(this.props.store)
        return (
            <EForm {...this.props}>
                <Col span={24} style={{textAlign:'right'}}>
                    <Button type="primary" htmlType="submit" onClick={this.onSubmit}>提交</Button>
                    <Button style={{marginLeft:8}}>重置</Button>
                    <Link to="/menuLayout">登录成功</Link>
                </Col>
            </EForm>
        )
    }
}
