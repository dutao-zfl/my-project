import React from 'react'
import ContainerTable from 'basics-widget/lib/components/container-table/index'
import SiderDialog from 'basics-widget/lib/components/sider-dialog/index'

export default class TreeList extends React.Component{
    constructor(props){
        super(props)
        this.columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            width: '40%',
            render: 'click',
            onCellClick:(text, record, index) => this.renderColumn(this.data, index, 'name', text)

        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width: '30%',
        }, {
            title: '最新数据时间',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: 'operate',
            buttonArr: [{
                text:'删除',
                onClickCb(){
                    console.log(1234)

                    //this.handleDelete()
                }
            }]
        }];

        this.data = [{
            key: 1,
            name: '本机容器',
            type: '容器',
            date: '2017-04-16',
            children: [{
                key: 11,
                name: '服务器',
                type: '组',
                date: '2017-04-16',
            }, {
                key: 12,
                name: '数据库',
                type: '组',
                date: '2017-04-16',
                children: [{
                    key: 121,
                    name: '10.1.1.77',
                    type: 'Oracle',
                    date: '2017-04-16',
                }],
            }, {
                key: 13,
                name: '应用组',
                type: '组',
                date: '2017-04-16',
                children: [{
                    key: 131,
                    name: '0.1.1.79-query1',
                    type: 'WebLogic 9.x 10.x',
                    date: '2017-04-16',
                    children: [{
                        key: 13111,
                        name: 'query1_/uddiexplorer',
                        type: 'WebApp',
                        date: '2017-04-17',
                    },{
                        key: 13112,
                        name: 'AdminServer_/console-help',
                        type: 'WebApp',
                        date: '2017-04-17',
                    }],
                }],
            }],
        }];
        this.state = {
            visible :false
        }
    }
    renderColumn(){
        this.setState({visible:true})
    }
    handleDelete(){

    }
    render(){
        return (
            <div>
                <ContainerTable columns ={this.columns}
                                source ={this.data}
                                pagination = {this.data.length>10}
                                loading = {false}
                />
                <SiderDialog visible={this.state.visible}/>
            </div>
        )
    }
}